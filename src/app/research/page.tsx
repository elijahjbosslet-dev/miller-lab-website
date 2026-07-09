import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
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

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              How They Connect
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A web, not a checklist
            </h2>
          </div>
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

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <div
                  key={area.slug}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-green-400">
                    {Icon && <Icon size={24} strokeWidth={1.75} />}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {area.blurb}
                    </p>
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
