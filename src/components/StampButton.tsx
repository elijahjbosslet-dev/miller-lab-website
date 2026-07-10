import Link from "next/link";
import { ReactNode } from "react";

// Primary CTA — see SKILL.md "Stamp button" recipe.
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
      className="hard-shadow inline-block -rotate-1 rounded-[3px] border-[2.5px] border-ink bg-green-600 px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.05em] text-green-ink transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-green-400 hover:shadow-[1px_1px_0_var(--color-ink)]"
    >
      {children}
    </Link>
  );
}
