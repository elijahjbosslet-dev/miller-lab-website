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

      <section className="py-14">
        <Container>
          {/* Principal Investigator */}
          <Reveal>
            <p className="tag">{"// Principal Investigator"}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
              <div className="panel h-24 w-24 shrink-0 p-1.5">
                <span className="panel-bracket tl" aria-hidden="true" />
                <span className="panel-bracket br" aria-hidden="true" />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/whelton-miller.jpg"
                    alt={principalInvestigator.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[28px] leading-[1] text-ink-bright">
                  {principalInvestigator.name}, <span className="italic">{principalInvestigator.credentials}</span>
                </h3>
                <ul className="mt-3 space-y-1 text-[12px] leading-6 text-ink-2">
                  {principalInvestigator.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                {principalInvestigator.scholarUrl && (
                  <a
                    href={principalInvestigator.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block border-b border-green pb-px font-mono text-[11px] uppercase tracking-[0.08em] text-green transition-colors hover:text-green-bright"
                  >
                    Google Scholar
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          {/* Graduate Researchers */}
          <div className="rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Graduate Researchers" />
            </Reveal>
            <Reveal delay={0.08} className="mt-8 border-t-[color:var(--hair-strong)] border-t">
              {graduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} role="GRAD" />
              ))}
            </Reveal>
          </div>

          {/* Undergraduate Researchers */}
          <div className="rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Undergraduate Researchers" />
            </Reveal>
            <Reveal delay={0.08} className="mt-8 border-t-[color:var(--hair-strong)] border-t">
              {undergraduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} role="UGRAD" />
              ))}
            </Reveal>
          </div>

          {/* Alumni */}
          <div className="rule mt-16 pt-12">
            <Reveal>
              <SectionHeader eyebrow="Alumni" title="Where they are now" />
            </Reveal>
            <Reveal delay={0.1} className="mt-8 border-t-[color:var(--hair-strong)] border-t">
              <ul>
                {alumni.map((a) => (
                  <li
                    key={a.name}
                    className="rule-b flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[13px] text-ink-bright">
                        {a.name}
                        {a.credentials ? `, ${a.credentials}` : ""}
                      </span>
                      {a.scholarUrl && (
                        <a
                          href={a.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-b border-green pb-px font-mono text-[10.5px] uppercase tracking-[0.08em] text-green transition-colors hover:text-green-bright"
                        >
                          Scholar
                        </a>
                      )}
                    </span>
                    <span className="label">{a.program}</span>
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
