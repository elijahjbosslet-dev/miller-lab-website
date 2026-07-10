"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Container from "./Container";
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
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-card">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={32} height={32} priority className="h-8 w-8" />
          <span className="font-display text-[17px] tracking-[0.01em] text-ink">MILLER LAB</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[13px] font-semibold uppercase tracking-[0.07em] transition-colors ${
                  active ? "text-green-700" : "text-ink-mute hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={lab.donateUrl}
            className="rounded-[2px] bg-green-600 px-4 py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.07em] text-green-ink transition-colors hover:bg-green-400"
          >
            Donate
          </a>
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
        <div className="dashed-rule bg-card lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-sans text-sm font-semibold uppercase tracking-[0.07em] ${
                  pathname === link.href ? "text-green-700" : "text-ink-mute"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={lab.donateUrl}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block w-fit rounded-[2px] bg-green-600 px-4 py-2 font-sans text-sm font-semibold uppercase tracking-[0.07em] text-green-ink"
            >
              Donate
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
