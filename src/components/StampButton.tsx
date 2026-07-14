import Link from "next/link";
import { ReactNode } from "react";

// Primary CTA — themed fill/ink so it works in both light and dark mode.
// See .claude/skills/miller-instrument-theme/SKILL.md "Primary CTA" recipe.
export default function StampButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block bg-cta-bg px-6 py-3.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-cta-ink transition-colors hover:bg-cta-hover"
    >
      <span aria-hidden="true">&#9656;</span> {children}
    </Link>
  );
}
