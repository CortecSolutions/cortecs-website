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
    title: "A real person in a real place",
    body: "Based in London, Ontario. On-site when you want it, remote when you don't. You'll know who's answering your email.",
  },
  {
    title: "Private infrastructure, if you need it",
    body: "I run my own AI hardware. For clients with sensitive data — client records, financials, employee info — there's an option that doesn't send anything to OpenAI.",
  },
  {
    title: "Works with the tools you already pay for",
    body: "Microsoft 365, Google Workspace, QuickBooks, your existing accounting or dispatch software. No rip-and-replace.",
  },
  {
    title: "Pragmatic scope",
    body: "No six-figure enterprise migrations. A clear plan, a small first step, and something working inside a few weeks.",
  },
  {
    title: "Hands-on training",
    body: "I sit with your team, on your files, using your workflows. Not a slideshow. People keep using what they learn on real work.",
  },
  {
    title: "Honest about what AI can't do",
    body: "If a task needs human judgment, I'll tell you. If an existing tool is already good enough, I'll tell you that too. You won't be sold something you don't need.",
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
          Built for small businesses in London, Ontario — not for the enterprise playbook.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          Big-consultancy pitches aren&apos;t made for a 15-person shop.
          Here&apos;s what&apos;s different about working with me.
        </motion.p>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
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
