import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { iconMap } from "@/components/icon-map";
import SplitImageSection from "@/components/SplitImageSection";
import DisciplineWeb from "@/components/DisciplineWeb";
import { researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research | Miller Lab",
  description: "The Miller Lab's core research areas.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Five disciplines, one computational pipeline"
        description="No discipline works in isolation — each feeds into the next, from raw biological data to AI-driven predictions to clinically relevant, publication-ready results."
      />

      <section className="py-24">
        <Container>
          <SectionHeader index="01" eyebrow="How They Connect" title="A web, not a checklist" />
          <div className="mt-14">
            <DisciplineWeb areas={researchAreas} />
          </div>
        </Container>
      </section>

      <SplitImageSection
        src="/images/lab-pipette.jpg"
        alt="Researcher working with lab samples and a pipette"
        eyebrow="Wet Lab to Computation"
        title="Grounded in real experimental collaboration"
        description="Every computational model starts with a question from the bench — our research areas exist to turn that data into actionable, clinically relevant insight."
        imageSide="left"
      />

      <section className="pb-24">
        <Container>
          <SectionHeader index="02" eyebrow="The Disciplines" title="Five areas, in detail" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <div
                  key={area.slug}
                  className="flex gap-5 border-t border-slate-200 pt-7"
                >
                  <span className="section-index text-sm text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-green-400">
                    {Icon && <Icon size={22} strokeWidth={1.75} />}
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
        </Container>
      </section>
    </>
  );
}
