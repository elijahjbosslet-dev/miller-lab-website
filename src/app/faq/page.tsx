import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Miller Lab",
  description: "Frequently asked questions about working with the Miller Lab.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered" />

      <section className="py-16">
        <Container className="max-w-[720px]">
          <Reveal>
            <SectionHeader eyebrow="Common Questions" title="What people ask us" />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
