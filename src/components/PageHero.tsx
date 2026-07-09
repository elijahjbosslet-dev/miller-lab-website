import { ReactNode } from "react";
import Container from "./Container";
import NetworkPattern from "./NetworkPattern";

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
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <NetworkPattern className="pointer-events-none absolute -right-16 -top-10 h-[26rem] w-[26rem] text-green-400/60 lg:right-0" />
      <Container className="relative py-20 sm:py-24">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
