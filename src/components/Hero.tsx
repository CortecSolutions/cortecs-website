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
  const meshY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const meshScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-headline"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: meshY, scale: meshScale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute right-[-12%] top-[-22%] h-[78vmin] w-[78vmin] rounded-full opacity-70 blur-[120px] dark:opacity-95"
          style={{
            background:
              "radial-gradient(circle at center, rgba(71, 85, 105, 0.65), transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-12%] h-[68vmin] w-[68vmin] rounded-full opacity-60 blur-[120px] dark:opacity-85"
          style={{
            background:
              "radial-gradient(circle at center, rgba(100, 116, 139, 0.45), transparent 62%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[28%] h-[58vmin] w-[58vmin] -translate-x-1/2 rounded-full opacity-30 blur-[140px] dark:opacity-55"
          style={{
            background:
              "radial-gradient(circle at center, rgba(148, 163, 184, 0.3), transparent 70%)",
          }}
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--fg-muted) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, transparent 30%, black 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 30%, black 80%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28"
      >
        <motion.h1
          id="hero-headline"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-[18ch] text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--fg)] [text-wrap:balance] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]"
        >
          AI consulting and custom solutions for your business.
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          From identifying the opportunities to building the tools that
          capture them.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap gap-3"
        >
          <a
            href="#intake"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3.5 text-sm font-medium text-[var(--bg)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_44px_-8px_rgba(248,250,252,0.45)]"
          >
            Tell me about your business
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
      </motion.div>
    </section>
  );
}
