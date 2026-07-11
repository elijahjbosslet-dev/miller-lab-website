import Link from "next/link";
import { ReactNode } from "react";

// Primary CTA — green fill, graphite text, green glow. See
// .claude/skills/miller-instrument-theme/SKILL.md "Primary CTA" recipe.
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
      className="inline-block bg-green px-6 py-3.5 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-graphite shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-bright"
    >
      <span aria-hidden="true">&#9656;</span> {children}
    </Link>
  );
}
