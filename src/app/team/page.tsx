import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearcherCard from "@/components/ResearcherCard";
import FramedPanel from "@/components/FramedPanel";
import GradientBlob from "@/components/GradientBlob";
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
        title="The people behind the lab"
        description="A growing team of graduate and undergraduate researchers working across RNA editing, cancer biology, and infectious disease."
      />

      <section className="relative overflow-hidden py-16">
        <GradientBlob tone="green" className="right-[-10rem] top-10 h-[28rem] w-[28rem] opacity-20" />
        <GradientBlob tone="mixed" className="left-[-10rem] bottom-0 h-[24rem] w-[24rem] opacity-[0.14]" />
        <Container className="relative">
          {/* Principal Investigator */}
          <Reveal>
            <SectionHeader eyebrow="Principal Investigator" title="Dr. Whelton Miller" />
          </Reveal>
          <Reveal delay={0.1}>
            <FramedPanel className="mt-10 max-w-3xl">
              <div className="border border-slate-200 bg-navy-950 p-8 text-white sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-500/20 font-display text-2xl font-semibold text-green-400">
                    WM
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {principalInvestigator.name}, {principalInvestigator.credentials}
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm text-slate-300">
                      {principalInvestigator.role.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FramedPanel>
          </Reveal>

          {/* Graduate Researchers — staggered offset grid instead of a flat one */}
          <div className="mt-24">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Graduate Researchers" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {graduateResearchers.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
                  <ResearcherCard researcher={r} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Undergraduate Researchers */}
          <div className="mt-16">
            <Reveal>
              <SectionHeader eyebrow="Researchers" title="Undergraduate Researchers" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {undergraduateResearchers.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
                  <ResearcherCard researcher={r} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div className="mt-16">
            <Reveal>
              <SectionHeader eyebrow="Alumni" title="Where they are now" />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 border-t border-slate-200">
              <ul className="divide-y divide-slate-200">
                {alumni.map((a) => (
                  <li
                    key={a.name}
                    className="flex flex-col gap-1 py-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between sm:px-2"
                  >
                    <span className="font-medium text-slate-900">
                      {a.name}
                      {a.credentials ? `, ${a.credentials}` : ""}
                    </span>
                    <span className="text-sm text-slate-500">{a.program}</span>
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
