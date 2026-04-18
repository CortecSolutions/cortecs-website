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
    step: "01",
    title: "Free intro call",
    duration: "30 minutes · phone or video",
    body: "Tell me about your business and where time is being lost. No pitch. If AI isn't a fit, I'll say so.",
  },
  {
    step: "02",
    title: "On-site or remote assessment",
    duration: "One hour · $0 with a signed engagement, flat-fee otherwise",
    body: "I sit with you and your team, watch how the work actually happens, and flag the highest-value places to start.",
  },
  {
    step: "03",
    title: "Recommendations and setup",
    duration: "Typically within a week",
    body: "Written plan in plain English: which tools, how they fit together, what it costs, what to expect. Then I set them up and train your team.",
  },
  {
    step: "04",
    title: "Custom build — only if you need one",
    duration: "Scoped per project",
    body: "If the off-the-shelf tools can't do what you need, I build a private automation that does. Most clients never reach this step, and that's fine.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-headline"
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
          How it works
        </motion.p>

        <motion.h2
          id="process-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Four steps. No long contracts.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          Most engagements finish at step three. You end up with tools your
          team actually uses, not another subscription you forgot about.
        </motion.p>

        <ol className="mt-16 space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 bg-[var(--bg)] p-7 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-10 md:p-10"
            >
              <span className="font-mono text-sm tracking-[0.2em] text-[var(--accent)]">
                {s.step}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-[var(--fg)] md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {s.duration}
                </p>
              </div>
              <p className="text-[var(--fg-muted)] md:text-lg md:leading-relaxed">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
