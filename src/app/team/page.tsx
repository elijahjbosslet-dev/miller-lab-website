import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearcherCard from "@/components/ResearcherCard";
import Reveal from "@/components/Reveal";
import {
  principalInvestigator,
  graduateResearchers,
  undergraduateResearchers,
  alumni,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Miller Lab",
  description: "Principal investigator, researchers, and alumni of the Miller Lab.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Who's in the lab"
        description="A growing team of graduate and undergraduate researchers working across RNA editing, cancer biology, and infectious disease."
      />

      <section className="py-16">
        <Container>
          {/* Principal Investigator */}
          <Reveal>
            <SectionHeader eyebrow="Principal Investigator" title="Dr. Whelton Miller" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-2xl border-[2.5px] border-ink bg-card p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[2.5px] border-ink">
                  <Image
                    src="/images/whelton-miller.jpg"
                    alt={principalInvestigator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase text-ink">
                    {principalInvestigator.name}, {principalInvestigator.credentials}
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm text-ink-mute">
                    {principalInvestigator.role.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  {principalInvestigator.scholarUrl && (
                    <a
                      href={principalInvestigator.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-index mt-3 inline-block border-b border-green-700/50 text-xs uppercase tracking-[0.06em] text-green-700 hover:text-green-600"
                    >
                      Google Scholar
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Graduate Researchers */}
          <div className="dashed-rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Graduate Researchers" />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {graduateResearchers.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06}>
                  <ResearcherCard researcher={r} index={i} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Undergraduate Researchers */}
          <div className="dashed-rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Undergraduate Researchers" />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {undergraduateResearchers.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06}>
                  <ResearcherCard researcher={r} index={i} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div className="dashed-rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Alumni" title="Where they are now" />
            </Reveal>
            <Reveal delay={0.1} className="dashed-rule mt-10">
              <ul>
                {alumni.map((a) => (
                  <li
                    key={a.name}
                    className="dashed-rule-b flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-sans font-bold text-ink">
                        {a.name}
                        {a.credentials ? `, ${a.credentials}` : ""}
                      </span>
                      {a.scholarUrl && (
                        <a
                          href={a.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="section-index border-b border-green-700/50 text-[11px] uppercase tracking-[0.06em] text-green-700 hover:text-green-600"
                        >
                          Scholar
                        </a>
                      )}
                    </span>
                    <span className="section-index text-sm text-ink-faint">{a.program}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
