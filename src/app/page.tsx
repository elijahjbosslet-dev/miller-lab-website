import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/Container";
import ComputeGrid from "@/components/ComputeGrid";
import ResearchAreaList from "@/components/ResearchAreaList";
import SectionHeader from "@/components/SectionHeader";
import FramedPanel from "@/components/FramedPanel";
import GradientBlob from "@/components/GradientBlob";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";
import {
  lab,
  researchAreas,
  impactStats,
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
      {/* Hero — real logo instead of a hand-drawn approximation of it */}
      <section className="bg-grain relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-black text-white">
        <GradientBlob tone="green" className="-left-24 -top-24 h-96 w-96 opacity-40" />
        <GradientBlob tone="mixed" className="-right-32 bottom-[-6rem] h-[28rem] w-[28rem] opacity-40" />
        <GradientBlob tone="green" className="right-1/4 top-1/3 h-64 w-64 opacity-[0.18]" />
        <Container className="relative py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                Computational Biomedical Research
              </p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Miller Lab
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-7 text-slate-300">
                {lab.tagline}. We combine AI, molecular simulation, and
                bioinformatics with high-performance computing to turn
                biological data into clinically relevant insight.
              </p>
              <div className="mt-7">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30"
                >
                  Explore Our Research
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                {impactStats.map((stat) => (
                  <div key={stat.label}>
                    <AnimatedStat value={stat.value} />
                    <p className="text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-xs items-center justify-center py-6 lg:max-w-sm">
              <div
                aria-hidden="true"
                className="glow-pulse absolute h-[85%] w-[85%] rounded-full bg-green-500 blur-[70px]"
              />
              <Image
                src="/logo.png"
                alt="Miller Lab"
                width={640}
                height={640}
                priority
                className="float-y relative h-auto w-full drop-shadow-[0_0_35px_rgba(0,177,64,0.55)]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Research areas */}
      <section className="relative overflow-hidden py-16">
        <GradientBlob tone="green" className="right-[-10rem] top-10 h-[28rem] w-[28rem] opacity-20" />
        <GradientBlob tone="mixed" className="left-[-10rem] bottom-0 h-[22rem] w-[22rem] opacity-[0.14]" />
        <Container className="relative">
          <Reveal>
            <SectionHeader
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
          </Reveal>
          <Reveal delay={0.1}>
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
        </Container>
      </section>

      {/* Infrastructure — bespoke compute-grid art instead of a stock photo */}
      <Reveal y={0}>
        <section className="relative h-[22rem] w-full overflow-hidden">
          <ComputeGrid className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/10" />
          <Container className="relative flex h-full items-center">
            <div className="max-w-md text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                Infrastructure
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
      </Reveal>

      {/* Approach / who we serve */}
      <section className="relative overflow-hidden py-16">
        <GradientBlob tone="mixed" className="left-[-12rem] bottom-[-8rem] h-[30rem] w-[30rem] opacity-20" />
        <GradientBlob tone="green" className="-right-16 top-0 h-[20rem] w-[20rem] opacity-[0.13]" />
        <Container className="relative">
          <Reveal>
            <SectionHeader eyebrow="Our Approach" title="Reproducible, AI-driven research" />
            <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug text-slate-700 sm:text-2xl">
              &ldquo;Our goal is to close the gap between biological data and
              clinically relevant insight.&rdquo;
            </p>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <p className="text-base leading-7 text-slate-600">{lab.missionIntro}</p>
              <ul className="mt-6 space-y-4">
                {missionPillars.map((pillar) => (
                  <li key={pillar.title} className="flex gap-3">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{pillar.title}</p>
                      <p className="text-sm leading-6 text-slate-600">{pillar.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="section-index text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                Who We Serve
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">{lab.audienceIntro}</p>
              <ul className="mt-6 space-y-4">
                {audienceSegments.map((segment) => (
                  <li key={segment.title} className="flex gap-3">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{segment.title}</p>
                      <p className="text-sm leading-6 text-slate-600">{segment.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team preview */}
      <section className="bg-grain relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-black py-16 text-white">
        <GradientBlob tone="green" className="right-[-8rem] top-[-6rem] h-[22rem] w-[22rem] opacity-30" />
        <Container className="relative">
          <Reveal>
            <SectionHeader eyebrow="Meet the Lab" title="Led by Dr. Whelton Miller" tone="dark" />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal delay={0.05}>
              <p className="text-base leading-7 text-slate-300">
                {principalInvestigator.title} working alongside a growing team
                of graduate and undergraduate researchers spanning RNA editing,
                cancer biology, and infectious disease.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400">
                <Users size={18} className="text-green-400" />
                {teamCount}+ current lab members
              </div>
              <Link
                href="/team"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30"
              >
                Meet the full team
                <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <FramedPanel className="mr-3" frameClassName="border-green-500">
                <div className="border border-white/10 bg-navy-900 p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500/20 font-display text-lg font-semibold text-green-400">
                      WM
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {principalInvestigator.name}, {principalInvestigator.credentials}
                      </p>
                      <p className="text-sm text-slate-400">{principalInvestigator.title}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-slate-300">
                    {principalInvestigator.role.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </FramedPanel>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
