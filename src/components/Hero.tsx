"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-headline"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[38%] h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]"
        >
          London, Ontario · AI Consulting
        </motion.p>

        <motion.h1
          id="hero-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-[18ch] text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Practical AI for the{" "}
          <span className="text-[var(--accent)]">business you already run</span>
          .
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          I help small business owners in London and surrounding area find
          where AI actually saves hours, set up the tools, train the team,
          and step back.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
          >
            Start a conversation
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
          </a>
          <a
            href="#process"
            className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-medium text-[var(--fg)] transition hover:border-[var(--fg)]"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center gap-3 text-xs text-[var(--fg-muted)]"
          aria-hidden="true"
        >
          <span className="inline-block h-px w-8 bg-[var(--border)]" />
          <span className="uppercase tracking-[0.2em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
