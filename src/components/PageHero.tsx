import { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

// Kicker + serif H1 + 300-weight lede, hairline below. See
// .claude/skills/miller-instrument-theme/SKILL.md "Page patterns".
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
    <section className="rule-b">
      <Container className="py-14 sm:py-16">
        <Reveal>
          {eyebrow && (
            <p className="kicker">
              {"// "}
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif mt-3 max-w-3xl text-[42px] leading-[0.95] text-ink-bright sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg font-light leading-8 text-[#aab6ac]">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
