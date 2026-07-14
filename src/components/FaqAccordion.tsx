"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { faqs as faqsType } from "@/lib/content";

export default function FaqAccordion({ faqs }: { faqs: typeof faqsType }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="rule">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question} className="rule-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-[17px] text-ink-bright sm:text-[18px]">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={`flex h-6 w-6 shrink-0 items-center justify-center border ${
                  isOpen ? "border-green text-green-text" : "border-[color:var(--hair-strong)] text-ink-3"
                }`}
              >
                <Plus size={13} weight="bold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 text-[14px] leading-7 text-ink-2">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
