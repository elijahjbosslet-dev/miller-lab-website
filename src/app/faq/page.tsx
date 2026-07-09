import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FaqAccordion from "@/components/FaqAccordion";
import GradientBlob from "@/components/GradientBlob";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Miller Lab",
  description: "Frequently asked questions about working with the Miller Lab.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />

      <section className="relative overflow-hidden py-16">
        <GradientBlob tone="mixed" className="left-[-10rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-20" />
        <GradientBlob tone="green" className="-right-24 -top-16 h-[20rem] w-[20rem] opacity-[0.14]" />
        <Container className="relative max-w-3xl">
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
