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
    before: "Pulling a weekly report together from four different tools",
    after: "The report written, the numbers checked, sitting in your inbox Monday morning.",
  },
  {
    before: "Answering the same customer questions over and over",
    after: "A small assistant that handles the routine ones in your voice.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-headline"
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
          Your business has tasks that take hours.{" "}
          <span className="text-[var(--accent)]">
            AI can do them in seconds.
          </span>
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
          around you haven&apos;t started using them yet. A 10-minute task done
          50 times a week is 35 hours a month. Here&apos;s what that looks like
          in practice.
        </motion.p>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {examples.map((item, i) => (
            <motion.li
              key={item.before}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-4 bg-[var(--bg)] p-7 md:p-8"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)] opacity-60"
                />
                <p className="text-[var(--fg-muted)]">{item.before}</p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                />
                <p className="font-medium text-[var(--fg)]">{item.after}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
