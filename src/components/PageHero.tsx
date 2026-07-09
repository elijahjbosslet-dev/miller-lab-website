import { ReactNode } from "react";
import Container from "./Container";
import HelixRibbon from "./HelixRibbon";

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
    <section className="bg-grain relative overflow-hidden bg-navy-950 text-white">
      <HelixRibbon className="pointer-events-none absolute -right-16 top-0 h-full w-72 text-green-400/40 lg:w-96" />
      <Container className="relative py-24 sm:py-28">
        {eyebrow && (
          <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
