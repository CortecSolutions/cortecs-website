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

const reasons = [
  {
    title: "Local presence",
    body: "On-site in London and surrounding area. One point of contact from intro call through installation. You'll know who's answering your email.",
  },
  {
    title: "Private infrastructure when the data calls for it",
    body: "For sensitive work — client records, financials, employee info — there's a setup option that keeps everything on private hardware and off public cloud AI entirely.",
  },
  {
    title: "Works with the tools already in place",
    body: "Microsoft 365, Google Workspace, QuickBooks, your existing accounting or dispatch software. No rip-and-replace.",
  },
  {
    title: "Honest about what AI can't do",
    body: "If a task needs human judgment, the plan says so. If an existing tool is already good enough, the plan says that too. No sales pressure for software the business doesn't need.",
  },
];

export function WhyCortecs() {
  return (
    <section
      id="why"
      aria-labelledby="why-headline"
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
          Why Cortecs
        </motion.p>

        <motion.h2
          id="why-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Custom solutions built for your business.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          Every business runs differently. The plan starts from how yours
          actually works — no templates, no reused decks.
        </motion.p>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.li
              key={r.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-3 bg-[var(--bg)] p-7 md:p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
                {r.title}
              </h3>
              <p className="text-[var(--fg-muted)]">{r.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
