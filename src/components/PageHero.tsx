import { ReactNode } from "react";
import Container from "./Container";
import HelixThread from "./HelixThread";

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
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
            {eyebrow}
          </p>
        )}
        <div className="relative mt-4">
          <HelixThread className="pointer-events-none absolute left-0 top-1/2 z-0 h-16 w-full -translate-y-1/2 text-white/15 sm:h-24" />
          <h1 className="relative z-10 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </div>
        {description && (
          <p className="relative mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
