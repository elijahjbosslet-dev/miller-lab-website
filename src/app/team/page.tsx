import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ResearcherCard from "@/components/ResearcherCard";
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

      <section className="py-20">
        <Container>
          {/* Principal Investigator */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy-900 text-2xl font-bold text-teal-400">
                WM
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                  Principal Investigator
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {principalInvestigator.name}, {principalInvestigator.credentials}
                </h2>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {principalInvestigator.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Graduate Researchers */}
          <div className="mt-16">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Graduate Researchers
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {graduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} />
              ))}
            </div>
          </div>

          {/* Undergraduate Researchers */}
          <div className="mt-16">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Undergraduate Researchers
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {undergraduateResearchers.map((r) => (
                <ResearcherCard key={r.name} researcher={r} />
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div className="mt-16">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Alumni
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <ul className="divide-y divide-slate-200">
                {alumni.map((a) => (
                  <li
                    key={a.name}
                    className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
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
