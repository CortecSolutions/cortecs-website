"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const faqs = [
  {
    q: "Isn't AI only for big companies?",
    a: "No. The tools that used to cost a bank to deploy are now a monthly subscription you already have access to. A 10-person business can get the same leverage a Fortune 500 gets — it just needs someone to set it up properly.",
  },
  {
    q: "Will AI replace my staff?",
    a: "Not the ones doing the work that matters. AI is good at the boring, repetitive parts — invoice entry, scheduling, first-draft emails, summarizing long documents. Your people get freed up for the judgment calls, the customer conversations, and the work that actually grows the business.",
  },
  {
    q: "What does it cost?",
    a: "The consultation is a flat fee and I'll tell you what it is on the intro call — no hidden packages. After that, you only spend what the tools themselves cost (usually $20-$50 per person per month for something like Claude or Copilot). Custom work is scoped per project. Nothing is billed hourly, and there are no retainers.",
  },
  {
    q: "Is my data safe?",
    a: "That depends on which setup you choose, and I'll walk you through the options. For sensitive work — client records, financials, HR — I can set up tools that keep your data on your own systems or on private infrastructure I run. For everyday work, the major providers are generally fine, and I'll tell you honestly which is which.",
  },
  {
    q: "Why not just use ChatGPT on my own?",
    a: "You absolutely can, and I'll tell you so if that's the right answer. What I help with is the next step: connecting it to your actual files, your actual workflows, and your actual team so it saves real time instead of sitting in another browser tab.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-headline"
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
          FAQ
        </motion.p>

        <motion.h2
          id="faq-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-[22ch] text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Straight answers to the questions owners actually ask.
        </motion.h2>

        <div className="mt-16 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group py-6 md:py-8"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)] md:text-xl">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition group-open:rotate-45 group-open:border-[var(--fg)] group-open:text-[var(--fg)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[var(--fg-muted)] md:text-lg md:leading-relaxed">
                {f.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
