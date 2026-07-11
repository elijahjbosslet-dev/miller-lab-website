"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Instrument boot-up reveal — opacity 0->1, translateY(18px)->0, staggered
// via `delay`. Elements already in view (the hero) animate immediately on
// load; elements further down the page animate in as they're scrolled to.
export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
