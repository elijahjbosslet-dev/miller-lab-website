import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearchAreaList from "@/components/ResearchAreaList";
import FramedPanel from "@/components/FramedPanel";
import HelixRibbon from "@/components/HelixRibbon";
import GradientBlob from "@/components/GradientBlob";
import Reveal from "@/components/Reveal";
import { lab, missionPillars, audienceSegments, researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Miller Lab",
  description: "Mission, approach, and audience of the Miller Lab.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Closing the gap between biological data and clinical insight"
        description="We combine artificial intelligence, molecular simulation, and bioinformatics with high-performance computing to make sophisticated computational science accessible to researchers in medicine, biology, and chemistry."
      />

      {/* Mission — offset panel, giant watermark numeral */}
      <section className="slant-b relative overflow-hidden pt-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[10rem] font-bold leading-none text-slate-100 sm:text-[14rem]"
        >
          01
        </span>
        <Container className="relative">
          <Reveal>
            <SectionHeader index="01" eyebrow="Mission" title="What we do" />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-base leading-7 text-slate-600">{lab.missionIntro}</p>
              <ul className="mt-6 space-y-4">
                {missionPillars.map((pillar) => (
                  <li key={pillar.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{pillar.title}</p>
                      <p className="text-sm leading-6 text-slate-600">{pillar.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="lg:mt-10">
              <FramedPanel className="mr-3 rotate-1">
                <div className="relative flex h-72 items-center justify-center bg-navy-950 sm:h-96">
                  <HelixRibbon className="h-full w-auto text-green-400/70" />
                </div>
              </FramedPanel>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who we serve — full-bleed diagonal navy band */}
      <section className="slant-tb bg-grain relative -mt-14 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white">
        <GradientBlob tone="green" className="left-[-8rem] top-[-4rem] h-[24rem] w-[24rem] opacity-30" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 bottom-0 select-none font-display text-[10rem] font-bold leading-none text-white/5 sm:text-[14rem]"
        >
          02
        </span>
        <Container className="relative">
          <Reveal>
            <SectionHeader
              index="02"
              eyebrow="Who We Serve"
              title="A collaborative research hub"
              description={lab.audienceIntro}
              tone="dark"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {audienceSegments.map((segment, i) => (
              <Reveal key={segment.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-white/10 bg-navy-900 p-6 transition-colors hover:border-green-500/40">
                  <p className="font-semibold text-white">{segment.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{segment.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="slant-t relative -mt-14 overflow-hidden pb-16">
        <Container className="relative">
          <Reveal>
            <SectionHeader index="03" eyebrow="Research Areas" title="Where computation meets biology" />
          </Reveal>
          <Reveal delay={0.1}>
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
