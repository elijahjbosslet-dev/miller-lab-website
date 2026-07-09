import Link from "next/link";
import { ArrowRight, CheckCircle2, Users2 } from "lucide-react";
import Container from "@/components/Container";
import HelixRibbon from "@/components/HelixRibbon";
import ComputeGrid from "@/components/ComputeGrid";
import ResearchAreaList from "@/components/ResearchAreaList";
import SectionHeader from "@/components/SectionHeader";
import FramedPanel from "@/components/FramedPanel";
import {
  lab,
  researchAreas,
  impactStats,
  consultationSteps,
  missionPillars,
  audienceSegments,
  principalInvestigator,
  graduateResearchers,
  undergraduateResearchers,
} from "@/lib/content";

export default function Home() {
  const teamCount =
    1 + graduateResearchers.length + undergraduateResearchers.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-grain relative overflow-hidden bg-navy-950 text-white">
        <HelixRibbon className="pointer-events-none absolute -right-20 top-0 h-full w-[26rem] text-green-400/40 lg:-right-6 lg:w-[34rem]" />
        <Container className="relative py-28 sm:py-36">
          <div className="max-w-3xl">
            <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
              Computational Biomedical Research
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              {lab.tagline}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              We combine artificial intelligence, molecular simulation, and
              bioinformatics with high-performance computing to predict disease
              mechanisms, identify therapeutic targets, and turn biological
              data into clinically relevant insight.
            </p>
            <div className="mt-10">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-green-400"
              >
                Explore Our Research
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stats integrated into the flow, not a floating card bar */}
          <div className="mt-20 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-24">
        <Container>
          <SectionHeader
            index="01"
            eyebrow="Research Areas"
            title="Where computation meets biology"
            description="Five interconnected disciplines that let us move from raw biological data to reproducible, clinically relevant insight."
            action={
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
              >
                See how they connect
                <ArrowRight size={16} />
              </Link>
            }
          />
          <ResearchAreaList areas={researchAreas} />
        </Container>
      </section>

      {/* Infrastructure — bespoke compute-grid art instead of a stock photo */}
      <section className="relative h-[26rem] w-full overflow-hidden">
        <ComputeGrid className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/10" />
        <Container className="relative flex h-full items-center">
          <div className="max-w-md text-white">
            <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
              02 — Infrastructure
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Built on high-performance computing
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              HPC resources that scale AI, molecular simulation, and
              bioinformatics workflows for every collaborator.
            </p>
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl border-l-2 border-green-500 pl-8">
            <p className="font-display text-3xl font-medium italic leading-tight tracking-tight text-slate-900 sm:text-4xl">
              &ldquo;Our goal is to close the gap between biological data and
              clinically relevant insight.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Approach / who we serve */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader index="03" eyebrow="Our Approach" title="Reproducible, AI-driven research" />
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base leading-7 text-slate-600">{lab.missionIntro}</p>
              <ul className="mt-6 space-y-4">
                {missionPillars.map((pillar) => (
                  <li key={pillar.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{pillar.title}</p>
                      <p className="text-sm leading-6 text-slate-600">{pillar.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                Who We Serve
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">{lab.audienceIntro}</p>
              <ul className="mt-6 space-y-4">
                {audienceSegments.map((segment) => (
                  <li key={segment.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{segment.title}</p>
                      <p className="text-sm leading-6 text-slate-600">{segment.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation process teaser */}
      <section className="py-24">
        <Container>
          <SectionHeader
            index="04"
            eyebrow="How It Works"
            title="A milestone-driven collaboration process"
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
              >
                See full process
                <ArrowRight size={16} />
              </Link>
            }
          />

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {consultationSteps.map((step) => (
              <li key={step.step} className="relative">
                <span className="section-index text-3xl font-semibold text-green-500/40">
                  {step.step}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team preview */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader index="05" eyebrow="Meet the Lab" title="Led by Dr. Whelton Miller" />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-base leading-7 text-slate-600">
                {principalInvestigator.title} working alongside a growing team
                of graduate and undergraduate researchers spanning RNA editing,
                cancer biology, and infectious disease.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Users2 size={18} className="text-green-600" />
                {teamCount}+ current lab members
              </div>
              <Link
                href="/team"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                Meet the full team
                <ArrowRight size={16} />
              </Link>
            </div>

            <FramedPanel className="mr-3">
              <div className="border border-slate-200 bg-white p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-green-400">
                    WM
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {principalInvestigator.name}, {principalInvestigator.credentials}
                    </p>
                    <p className="text-sm text-slate-500">{principalInvestigator.title}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  {principalInvestigator.role.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </FramedPanel>
          </div>
        </Container>
      </section>
    </>
  );
}
