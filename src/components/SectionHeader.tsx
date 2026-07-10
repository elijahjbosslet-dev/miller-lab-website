import { ReactNode } from "react";

// Kicker + Archivo Black title + optional text CTA on the right baseline.
// See SKILL.md "Kicker" and "SectionHeader -> ..." mapping.
export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-6">
      <div className="max-w-2xl">
        <p className="section-index text-[13px] font-semibold uppercase tracking-[0.15em] text-green-700">
          {eyebrow}
        </p>
        <h2 className="font-display mt-2 text-[34px] uppercase text-ink">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-base leading-7 text-ink-mute">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
