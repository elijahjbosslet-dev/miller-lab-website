import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { iconMap } from "@/components/icon-map";
import DisciplineWeb from "@/components/DisciplineWeb";
import PinnedPhoto from "@/components/PinnedPhoto";
import Reveal from "@/components/Reveal";
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
        title="Five disciplines, one pipeline"
        description="No discipline works in isolation. Each feeds into the next, from raw biological data to AI-driven predictions to clinically relevant, publication-ready results."
      />

      {/* How they connect */}
      <section className="dashed-rule-b py-16">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="How They Connect" title="A web, not a checklist" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-xl">
              <DisciplineWeb areas={researchAreas} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Wet lab to computation */}
      <section className="dashed-rule-b py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="section-index text-[13px] font-semibold uppercase tracking-[0.15em] text-green-700">
              Wet Lab to Computation
            </p>
            <h2 className="font-display mt-2 text-[28px] uppercase text-ink sm:text-[32px]">
              Grounded in real collaboration
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-mute">
              Every computational model starts with a question from the bench. Our
              research areas exist to turn that data into actionable, clinically
              relevant insight.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <PinnedPhoto
              src="/images/lab-pipette.jpg"
              caption="a question from the bench"
              rotate={-2}
            />
          </Reveal>
        </Container>
      </section>

      {/* Five areas, in detail */}
      <section className="dashed-rule-b py-16">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="The Disciplines" title="Five areas, in detail" />
          </Reveal>
        </Container>
        <Reveal delay={0.1}>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:px-10 [scrollbar-width:thin]">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <div
                  key={area.slug}
                  className="flex w-[19rem] shrink-0 snap-start flex-col gap-4 border-[2.5px] border-ink bg-card p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="section-index text-sm text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink text-green-700">
                      {Icon && <Icon size={20} strokeWidth={1.75} />}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-ink">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-mute">{area.blurb}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* More from the lab — reserved for future content */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="More From The Lab" title="Coming soon" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
              <div className="border-[2.5px] border-dashed border-ink-faint p-6">
                <p className="font-sans font-bold text-ink">Publications</p>
                <p className="mt-2 text-sm leading-6 text-ink-mute">
                  Papers, talks, and preprints from the lab. Under construction.
                </p>
              </div>
              <div className="border-[2.5px] border-dashed border-ink-faint p-6">
                <p className="font-sans font-bold text-ink">Ongoing Research</p>
                <p className="mt-2 text-sm leading-6 text-ink-mute">
                  A running look at what&apos;s currently in the pipeline. Under construction.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
