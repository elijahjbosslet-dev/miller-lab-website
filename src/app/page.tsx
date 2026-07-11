import Container from "@/components/Container";
import ResearchAreaList from "@/components/ResearchAreaList";
import SectionHeader from "@/components/SectionHeader";
import StampButton from "@/components/StampButton";
import TextCta from "@/components/TextCta";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import {
  lab,
  researchAreas,
  principalInvestigator,
  graduateResearchers,
  undergraduateResearchers,
  faqs,
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
              <p className="mt-4 max-w-lg text-[12.5px] leading-[1.7] text-ink-2">
                {lab.audienceIntro}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <StampButton href="/research">See the research</StampButton>
                <TextCta href={`mailto:${lab.contactEmail}`}>Work with us</TextCta>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div className="panel p-4">
              <span className="panel-bracket tl" aria-hidden="true" />
              <span className="panel-bracket br" aria-hidden="true" />
              <div className="mb-3 flex items-center justify-between text-[9.5px] tracking-[0.16em] text-ink-2">
                <span className="text-green">SIG // BINDING-ENERGY CONVERGENCE</span>
                <span>MD &middot; ILLUSTRATIVE</span>
              </div>
              <svg viewBox="0 0 380 184" className="block h-auto w-full">
                <g stroke="var(--hair)" strokeWidth="1">
                  <line x1="0" y1="34" x2="380" y2="34" />
                  <line x1="0" y1="72" x2="380" y2="72" />
                  <line x1="0" y1="110" x2="380" y2="110" />
                  <line x1="0" y1="148" x2="380" y2="148" />
                  <line x1="76" y1="0" x2="76" y2="168" />
                  <line x1="152" y1="0" x2="152" y2="168" />
                  <line x1="228" y1="0" x2="228" y2="168" />
                  <line x1="304" y1="0" x2="304" y2="168" />
                </g>
                <path
                  d="M8,30 L28,56 L44,42 L62,88 L80,70 L98,112 L118,98 L138,130 L158,120 L178,142 L198,135 L218,151 L238,147 L258,155 L278,151 L298,157 L318,154 L338,158 L358,156 L372,157 L372,168 L8,168 Z"
                  fill="rgba(76,187,23,.12)"
                  stroke="none"
                />
                <path
                  className="trace-draw"
                  d="M8,30 L28,56 L44,42 L62,88 L80,70 L98,112 L118,98 L138,130 L158,120 L178,142 L198,135 L218,151 L238,147 L258,155 L278,151 L298,157 L318,154 L338,158 L358,156 L372,157"
                  fill="none"
                  stroke="var(--color-green)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="372" cy="157" r="4" fill="var(--color-green)" />
                <circle
                  cx="372"
                  cy="157"
                  r="8"
                  fill="none"
                  stroke="var(--color-green)"
                  strokeWidth="1"
                  opacity=".5"
                />
              </svg>
              <div className="mt-2 flex items-center justify-between text-[9px] tracking-[0.14em] text-ink-3">
                <span>&Delta;G</span>
                <span>
                  SIMULATION TIME (ns) &rarr;
                  <span className="cursor-blink" aria-hidden="true" />
                </span>
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
            <p className="mt-5 max-w-2xl text-[12.5px] leading-[1.7] text-ink-2">
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
            <p className="mt-3 max-w-lg text-[12.5px] leading-[1.7] text-ink-2">
              {principalInvestigator.title}, working alongside {teamCount} grad and
              undergrad researchers on RNA editing, cancer biology, and infectious disease.
            </p>
            <TextCta href="/team" className="mt-5 inline-block">
              Meet the full team
            </TextCta>
          </Reveal>
        </Container>
      </section>

      {/* One FAQ, teasing the full page */}
      <section className="py-14">
        <Container className="max-w-[720px]">
          <Reveal>
            <FaqAccordion faqs={faqs.slice(0, 1)} />
            <TextCta href="/faq" className="mt-6 inline-block">
              Read the full FAQ
            </TextCta>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
