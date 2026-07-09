import { ReactNode } from "react";

// Editorial, journal-style section header: a numbered gutter column next to
// eyebrow/title/description, used at the top of nearly every section on the
// site so the whole thing reads as one indexed document rather than a stack
// of generic SaaS-template blocks.
export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  action,
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`grid gap-6 border-t pt-8 lg:grid-cols-12 lg:gap-8 ${
        isDark ? "border-white/15" : "border-slate-200"
      }`}
    >
      <div className="lg:col-span-2">
        <span
          className={`section-index text-sm ${isDark ? "text-white/40" : "text-slate-400"}`}
        >
          {index}
        </span>
      </div>
      <div className="lg:col-span-7">
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
      {action && <div className="lg:col-span-3 lg:justify-self-end">{action}</div>}
    </div>
  );
}
