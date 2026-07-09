import { ReactNode } from "react";

// Section header: eyebrow, title, optional description and action, sitting
// under a plain top rule. Deliberately no section-numbering ("01 / 02")
// gutter — that enumeration pattern reads as templated rather than
// considered, however tidy it looks in isolation.
export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-6 border-t pt-8 ${
        isDark ? "border-white/15" : "border-slate-200"
      }`}
    >
      <div className="max-w-2xl">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-green-400" : "text-green-600"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-xl text-base leading-7 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
