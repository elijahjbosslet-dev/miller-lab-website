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
    <footer className="border-t-[3px] border-ink bg-card text-ink-mute">
      <Container className="grid gap-10 py-14 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              loading="eager"
              className="h-8 w-8"
            />
            <span className="font-display text-[15px] text-ink">MILLER LAB</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink-faint">{lab.tagline}.</p>
          <a
            href={`mailto:${lab.contactEmail}`}
            className="section-index mt-5 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.04em] text-green-700 hover:text-green-600"
          >
            <EnvelopeSimple size={15} />
            {lab.contactEmail}
          </a>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={lab.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-mute transition-colors hover:text-green-700"
            >
              <LinkedInIcon size={17} />
            </a>
            <a
              href={lab.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-ink-mute transition-colors hover:text-green-700"
            >
              <XIcon size={17} />
            </a>
            <a
              href={lab.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-ink-mute transition-colors hover:text-green-700"
            >
              <YouTubeIcon size={17} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="section-index text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-mute transition-colors hover:text-green-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="dashed-rule">
        <Container>
          <p className="section-index py-4 text-[10.5px] uppercase tracking-[0.04em] text-ink-faint">
            &copy; {new Date().getFullYear()} Miller Lab &middot; {lab.affiliation}
          </p>
        </Container>
      </div>
    </footer>
  );
}
