"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_URL?.replace(/\/$/, "") ||
  "https://chat.cortecs.ca";
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAC_huR0IDRIRscM0";
const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js";

// window.turnstile global is declared in ChatWidget.tsx; reuse that declaration.

const MAX_FIELD = 2000;
const MAX_CONTACT = 200;

export function IntakeForm() {
  const [business, setBusiness] = useState("");
  const [task, setTask] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const honeypotRef = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileIdRef = useRef<string | null>(null);
  const turnstileResolverRef = useRef<((t: string | null) => void) | null>(null);

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
  }, []);

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
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const turnstileToken = await getTurnstileToken();
      if (TURNSTILE_SITE_KEY && !turnstileToken) {
        throw new Error("captcha unavailable");
      }
      const res = await fetch(`${CHAT_URL}/intake`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          business: business.trim(),
          task: task.trim(),
          contact: contact.trim(),
          honeypot: honeypotRef.current?.value || "",
          turnstileToken,
        }),
      });
      if (!res.ok) {
        if (res.status === 429) throw new Error("rate-limit");
        if (res.status === 401) throw new Error("captcha-failed");
        throw new Error(`HTTP ${res.status}`);
      }
      setDone(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "send failed";
      setError(
        msg === "rate-limit"
          ? "Too many submissions from this network. Try again in a minute."
          : msg === "captcha-failed" || msg === "captcha unavailable"
          ? "Couldn't verify you're human. Try again."
          : "Connection issue — try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const valid =
    business.trim().length > 0 &&
    task.trim().length > 0 &&
    contact.trim().length > 0;

  return (
    <section
      id="intake"
      aria-labelledby="intake-heading"
      className="border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-20 md:py-28">
        <h2
          id="intake-heading"
          className="text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl"
        >
          Three questions.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
          Short answers are fine. A reply lands within 24 hours.
        </p>

        {done ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
          >
            <p className="text-lg font-medium text-[var(--fg)]">
              Got it. I&rsquo;ll reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-12 space-y-8" noValidate>
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <Field
              id="intake-business"
              label="What does your business do?"
              value={business}
              onChange={setBusiness}
              maxLength={MAX_FIELD}
              multiline
            />
            <Field
              id="intake-task"
              label="What's a task that takes too long or feels manual?"
              value={task}
              onChange={setTask}
              maxLength={MAX_FIELD}
              multiline
            />
            <Field
              id="intake-contact"
              label="Best way to reach you?"
              value={contact}
              onChange={setContact}
              maxLength={MAX_CONTACT}
              hint="Email or phone."
            />

            <div aria-live="polite" className="min-h-[1.5rem]">
              {error && (
                <p className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--fg)]">
                  {error}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={!valid || submitting}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-7 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
              >
                {submitting ? "Sending…" : "Send"}
                {!submitting && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </div>

            <div
              ref={turnstileRef}
              aria-hidden="true"
              className="pointer-events-none absolute h-0 w-0 overflow-hidden"
            />
          </form>
        )}
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
  multiline?: boolean;
  hint?: string;
};

function Field({ id, label, value, onChange, maxLength, multiline, hint }: FieldProps) {
  const className =
    "block w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-base text-[var(--fg)] placeholder:text-[var(--fg-muted)]/60 focus:border-[var(--fg)] focus:outline-none";
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--fg)]"
      >
        {label}
      </label>
      {hint && (
        <p className="text-xs text-[var(--fg-muted)]">{hint}</p>
      )}
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          required
          rows={4}
          className={className}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          required
          className={className}
        />
      )}
    </div>
  );
}
