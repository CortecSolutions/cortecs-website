"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#why", label: "Why Cortecs" },
  { href: "#faq", label: "FAQ" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActive(bestId);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.href.slice(1)));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_75%,transparent)] backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-[var(--fg)]"
        >
          <span
            className="inline-block h-6 w-6 rounded-md bg-[var(--accent)]"
            aria-hidden="true"
          />
          Cortecs
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "text-sm transition",
                    isActive
                      ? "text-[var(--fg)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)]",
                  ].join(" ")}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 36,
                    }}
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-90 md:inline-flex"
          >
            Get in touch
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] md:hidden"
            onClick={() => setOpen((v) => !v)}
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
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden"
          >
            <ul className="mx-6 mb-4 space-y-1 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-[var(--fg)] transition hover:bg-[var(--bg)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-[var(--fg)] px-4 py-3 text-center text-sm font-medium text-[var(--bg)]"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
