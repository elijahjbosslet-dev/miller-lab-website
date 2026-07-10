import Container from "@/components/Container";
import ResearchAreaList from "@/components/ResearchAreaList";
import SectionHeader from "@/components/SectionHeader";
import StampButton from "@/components/StampButton";
import TextCta from "@/components/TextCta";
import StatBadge from "@/components/StatBadge";
import PinnedPhoto from "@/components/PinnedPhoto";
import LabelStrip from "@/components/LabelStrip";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import {
  lab,
  researchAreas,
  impactStats,
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
      <section className="dashed-rule-b">
        <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="section-index text-[13px] font-semibold uppercase tracking-[0.16em] text-green-700">
              {lab.heroKicker}
            </p>
            <h1 className="font-display mt-4 text-[54px] uppercase text-ink sm:text-[68px] lg:text-[76px]">
              {lab.heroHeadline[0]}
              <span className="text-green-700">{lab.heroHeadline[1]}</span>
              <br />
              {lab.heroHeadline[2]}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.6] text-ink-soft">{lab.heroDek}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <StampButton href="/research">See the research</StampButton>
              <TextCta href={`mailto:${lab.contactEmail}`}>Work with us</TextCta>
            </div>
          </div>

          <div className="relative flex justify-center pb-4 pr-2 pt-2">
            <PinnedPhoto src="/images/lab-pipette.jpg" caption="where the questions come from" />
          </div>
        </Container>

        <Container className="flex flex-wrap items-center gap-7 pb-12">
          {impactStats.map((stat, i) => (
            <StatBadge key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </Container>
      </section>

      {/* Five areas of work */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Research"
              title="Five areas of work"
              action={<TextCta href="/research">How they connect</TextCta>}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ResearchAreaList areas={researchAreas} />
          </Reveal>
        </Container>
      </section>

      {/* Team teaser */}
      <section className="dashed-rule pt-8">
        <Container className="pb-16">
          <Reveal>
            <LabelStrip>Led by</LabelStrip>
            <h3 className="font-display mt-2.5 text-[26px] uppercase text-ink">
              {principalInvestigator.name}
            </h3>
            <p className="mt-2 max-w-lg text-[15px] leading-[1.6] text-ink-soft">
              {principalInvestigator.title}, working alongside {teamCount} grad and
              undergrad researchers on RNA editing, cancer biology, and infectious disease.
            </p>
            <TextCta href="/team" className="mt-4 inline-block">
              Meet the full team
            </TextCta>
          </Reveal>
        </Container>
      </section>

      {/* One FAQ, teasing the full page */}
      <section className="pb-16">
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
