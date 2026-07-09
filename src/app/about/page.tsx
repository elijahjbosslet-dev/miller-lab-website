import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { lab, researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Miller Lab",
  description: "Mission, approach, and audience of the Miller Lab.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Closing the gap between biological data and clinical insight"
        description="We combine artificial intelligence, molecular simulation, and bioinformatics with high-performance computing to make sophisticated computational science accessible to researchers in medicine, biology, and chemistry."
      />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.missionStatement}
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">
              Who we serve
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.audienceStatement}
            </p>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Research Areas
            </h3>
            <ul className="mt-5 space-y-4">
              {researchAreas.map((area) => (
                <li key={area.slug}>
                  <p className="font-semibold text-slate-900">{area.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {area.blurb}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/research"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
            >
              Explore our research
              <ArrowRight size={16} />
            </Link>
          </aside>
        </Container>
      </section>
    </>
  );
}
