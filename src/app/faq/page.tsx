import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Miller Lab",
  description: "Frequently asked questions about working with the Miller Lab.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />

      <section className="py-20">
        <Container className="max-w-3xl">
          <dl className="divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-8 first:pt-0">
                <dt className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-base leading-7 text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
