import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ResearchAreaCard from "@/components/ResearchAreaCard";
import SplitImageSection from "@/components/SplitImageSection";
import { lab, missionPillars, audienceSegments, researchAreas } from "@/lib/content";

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

      {/* Mission */}
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Mission
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              What we do
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.missionIntro}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-3 rounded-xl border border-slate-200 p-5"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-slate-900">{pillar.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SplitImageSection
        src="/images/dna.jpg"
        alt="Close-up render of a DNA double helix"
        eyebrow="Reproducible Science"
        title="From raw biological data to clinical insight"
        description="Every workflow the lab builds — from molecular simulation to bioinformatics pipelines — is designed to be reproducible, auditable, and ready for publication."
      />

      {/* Who we serve */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Who We Serve
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              A collaborative research hub
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.audienceIntro}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {audienceSegments.map((segment) => (
              <div key={segment.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">{segment.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Research Areas
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Where computation meets biology
              </h2>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
            >
              Explore our research
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <ResearchAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
