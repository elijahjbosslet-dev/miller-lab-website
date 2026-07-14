import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { researchAreas, publicationsSummary, ongoingResearch } from "@/lib/content";

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

      {/* More from the lab */}
      <section className="rule-b py-14">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="More From The Lab" title="Publications & pipeline" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid max-w-3xl gap-px sm:grid-cols-2" style={{ background: "var(--hair-faint)" }}>
              <div className="panel p-6">
                <p className="tag mb-2">{"// Publications"}</p>
                <p className="text-[13px] leading-6 text-ink-2">{publicationsSummary.description}</p>
                <a
                  href={publicationsSummary.ncbiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block border-b border-green pb-px font-mono text-[11px] uppercase tracking-[0.08em] text-green transition-colors hover:text-green-bright"
                >
                  Full bibliography
                </a>
              </div>
              <div className="panel p-6">
                <p className="tag mb-2">{"// Ongoing Research"}</p>
                <ul className="space-y-1.5 text-[13px] leading-6 text-ink-2">
                  {ongoingResearch.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="dot mt-2 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Five areas, in detail */}
      <section className="py-14">
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
    </>
  );
}
