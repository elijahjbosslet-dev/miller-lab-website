"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import Container from "./Container";
import { lab } from "@/lib/content";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services & Rates" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8" priority />
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
            {lab.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-green-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={lab.donateUrl}
            className="inline-flex items-center gap-1.5 border-b border-green-600 pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-green-700 transition-colors hover:text-green-800"
          >
            <Heart size={13} />
            Donate
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-semibold uppercase tracking-[0.1em] ${
                  pathname === link.href ? "text-green-600" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={lab.donateUrl}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-green-700"
            >
              <Heart size={14} />
              Donate
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
