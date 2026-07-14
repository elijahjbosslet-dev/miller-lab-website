import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research | Miller Lab",
  description: "The Miller Lab's core research areas.",
};

const FIELD_CODES: Record<string, string> = {
  "artificial-intelligence": "AI",
  "molecular-simulation": "SIM",
  "computational-biophysics": "BPX",
  "drug-discovery": "DRG",
  bioinformatics: "BIO",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Five disciplines, one pipeline"
        description="No discipline works in isolation. Each feeds into the next, from raw biological data to AI-driven predictions to clinically relevant, publication-ready results."
      />

      {/* Wet lab to computation */}
      <section className="rule-b py-14">
        <Container>
          <Reveal>
            <p className="kicker">{"// Data to Discovery"}</p>
            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-ink-2">
              Every computational model starts with a question from the bench. Our
              research areas exist to turn that data into actionable, clinically
              relevant insight.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Five areas, in detail */}
      <section className="rule-b py-14">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="The Disciplines" title="Five areas, in detail" />
          </Reveal>
          <div className="mt-10 border-t-[color:var(--hair-strong)] border-t">
            {researchAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.05}>
                <div className="rule-b grid gap-2 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                  <p className="tag">
                    <span className="dot mr-1.5 inline-block" aria-hidden="true" />
                    {FIELD_CODES[area.slug] ?? "—"}
                  </p>
                  <div>
                    <h3 className="font-serif text-[22px] text-ink-bright">{area.title}</h3>
                    <p className="mt-2 max-w-2xl text-[14px] leading-7 text-ink-2">
                      {area.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* More from the lab — reserved for future content */}
      <section className="py-14">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="More From The Lab" title="Coming soon" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid max-w-2xl gap-px sm:grid-cols-2" style={{ background: "var(--hair-faint)" }}>
              <div className="panel p-6">
                <p className="tag mb-2">{"// Publications"}</p>
                <p className="text-[13px] leading-6 text-ink-2">
                  Papers, talks, and preprints from the lab. Under construction.
                </p>
              </div>
              <div className="panel p-6">
                <p className="tag mb-2">{"// Ongoing Research"}</p>
                <p className="text-[13px] leading-6 text-ink-2">
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
