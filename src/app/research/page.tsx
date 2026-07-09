import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { iconMap } from "@/components/icon-map";
import SplitImageSection from "@/components/SplitImageSection";
import DisciplineWeb from "@/components/DisciplineWeb";
import GradientBlob from "@/components/GradientBlob";
import Reveal from "@/components/Reveal";
import { researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research | Miller Lab",
  description: "The Miller Lab's core research areas.",
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero — the discipline web lives in the hero itself, not a repeat
          text-only banner like every other page. */}
      <section className="bg-grain relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white">
        <GradientBlob tone="mixed" className="-left-24 top-0 h-[26rem] w-[26rem] opacity-40" />
        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
              Research
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Five disciplines, one computational pipeline
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
              No discipline works in isolation — each feeds into the next,
              from raw biological data to AI-driven predictions to
              clinically relevant, publication-ready results.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-green-900/20 sm:p-8">
              <DisciplineWeb areas={researchAreas} />
            </div>
          </Reveal>
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
      </section>

      <SplitImageSection
        src="/images/lab-pipette.jpg"
        alt="Researcher working with lab samples and a pipette"
        eyebrow="Wet Lab to Computation"
        title="Grounded in real experimental collaboration"
        description="Every computational model starts with a question from the bench — our research areas exist to turn that data into actionable, clinically relevant insight."
        imageSide="left"
      />

      {/* Five areas — horizontal scroll rail, distinct from the vertical
          numbered lists used on Home/About. */}
      <section className="relative overflow-hidden pb-16">
        <GradientBlob tone="green" className="right-[-10rem] bottom-0 h-[28rem] w-[28rem] opacity-20" />
        <GradientBlob tone="mixed" className="left-[-8rem] top-0 h-[22rem] w-[22rem] opacity-[0.14]" />
        <Container className="relative">
          <Reveal>
            <SectionHeader index="01" eyebrow="The Disciplines" title="Five areas, in detail" />
          </Reveal>
        </Container>
        <Reveal delay={0.1}>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:px-10 [scrollbar-width:thin]">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <div
                  key={area.slug}
                  className="group flex w-[19rem] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="section-index text-sm text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-navy-950">
                      {Icon && <Icon size={22} strokeWidth={1.75} />}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{area.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </>
  );
}
