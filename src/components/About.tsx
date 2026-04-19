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

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative border-t border-[var(--border)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-28 md:grid-cols-[1fr_1.2fr] md:py-36">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]"
          >
            About
          </motion.p>

          <motion.h2
            id="about-headline"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl"
          >
            Matt.
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]"
          >
            Founder · London, Ontario
          </motion.p>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl md:leading-[1.6]">
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            I started Cortecs because I kept watching small businesses try to
            figure out AI on their own — downloading tools, paying for
            subscriptions, and ending up with nothing that stuck.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            My background is in applied AI and software. I run a working home
            lab with dedicated AI hardware so I can build and test real
            private deployments — not just recommend the same cloud tools
            every other consultant does.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            I&apos;m not a big-firm salesperson. I&apos;m the person who will
            actually be in the room, and the person you&apos;ll email when
            something needs adjusting.{" "}
            <span className="text-[var(--fg)]">
              If that sounds like the kind of help you&apos;re looking for,
              let&apos;s talk.
            </span>
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--fg)]"
            >
              Start a conversation
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
      </div>
    </section>
  );
}
