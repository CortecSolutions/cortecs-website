"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_URL?.replace(/\/$/, "") ||
  "https://chat.cortecs.ca";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

const SESSION_KEY = "cortecs.chat.sessionId";
const SEEN_KEY = "cortecs.chat.lastSeen";
const POLL_MS_ACTIVE = 3500;
const POLL_MS_IDLE = 9000;

type TurnstileAPI = {
  render: (
    container: HTMLElement,
    opts: {
      sitekey: string;
      size?: "normal" | "compact" | "invisible";
      execution?: "render" | "execute";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
      "timeout-callback"?: () => void;
      appearance?: "always" | "execute" | "interaction-only";
    }
  ) => string;
  execute: (widget: string | HTMLElement) => void;
  reset: (widget: string | HTMLElement) => void;
  remove: (widget: string | HTMLElement) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileAPI;
  }
}

type ChatMessage = {
  id: number | string;
  author: "visitor" | "matt" | "system";
  body: string;
  at: number;
};

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  const existing = window.localStorage.getItem(SESSION_KEY);
  if (existing && /^[a-z0-9-]{8,64}$/i.test(existing)) return existing;
  const fresh = uuid();
  window.localStorage.setItem(SESSION_KEY, fresh);
  return fresh;
}

function getLastSeen(): number {
  if (typeof window === "undefined") return 0;
  return Number(window.localStorage.getItem(SEEN_KEY) || 0);
}

function setLastSeen(ts: number) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SEEN_KEY, String(ts));
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unread, setUnread] = useState(0);
  const sessionId = useMemo(getOrCreateSessionId, []);
  const lastAtRef = useRef<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const lastSendRef = useRef<number>(0);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileIdRef = useRef<string | null>(null);
  const turnstileResolverRef = useRef<((t: string | null) => void) | null>(null);

  const welcome = useMemo<ChatMessage[]>(
    () => [
      {
        id: "welcome",
        author: "matt",
        body:
          "Hey. This goes straight to my phone. Ask a question, describe what you're trying to figure out, or book a 15-minute build. Usually a quick reply.",
        at: 0,
      },
    ],
    []
  );

  const poll = useCallback(async () => {
    if (!sessionId) return;
    try {
      const url = `${CHAT_URL}/poll?sessionId=${encodeURIComponent(
        sessionId
      )}&since=${lastAtRef.current}`;
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) return;
      const data: { messages: ChatMessage[]; now: number } = await res.json();
      if (data.messages.length > 0) {
        setMessages((prev) => {
          // Strip optimistic (local-*) messages that the server has now confirmed.
          const matchesServer = (local: ChatMessage) =>
            typeof local.id === "string" &&
            local.id.startsWith("local-") &&
            data.messages.some(
              (s) =>
                s.author === local.author &&
                s.body === local.body &&
                Math.abs(s.at - local.at) < 15000
            );
          const kept = prev.filter((m) => !matchesServer(m));
          const seen = new Set(kept.map((m) => m.id));
          const add = data.messages.filter((m) => !seen.has(m.id));
          if (add.length === 0 && kept.length === prev.length) return prev;
          const next = [...kept, ...add];
          const maxAt = add.reduce((a, m) => Math.max(a, m.at), lastAtRef.current);
          lastAtRef.current = maxAt;
          return next;
        });
        if (!open) {
          const mattMsgs = data.messages.filter((m) => m.author === "matt");
          if (mattMsgs.length > 0) setUnread((u) => u + mattMsgs.length);
        }
      }
    } catch {
      // silently ignore — next tick will retry
    }
  }, [sessionId, open]);

  useEffect(() => {
    lastAtRef.current = getLastSeen();
    void poll();
    const interval = setInterval(() => {
      void poll();
    }, open ? POLL_MS_ACTIVE : POLL_MS_IDLE);
    return () => clearInterval(interval);
  }, [poll, open]);

  useEffect(() => {
    if (open && unread > 0) setUnread(0);
  }, [open, unread]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [open, messages.length]);

  useEffect(() => {
    if (messages.length === 0) return;
    const maxAt = messages.reduce((a, m) => Math.max(a, m.at || 0), 0);
    if (maxAt > 0) setLastSeen(maxAt);
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!TURNSTILE_SITE_KEY) return;
    if (document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`)) return;
    const s = document.createElement("script");
    s.src = TURNSTILE_SCRIPT;
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (!TURNSTILE_SITE_KEY) return;
    const container = turnstileRef.current;
    if (!container) return;
    let cancelled = false;
    const tryRender = () => {
      if (cancelled) return;
      if (!window.turnstile) {
        setTimeout(tryRender, 250);
        return;
      }
      if (turnstileIdRef.current) return;
      turnstileIdRef.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        size: "invisible",
        execution: "execute",
        appearance: "interaction-only",
        callback: (token) => {
          turnstileResolverRef.current?.(token);
          turnstileResolverRef.current = null;
        },
        "error-callback": () => {
          turnstileResolverRef.current?.(null);
          turnstileResolverRef.current = null;
        },
        "expired-callback": () => {
          turnstileResolverRef.current?.(null);
          turnstileResolverRef.current = null;
        },
      });
    };
    tryRender();
    return () => {
      cancelled = true;
      if (turnstileIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileIdRef.current);
        } catch {
          /* no-op */
        }
      }
      turnstileIdRef.current = null;
    };
  }, [open]);

  async function getTurnstileToken(): Promise<string | null> {
    if (!TURNSTILE_SITE_KEY) return null;
    if (!window.turnstile || !turnstileIdRef.current) return null;
    return new Promise<string | null>((resolve) => {
      turnstileResolverRef.current = resolve;
      try {
        window.turnstile!.reset(turnstileIdRef.current!);
        window.turnstile!.execute(turnstileIdRef.current!);
      } catch {
        resolve(null);
      }
      setTimeout(() => {
        if (turnstileResolverRef.current === resolve) {
          turnstileResolverRef.current = null;
          resolve(null);
        }
      }, 20000);
    });
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = draft.trim();
    if (!body || sending) return;
    const now = Date.now();
    if (now - lastSendRef.current < 800) return;
    lastSendRef.current = now;
    setError(null);
    setSending(true);
    const optimistic: ChatMessage = {
      id: `local-${now}`,
      author: "visitor",
      body,
      at: now,
    };
    setMessages((prev) => [...prev, optimistic]);
    setDraft("");
    try {
      const turnstileToken = await getTurnstileToken();
      if (TURNSTILE_SITE_KEY && !turnstileToken) {
        throw new Error("captcha unavailable");
      }
      const res = await fetch(`${CHAT_URL}/send`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          sessionId,
          body,
          honeypot: honeypotRef.current?.value || "",
          turnstileToken,
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }
      void poll();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "send failed";
      setError(
        msg.includes("429")
          ? "Slow down a bit — rate limit."
          : msg.includes("captcha")
          ? "Couldn't verify you're human. Refresh the page and try again."
          : "Couldn't send. Email matt@cortecs.ca if this keeps failing."
      );
      setMessages((prev) => prev.filter((m) => m.id !== optimistic.id));
    } finally {
      setSending(false);
    }
  }

  const shown: ChatMessage[] = messages.length > 0 ? messages : welcome;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] flex justify-end p-4 sm:p-6">
      <div className="pointer-events-auto">
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex h-[520px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl"
              role="dialog"
              aria-label="Chat with Matt"
            >
              <header className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--fg-muted)]">
                    Live · London, Ontario
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--fg)]">
                    Chat with Matt
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </header>

              <div
                ref={scrollRef}
                className="flex-1 space-y-3 overflow-y-auto bg-[var(--bg)] px-4 py-4"
                aria-live="polite"
              >
                {shown.map((m) => (
                  <MessageBubble key={m.id} m={m} />
                ))}
                {error && (
                  <p className="rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <form
                onSubmit={submit}
                className="border-t border-[var(--border)] bg-[var(--card)] p-3"
              >
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="flex items-end gap-2">
                  <label htmlFor="chat-input" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="chat-input"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        const form = e.currentTarget.form;
                        if (form) form.requestSubmit();
                      }
                    }}
                    rows={1}
                    placeholder="Say hi, ask a question, book a build…"
                    className="max-h-40 flex-1 resize-none rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--fg-muted)]/60 focus:border-[var(--fg)] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={sending || draft.trim().length === 0}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--fg)] text-[var(--bg)] transition hover:opacity-90 disabled:opacity-30"
                    aria-label="Send message"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h16M13 6l7 6-7 6" />
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-[10px] text-[var(--fg-muted)]">
                  Enter to send · Shift+Enter for a new line
                </p>
                <div
                  ref={turnstileRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute h-0 w-0 overflow-hidden"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Open chat"}
          aria-expanded={open}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--fg)] text-[var(--bg)] shadow-xl transition hover:opacity-90"
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.svg
                key="x"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 20, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </motion.svg>
            ) : (
              <motion.svg
                key="bubble"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ rotate: 20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -20, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M21 12a8 8 0 0 1-11.6 7.12L4 21l1.88-5.4A8 8 0 1 1 21 12Z" />
              </motion.svg>
            )}
          </AnimatePresence>
          {!open && unread > 0 && (
            <span
              aria-label={`${unread} new message${unread === 1 ? "" : "s"}`}
              className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-semibold text-[var(--accent-fg)]"
            >
              {unread > 9 ? "9+" : unread}
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}

function MessageBubble({ m }: { m: ChatMessage }) {
  const isVisitor = m.author === "visitor";
  const isSystem = m.author === "system";
  if (isSystem) {
    return (
      <p className="text-center text-[11px] text-[var(--fg-muted)]">{m.body}</p>
    );
  }
  return (
    <div className={isVisitor ? "flex justify-end" : "flex justify-start"}>
      <div
        className={[
          "max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
          isVisitor
            ? "bg-[var(--fg)] text-[var(--bg)]"
            : "border border-[var(--border)] bg-[var(--card)] text-[var(--fg)]",
        ].join(" ")}
      >
        {m.body}
      </div>
    </div>
  );
}
