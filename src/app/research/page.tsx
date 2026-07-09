import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { iconMap } from "@/components/icon-map";
import { researchAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research | Miller Lab",
  description: "The Miller Lab's core research areas.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Five disciplines, one computational pipeline"
        description="Each research area feeds into the next — from raw biological data to AI-driven predictions to clinically relevant, publication-ready results."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <div
                  key={area.slug}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-teal-400">
                    {Icon && <Icon size={24} strokeWidth={1.75} />}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {area.blurb}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Tell us about your research question and we&apos;ll help scope
              the right computational approach.
            </p>
            <Link
              href="/services#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Start a Collaboration
              <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
