import { ReactNode } from "react";

// Kicker + DM Serif Display heading + optional text CTA on the right
// baseline. See .claude/skills/miller-instrument-theme/SKILL.md "Kicker".
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
        <p className="kicker">{"// "}{eyebrow}</p>
        <h2 className="font-serif mt-2 text-[30px] text-ink-bright sm:text-[34px]">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-[14px] leading-7 text-ink-2">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
