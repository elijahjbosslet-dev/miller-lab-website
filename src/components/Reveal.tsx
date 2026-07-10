"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Subtle scroll-triggered fade-in — opacity only, <=0.3s, per the bulletin
// theme's "nothing should drift/float" rule. No y-translate.
export default function Reveal({
  children,
  delay = 0,
  duration = 0.3,
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
