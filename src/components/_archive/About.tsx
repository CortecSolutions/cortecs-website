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

const commitments = [
  { n: "01", title: "Available 365 days a year." },
  { n: "02", title: "Quick turnaround." },
  { n: "03", title: "Efficient solutions." },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
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
          What to count on
        </motion.p>

        <motion.h2
          id="about-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Three commitments.
        </motion.h2>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {commitments.map((c, i) => (
            <motion.li
              key={c.n}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10"
            >
              <span className="font-mono text-xs tracking-[0.22em] text-[var(--fg-muted)]">
                {c.n}
              </span>
              <h3 className="text-xl font-semibold leading-snug tracking-tight text-[var(--fg)] md:text-2xl">
                {c.title}
              </h3>
            </motion.li>
          ))}
        </ul>

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
        </motion.div>
      </div>
    </section>
  );
}
