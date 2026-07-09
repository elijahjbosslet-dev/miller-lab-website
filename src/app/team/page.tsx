import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ResearcherCard from "@/components/ResearcherCard";
import FramedPanel from "@/components/FramedPanel";
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

      <section className="py-16">
        <Container>
          {/* Principal Investigator */}
          <SectionHeader index="01" eyebrow="Principal Investigator" title="Dr. Whelton Miller" />
          <FramedPanel className="mt-10 max-w-3xl">
            <div className="border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-2xl font-semibold text-green-400">
                  WM
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-slate-900">
                    {principalInvestigator.name}, {principalInvestigator.credentials}
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    {principalInvestigator.role.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FramedPanel>

          {/* Graduate Researchers */}
          <div className="mt-20">
            <SectionHeader index="02" eyebrow="Researchers" title="Graduate Researchers" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {graduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} />
              ))}
            </div>
          </div>

          {/* Undergraduate Researchers */}
          <div className="mt-20">
            <SectionHeader index="03" eyebrow="Researchers" title="Undergraduate Researchers" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {undergraduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} />
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div className="mt-20">
            <SectionHeader index="04" eyebrow="Alumni" title="Where they are now" />
            <div className="mt-8 border-t border-slate-200">
              <ul className="divide-y divide-slate-200">
                {alumni.map((a) => (
                  <li
                    key={a.name}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-slate-900">
                      {a.name}
                      {a.credentials ? `, ${a.credentials}` : ""}
                    </span>
                    <span className="text-sm text-slate-500">{a.program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
