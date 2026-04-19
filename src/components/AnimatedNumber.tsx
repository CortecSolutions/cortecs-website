"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function AnimatedNumber({
  to,
  duration = 1.6,
  suffix,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());
  const [current, setCurrent] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setCurrent(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, count]);

  return (
    <motion.span ref={ref} aria-label={`${to}${suffix ?? ""}`} className={className}>
      <span aria-hidden="true">{current}</span>
      {suffix ? <span aria-hidden="true">{suffix}</span> : null}
    </motion.span>
  );
}
