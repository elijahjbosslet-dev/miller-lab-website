import { ReactNode } from "react";
import Container from "./Container";
import HelixThread from "./HelixThread";
import GradientBlob from "./GradientBlob";
import Reveal from "./Reveal";

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
    <section className="bg-grain relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white">
      <GradientBlob tone="mixed" className="-right-20 -top-20 h-[24rem] w-[24rem] opacity-40" />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
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
        </Reveal>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
