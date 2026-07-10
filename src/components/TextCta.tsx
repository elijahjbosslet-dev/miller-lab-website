import Link from "next/link";
import { ReactNode } from "react";

// Secondary text CTA — see SKILL.md "Text CTA" recipe.
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
      className={`inline-block border-b-[2.5px] border-green-700 font-sans text-sm font-bold uppercase tracking-[0.05em] text-ink ${className}`}
    >
      {children} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
