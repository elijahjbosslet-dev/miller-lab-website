"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, animate } from "motion/react";

// Counts up to the numeric part of a value like "25+" when it scrolls into
// view, keeping any non-numeric suffix ("+", "%") static.
export default function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView || target === null || !ref.current) return;
    if (reduceMotion) {
      ref.current.textContent = `${target}${suffix}`;
      return;
    }
    const controls = animate(count, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduceMotion, count]);

  if (target === null) {
    return <p className="font-display text-2xl font-bold text-white">{value}</p>;
  }

  return (
    <p ref={ref} className="font-display text-2xl font-bold text-white">
      0{suffix}
    </p>
  );
}
