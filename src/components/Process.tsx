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
    duration: "15-30 minutes · by phone",
    body: "A short conversation about your business. Within the day, you'll receive a recommendations document with different options.",
  },
  {
    step: "02",
    title: "On-site or remote assessment",
    duration: "One hour · $250 flat fee",
    body: "An in-depth assessment of how the business actually operates. The pathway forward is tailored to what that reveals — tools, priorities, and timing all shaped to the business.",
  },
  {
    step: "03",
    title: "Implementation, setup, and team training",
    duration: "Typically within a week, depending on project scale",
    body: "A detailed implementation plan: which tools, how they fit together, what they cost, what to expect. Then the tools get installed and the team is trained on the real work. Training is also available on its own for teams that already know what they need.",
  },
  {
    step: "04",
    title: "Custom automation or software if needed",
    duration: "Scoped per project",
    body: "If off-the-shelf tools can't do the job, a small private automation gets built. Scoped tight, runs on the business's own stack or on private infrastructure. Also available as a standalone build.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-headline"
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
          Four steps, plus ongoing support when you need it.
        </motion.h2>

        <ol className="mt-16 space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 bg-[var(--bg)] p-7 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-10 md:p-10"
            >
              <span className="font-mono text-sm tracking-[0.2em] text-[var(--fg-muted)]">
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
