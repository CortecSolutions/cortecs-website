"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const steps = [
  {
    n: "01",
    title: "Bring one task",
    body: "A stack of invoices, a quote that takes an hour, an inbox that never clears. Something specific.",
  },
  {
    n: "02",
    title: "One short call",
    body: "Thirty to sixty minutes, on-site or over the phone. Walk through how the work actually happens today. The call gets recorded so nothing gets missed.",
  },
  {
    n: "03",
    title: "A working prototype back in your inbox",
    body: "Within a few days, a real tool that does the task on real inputs — plus a plain-English plan for what comes next.",
  },
];

export function DemoSection() {
  return (
    <section
      id="demo"
      aria-labelledby="demo-headline"
      className="relative border-t border-[var(--border)]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-28 md:py-36">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]"
        >
          Try it with one task
        </motion.p>

        <motion.h2
          id="demo-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[20ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          One call. One working prototype, days later.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          The fastest way to see whether AI fits the business. No slides,
          no platform pitch. Describe what eats the week on a short call,
          and a working tool shows up a few days later.
        </motion.p>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 md:p-8"
            >
              <span className="font-mono text-xs tracking-[0.22em] text-[var(--fg-muted)]">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--fg)] md:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 text-[var(--fg-muted)]">{s.body}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
          >
            Book an intro call
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
          <p className="text-sm text-[var(--fg-muted)]">
            Or ask about it in the chat. I usually reply within a few minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
