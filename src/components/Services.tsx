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

type Service = {
  eyebrow: string;
  title: string;
  blurb: string;
  points: string[];
  outcome: string;
  emphasis: "primary" | "secondary";
};

const services: Service[] = [
  {
    eyebrow: "Start here",
    title: "AI Adoption Consultation",
    blurb:
      "A one-hour working session to look at how your business actually runs and find where AI will save real time.",
    points: [
      "On-site or remote, your call",
      "Written recommendations you can act on",
      "Tool selection matched to what you already use",
    ],
    outcome: "Leave with a short list of what to try first, and why.",
    emphasis: "primary",
  },
  {
    eyebrow: "When your team is ready",
    title: "AI Training & Onboarding",
    blurb:
      "Hands-on training for you and your staff on Claude, Copilot, and the day-to-day tools that fit your work.",
    points: [
      "Small-group sessions, in your office or over video",
      "Real tasks from your business, not generic demos",
      "Follow-up so what you learned actually sticks",
    ],
    outcome: "Your team using AI with confidence inside a few weeks.",
    emphasis: "primary",
  },
  {
    eyebrow: "If you need it",
    title: "Custom Automation",
    blurb:
      "When consulting uncovers something the off-the-shelf tools can’t handle, I build a small, private automation that does.",
    points: [
      "Only when an existing tool won’t do the job",
      "Runs on your stack or on private infrastructure",
      "Scoped tight — no long enterprise projects",
    ],
    outcome: "A specific job, done reliably, without another monthly subscription.",
    emphasis: "secondary",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-headline"
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
          Services
        </motion.p>

        <motion.h2
          id="services-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Three ways to work together.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          Most clients start with a consultation and go from there. Nothing
          here is a long contract, and you won&apos;t hear a pitch for software
          you don&apos;t need.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={[
                "flex flex-col rounded-2xl border p-7 md:p-8",
                s.emphasis === "primary"
                  ? "border-[var(--border)] bg-[var(--bg)]"
                  : "border-dashed border-[var(--border)] bg-transparent",
              ].join(" ")}
            >
              <p
                className={[
                  "font-mono text-[11px] uppercase tracking-[0.22em]",
                  s.emphasis === "primary"
                    ? "text-[var(--accent)]"
                    : "text-[var(--fg-muted)]",
                ].join(" ")}
              >
                {s.eyebrow}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[var(--fg)] md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-4 text-[var(--fg-muted)]">{s.blurb}</p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--fg-muted)]">
                {s.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={[
                        "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full",
                        s.emphasis === "primary"
                          ? "bg-[var(--accent)]"
                          : "bg-[var(--fg-muted)] opacity-60",
                      ].join(" ")}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-[var(--border)] pt-5 text-sm font-medium text-[var(--fg)]">
                {s.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 text-sm text-[var(--fg-muted)]"
        >
          Not sure which one fits?{" "}
          <a
            href="#contact"
            className="text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--fg)]"
          >
            Send a note
          </a>{" "}
          and we&apos;ll figure it out on a free intro call.
        </motion.p>
      </div>
    </section>
  );
}
