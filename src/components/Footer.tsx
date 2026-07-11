import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { LinkedInIcon, XIcon, YouTubeIcon } from "./social-icons";
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
    links: [{ href: lab.donateUrl, label: "Donate" }],
  },
];

export default function Footer() {
  return (
    <footer className="rule text-ink-3">
      <Container className="grid gap-10 py-14 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border-[color:var(--hair-strong)] border bg-graphite-2">
              <Image src="/logo.png" alt="" width={20} height={20} className="h-5 w-5" />
            </span>
            <span className="font-mono text-[13px] font-extrabold tracking-[0.16em] text-ink-bright">
              MILLER&nbsp;LAB
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[13.5px] leading-6 text-ink-2">{lab.tagline}.</p>
          <a
            href={`mailto:${lab.contactEmail}`}
            className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.06em] text-green transition-colors hover:text-green-bright"
          >
            <EnvelopeSimple size={14} />
            {lab.contactEmail}
          </a>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={lab.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-3 transition-colors hover:text-green-bright"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={lab.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-ink-3 transition-colors hover:text-green-bright"
            >
              <XIcon size={16} />
            </a>
            <a
              href={lab.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-ink-3 transition-colors hover:text-green-bright"
            >
              <YouTubeIcon size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="label">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[12.5px] text-ink-2 transition-colors hover:text-green-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="rule">
        <Container>
          <p className="flex flex-wrap items-center justify-between gap-2 py-4 font-mono text-[10px] tracking-[0.14em] text-ink-3">
            <span>&copy; {new Date().getFullYear()} MILLER LAB</span>
            <span>{lab.affiliation}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
