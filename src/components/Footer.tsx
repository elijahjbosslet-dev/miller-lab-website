import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Container from "./Container";
import { lab } from "@/lib/content";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/research", label: "Research" },
      { href: "/team", label: "Team" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Support",
    links: [{ href: lab.donateUrl, label: "Donate (GoFundMe)" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-grain relative overflow-hidden border-t border-slate-200 bg-navy-950 text-slate-300">
      <Container className="relative grid gap-10 py-16 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                loading="eager"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-semibold text-white">
              {lab.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{lab.tagline}.</p>
          <a
            href={`mailto:${lab.contactEmail}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300"
          >
            <Mail size={16} />
            {lab.contactEmail}
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="section-index text-xs uppercase tracking-[0.14em] text-white/50">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {lab.shortName}. All rights reserved.
          </p>
          <p>{lab.affiliation}</p>
        </Container>
      </div>
    </footer>
  );
}
