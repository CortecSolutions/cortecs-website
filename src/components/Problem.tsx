"use client";

import { motion, type Variants } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";

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

const examples = [
  {
    before: "Parsing a stack of supplier invoices into your accounting system",
    after: "A workflow that reads the PDFs and posts the entries for you.",
  },
  {
    before: "Writing a quote from a spec sheet and a price list",
    after: "A draft quote ready for your review in under a minute.",
  },
  {
    before: "Sorting the overnight inbox before the day starts",
    after: "Email triaged by priority, drafts waiting for the five that matter.",
  },
  {
    before: "Writing up notes after every meeting",
    after: "Audio in, action items and decisions out, sent before you're back to your desk.",
  },
  {
    before: "Pulling a weekly report together from four different tools",
    after: "The report written, the numbers checked, sitting in your inbox Monday morning.",
  },
  {
    before: "Jumping between five tools to see how the business is running",
    after: "One page that pulls from all of them — what's selling, what's owed, what's stuck.",
  },
  {
    before: "Hunting through old emails and files for a past order or spec",
    after: "One search across everything the business keeps. Right answer on page one.",
  },
  {
    before: "Checking spreadsheets to see which vendors still have current insurance",
    after: "A list that watches itself, and pings you the week before something expires.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-headline"
      className="relative border-t border-[var(--border)] bg-[var(--bg-alt)]"
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
          The Problem
        </motion.p>

        <motion.h2
          id="problem-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[20ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Your business has manual tasks that take hours. AI can do them in
          seconds, once trained and integrated in your system.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          The tools are here, they work, and most of the small businesses
          around you haven&apos;t started using them yet. Here&apos;s the math
          — and a few examples of what it looks like in practice.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:grid-cols-3 md:items-end md:p-12"
        >
          <div className="md:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              A task you do 50×/week
            </p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-semibold tracking-tight text-[var(--fg)] md:text-6xl">
                10
              </span>
              <span className="text-2xl font-semibold text-[var(--fg-muted)] md:text-3xl">
                min
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[var(--fg-muted)] md:justify-center">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="md:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Given back, every month
            </p>
            <div className="mt-3 flex items-baseline gap-1">
              <AnimatedNumber
                to={35}
                suffix="+"
                className="text-5xl font-semibold tracking-tight text-[var(--fg)] md:text-7xl"
              />
              <span className="ml-2 text-2xl font-semibold text-[var(--fg-muted)] md:text-3xl">
                hours
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 max-w-3xl space-y-14 md:mt-24 md:space-y-16">
          {examples.map((item, i) => (
            <motion.div
              key={item.before}
              custom={4 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                Instead of{" "}
                {item.before.charAt(0).toLowerCase() + item.before.slice(1)},
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--fg)] md:text-2xl lg:text-[1.75rem]">
                {item.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
