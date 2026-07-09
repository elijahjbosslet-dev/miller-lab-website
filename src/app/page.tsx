import Link from "next/link";
import { ArrowRight, CheckCircle2, Users2 } from "lucide-react";
import Container from "@/components/Container";
import NetworkPattern from "@/components/NetworkPattern";
import ResearchAreaCard from "@/components/ResearchAreaCard";
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
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <NetworkPattern className="pointer-events-none absolute -right-24 -top-16 h-[34rem] w-[34rem] text-green-400/50 lg:-right-4" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Computational Biomedical Research
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {lab.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We combine artificial intelligence, molecular simulation, and
            bioinformatics with high-performance computing to predict disease
            mechanisms, identify therapeutic targets, and turn biological
            data into clinically relevant insight.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/services#contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-green-400"
            >
              Start a Collaboration
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Explore Our Research
            </Link>
          </div>
        </Container>
      </section>

      {/* Impact stats — straddles hero/body boundary */}
      <section className="relative">
        <Container>
          <div className="-mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center sm:text-left">
                <p className="text-3xl font-bold tracking-tight text-navy-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Research Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Where computation meets biology
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Five interconnected disciplines that let us move from raw
              biological data to reproducible, clinically relevant insight.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <ResearchAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className="border-y border-slate-100 py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            &ldquo;Our goal is to close the gap between biological data and
            clinically relevant insight.&rdquo;
          </p>
        </Container>
      </section>

      {/* Approach / who we serve */}
      <section className="bg-slate-50 py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Approach
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              Reproducible, AI-driven research
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.missionIntro}
            </p>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Who We Serve
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              A collaborative research hub
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {lab.audienceIntro}
            </p>
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
        </Container>
      </section>

      {/* Consultation process teaser */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A milestone-driven collaboration process
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
            >
              See full process
              <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {consultationSteps.map((step) => (
              <li key={step.step} className="relative">
                <span className="text-3xl font-bold text-green-500/40">
                  {step.step}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team preview */}
      <section className="bg-slate-50 py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Meet the Lab
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Led by Dr. Whelton Miller
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
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

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-green-400">
                WM
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {principalInvestigator.name}, {principalInvestigator.credentials}
                </p>
                <p className="text-sm text-slate-500">
                  {principalInvestigator.title}
                </p>
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
        </Container>
      </section>

      {/* CTA banner */}
      <section className="bg-navy-950">
        <Container className="flex flex-col items-start gap-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Have a research question we could help answer?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Tell us about your data and goals — we&apos;ll follow up to
              scope a collaboration.
            </p>
          </div>
          <Link
            href="/services#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-green-400"
          >
            Start a Collaboration
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
