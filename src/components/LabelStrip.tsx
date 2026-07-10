import { ReactNode } from "react";

// Label-maker strip — see SKILL.md recipe. Small inline tag for things
// like "LED BY" or "NOTICE".
export default function LabelStrip({ children }: { children: ReactNode }) {
  return (
    <span className="section-index inline-block bg-ink px-2 py-[3px] text-[10px] uppercase tracking-[0.06em] text-white">
      {children}
    </span>
  );
}
