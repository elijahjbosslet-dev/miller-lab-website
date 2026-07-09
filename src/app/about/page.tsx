import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearchAreaList from "@/components/ResearchAreaList";
import FramedPanel from "@/components/FramedPanel";
import HelixRibbon from "@/components/HelixRibbon";
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

      {/* Mission */}
      <section className="py-16">
        <Container>
          <SectionHeader index="01" eyebrow="Mission" title="What we do" />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
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
            </div>

            <FramedPanel className="mr-3">
              <div className="relative flex h-72 items-center justify-center bg-navy-950 sm:h-96">
                <HelixRibbon className="h-full w-auto text-green-400/70" />
              </div>
            </FramedPanel>
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeader
            index="02"
            eyebrow="Who We Serve"
            title="A collaborative research hub"
            description={lab.audienceIntro}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {audienceSegments.map((segment) => (
              <div key={segment.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">{segment.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{segment.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-16">
        <Container>
          <SectionHeader index="03" eyebrow="Research Areas" title="Where computation meets biology" />
          <ResearchAreaList areas={researchAreas} />
        </Container>
      </section>
    </>
  );
}
