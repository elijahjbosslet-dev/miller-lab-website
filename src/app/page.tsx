import Image from "next/image";
import Container from "@/components/Container";
import ResearchAreaList from "@/components/ResearchAreaList";
import SectionHeader from "@/components/SectionHeader";
import StampButton from "@/components/StampButton";
import TextCta from "@/components/TextCta";
import Reveal from "@/components/Reveal";
import {
  lab,
  researchAreas,
  impactStats,
  principalInvestigator,
  graduateResearchers,
  undergraduateResearchers,
} from "@/lib/content";

export default function Home() {
  const teamCount = graduateResearchers.length + undergraduateResearchers.length;

  return (
    <>
      {/* Hero */}
      <section className="rule-b relative">
        <div
          className="pointer-events-none absolute left-0 top-[150px] hidden origin-left -rotate-90 whitespace-nowrap text-[9.5px] tracking-[0.34em] text-ink-4 lg:block"
          aria-hidden="true"
        >
          MILLER&nbsp;LAB &mdash; LOYOLA UNIVERSITY CHICAGO
        </div>

        <Container className="grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pl-[52px]">
          <div>
            <Reveal delay={0.06}>
              <p className="kicker">{`// ${lab.heroKicker.toUpperCase()}`}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-serif mt-5 text-[54px] leading-[0.9] tracking-[-0.01em] text-ink-bright sm:text-[68px] lg:text-[84px]">
                {lab.heroHeadline[0]}
                <span className="italic text-green">{lab.heroHeadline[1]}</span>
                <br />
                {lab.heroHeadline[2]}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-lg text-lg font-light leading-[1.55] text-[#aab6ac]">
                {lab.heroDek}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-lg text-[13.5px] leading-[1.7] text-ink-2">
                {lab.audienceIntro}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <StampButton href="/research">See the research</StampButton>
                <TextCta href={`mailto:${lab.contactEmail}`}>Work with us</TextCta>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t-[color:var(--hair)] border-t pt-6">
                {impactStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-[26px] text-ink-bright">{stat.value}</p>
                    <p className="label mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div className="panel p-4">
              <span className="panel-bracket tl" aria-hidden="true" />
              <span className="panel-bracket br" aria-hidden="true" />
              <p className="tag mb-3">
                <span className="dot mr-1.5 inline-block" aria-hidden="true" />
                FIG // THE MILLER LAB, LOYOLA UNIVERSITY CHICAGO
              </p>
              <div className="relative h-[280px] w-full overflow-hidden border-[color:var(--hair)] border sm:h-[320px]">
                <Image
                  src="/images/lab-data-analysis.jpg"
                  alt="A Miller Lab researcher reviewing computational data"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Fields of inquiry */}
      <section className="rule py-10">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Research"
              title="Fields of inquiry"
              action={
                <span className="label whitespace-nowrap">
                  [ 05 PARALLEL PROGRAMS &middot; ONE PIPELINE: DATA &rarr; INSIGHT ]
                </span>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
          <div className="mt-6 flex justify-end">
            <TextCta href="/research">How they connect</TextCta>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="rule py-14">
        <Container className="grid gap-9 lg:grid-cols-[0.4fr_1fr] lg:items-start">
          <Reveal>
            <p className="label">{"// Mission"}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-serif text-[26px] italic leading-[1.32] text-[#eef4ed] sm:text-[30px]">
              &ldquo;Close the gap between biological <span className="text-green">data</span> and
              clinically relevant <span className="text-green">insights</span>.&rdquo;
            </p>
            <p className="mt-5 max-w-2xl text-[13.5px] leading-[1.7] text-ink-2">
              {lab.missionIntro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Team teaser */}
      <section className="rule py-14">
        <Container>
          <Reveal>
            <p className="tag">{"// Principal Investigator"}</p>
            <h3 className="font-serif mt-3 text-[26px] text-ink-bright">
              {principalInvestigator.name}, <span className="italic">{principalInvestigator.credentials}</span>
            </h3>
            <p className="mt-3 max-w-lg text-[13.5px] leading-[1.7] text-ink-2">
              {principalInvestigator.title}, working alongside {teamCount} grad and
              undergrad researchers on RNA editing, cancer biology, and infectious disease.
            </p>
            <TextCta href="/team" className="mt-5 inline-block">
              Meet the full team
            </TextCta>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
