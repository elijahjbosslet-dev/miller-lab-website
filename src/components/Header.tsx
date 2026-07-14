"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { lab } from "@/lib/content";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="rule sticky top-0 z-50 bg-[color:var(--header-bg)] backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center border-[color:var(--hair-strong)] border bg-[color:var(--logo-plate)]">
            <Image src="/logo.png" alt="" width={26} height={26} priority className="h-[26px] w-[26px]" />
          </span>
          <span className="font-mono text-[15px] font-extrabold tracking-[0.16em] text-ink-bright">
            MILLER&nbsp;LAB
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-green-text" : "text-ink-2 hover:text-green-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={lab.donateUrl}
            className="bg-cta-bg px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-cta-ink transition-colors hover:bg-cta-hover"
          >
            Donate
          </a>
          <div className="border-l-[color:var(--hair)] border-l pl-6">
            <ThemeToggle />
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </Container>

      {open && (
        <div className="rule bg-[color:var(--header-bg)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-mono text-sm font-medium uppercase tracking-[0.14em] ${
                  pathname === link.href ? "text-green-text" : "text-ink-2"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <a
                href={lab.donateUrl}
                onClick={() => setOpen(false)}
                className="inline-block bg-cta-bg px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.1em] text-cta-ink"
              >
                Donate
              </a>
              <ThemeToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
