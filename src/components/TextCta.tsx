import Link from "next/link";
import { ReactNode } from "react";

// Secondary CTA — mono text, 1px green underline, arrow suffix. See
// .claude/skills/miller-instrument-theme/SKILL.md "Primary / Secondary CTA".
export default function TextCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border-b border-green pb-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-green-bright ${className}`}
    >
      {children} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
