import { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

// Flat-paper page hero — no dark band, no gradients. See SKILL.md
// "Page patterns": kicker + Archivo Black h1 + short dek, dashed rule below.
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="dashed-rule-b">
      <Container className="py-14 sm:py-16">
        <Reveal>
          {eyebrow && (
            <p className="section-index text-[13px] font-semibold uppercase tracking-[0.15em] text-green-700">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display mt-3 max-w-3xl text-[42px] uppercase text-ink sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-mute">{description}</p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
