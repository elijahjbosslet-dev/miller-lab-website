import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { services, consultationSteps, lab } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Rates | Miller Lab",
  description: "Core services, collaboration process, and rates for the Miller Lab.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Rates"
        title="How to work with the Miller Lab"
        description="From a first conversation to publication-ready results — here's what a collaboration looks like."
      />

      {/* Services */}
      <section className="py-24">
        <Container>
          <SectionHeader index="01" eyebrow="Core Services" title="What we offer" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border-t border-slate-200 pt-6">
                <h3 className="font-display font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader index="02" eyebrow="Process" title="Consultation process" />
          <ol className="mt-12 space-y-10 border-l border-slate-200 pl-8">
            {consultationSteps.map((step) => (
              <li key={step.step} className="relative">
                <span className="section-index absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-green-400">
                  {step.step}
                </span>
                <h3 className="font-display font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Rates */}
      <section className="py-24">
        <Container>
          <SectionHeader index="03" eyebrow="Rates" title="Pricing" />
          <div className="mt-8 border-l-2 border-slate-200 pl-6">
            <p className="text-base leading-7 text-slate-600">
              Rate structures for internal and external collaborators are
              still being finalized. In the meantime, reach out and we&apos;ll
              work with you to scope a plan that fits your project and
              budget.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-grain scroll-mt-20 relative overflow-hidden bg-navy-950 py-20">
        <Container className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Questions about our work?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Reach out and we&apos;ll get back to you.
            </p>
          </div>
          <a
            href={`mailto:${lab.contactEmail}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-green-400"
          >
            <Mail size={16} />
            {lab.contactEmail}
          </a>
        </Container>
      </section>
    </>
  );
}
