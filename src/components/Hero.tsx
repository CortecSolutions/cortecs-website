"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-headline"
      className="relative isolate overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, scale: glowScale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[38%] h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28"
      >
        <motion.h1
          id="hero-headline"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-[18ch] text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          AI consulting and custom solutions for your business.
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          From identifying the opportunities to building the tools that
          capture them.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#intake"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
          >
            Tell me about your business
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

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center gap-3 text-xs text-[var(--fg-muted)]"
          aria-hidden="true"
        >
          <span className="inline-block h-px w-8 bg-[var(--border)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
