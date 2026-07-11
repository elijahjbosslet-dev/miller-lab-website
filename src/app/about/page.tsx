import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearchAreaList from "@/components/ResearchAreaList";
import PinnedPhoto from "@/components/PinnedPhoto";
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
        title="Closing the gap between data and clinic"
        description="We combine artificial intelligence, molecular simulation, and bioinformatics with high-performance computing to make sophisticated computational science accessible to researchers in medicine, biology, and chemistry."
      />

      {/* Mission */}
      <section className="rule-b py-14">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Mission" title="What we do" />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <p className="text-[13px] leading-7 text-ink-2">{lab.missionIntro}</p>
              <ul className="mt-6 space-y-4">
                {missionPillars.map((pillar) => (
                  <li key={pillar.title} className="flex gap-3">
                    <span className="dot mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-[13px] font-bold text-ink-bright">
                        {pillar.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-6 text-ink-2">
                        {pillar.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center lg:justify-end">
              <PinnedPhoto src="/images/lab-data-analysis.jpg" caption="FIG // DATA ANALYSIS" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="rule-b py-14">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Who We Serve"
              title="A collaborative research hub"
              description={lab.audienceIntro}
            />
          </Reveal>
          <div className="mt-10 grid gap-px sm:grid-cols-3" style={{ background: "var(--hair-faint)" }}>
            {audienceSegments.map((segment, i) => (
              <Reveal key={segment.title} delay={i * 0.08}>
                <div className="h-full bg-graphite p-6">
                  <p className="font-mono text-[13px] font-bold text-ink-bright">
                    {segment.title}
                  </p>
                  <p className="mt-2 text-[12px] leading-6 text-ink-2">{segment.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-14">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Research Areas" title="Where computation meets biology" />
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
