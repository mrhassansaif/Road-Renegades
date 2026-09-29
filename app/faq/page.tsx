import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FaqItem } from "@/components/ui/FaqItem";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqPage } from "@/lib/data/services";
import { CtaButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQ for Road Renegades — modifications, timelines, consultations, customization process, and maintenance.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title={faqPage.hero.title}
        description={faqPage.hero.description}
      />

      <section className="rr-section rr-void">
        <div className="rr-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="rr-muted m-0 max-w-2xl">
              Answers cover common workshop questions. They are guidance for
              planning — not guarantees of timeline or pricing.
            </p>
            <CtaButton href="/contact" variant="outline">
              Request a Consultation
            </CtaButton>
          </div>

          <div className="space-y-12">
            {faqPage.groups.map((group) => (
              <div key={group.title}>
                <h2 className="mb-4 mt-0 text-[28px] uppercase tracking-[0.02em]">
                  {group.title}
                </h2>
                <div className="max-w-3xl">
                  {group.items.map((item) => (
                    <FaqItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still Have a Question?"
        description="Send the bike details and what you’re trying to achieve — we’ll help you find the right next step."
        ctaLabel="Contact the Workshop"
        ctaHref="/contact"
      />
    </>
  );
}
