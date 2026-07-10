import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
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
      <section className="dashed-rule-b py-16">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Mission" title="What we do" />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <p className="text-base leading-7 text-ink-soft">{lab.missionIntro}</p>
              <ul className="mt-6 space-y-4">
                {missionPillars.map((pillar) => (
                  <li key={pillar.title} className="flex gap-3">
                    <CheckCircle size={20} weight="bold" className="mt-0.5 shrink-0 text-green-700" />
                    <div>
                      <p className="font-sans font-bold text-ink">{pillar.title}</p>
                      <p className="text-sm leading-6 text-ink-mute">{pillar.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center lg:justify-end">
              <PinnedPhoto
                src="/images/lab-data-analysis.jpg"
                caption="the lab, most days"
                rotate={2}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="dashed-rule-b py-16">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Who We Serve"
              title="A collaborative research hub"
              description={lab.audienceIntro}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {audienceSegments.map((segment, i) => (
              <Reveal key={segment.title} delay={i * 0.08}>
                <div className="h-full border-[2.5px] border-ink bg-card p-6">
                  <p className="font-sans font-bold text-ink">{segment.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-mute">{segment.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Research Areas" title="Where computation meets biology" />
          </Reveal>
          <Reveal delay={0.1}>
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
