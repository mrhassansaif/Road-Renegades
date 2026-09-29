import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { OwnerSpotlight } from "@/components/sections/OwnerSpotlight";
import { StatsCounters } from "@/components/sections/StatsCounters";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage, stats, team } from "@/lib/data/about";
import { CtaButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Workshop story, philosophy, craftsmanship, and build process at Road Renegades.",
};

/**
 * About structure mirrors scrape:
 * Page hero → Owner → Our Story → Stats → Team → CTA
 * Expanded philosophy/craft/process sections keep the same visual language.
 */
export default function AboutPage() {
  const { hero, story, philosophy, craftsmanship, differentiators, process, cta } =
    aboutPage;

  return (
    <>
      <PageHero title={hero.title} description={hero.description} />

      <OwnerSpotlight showCta={false} />

      <section className="rr-section rr-surface rr-border-y">
        <div className="rr-container max-w-[760px]">
          <SectionHeading
            eyebrow="Our Story"
            title={story.title}
            description={story.body[0]}
          />
          <p className="rr-muted mt-4 mb-0">{story.body[1]}</p>
        </div>
      </section>

      <section className="rr-section rr-void">
        <div className="rr-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={philosophy.eyebrow}
              title={philosophy.title}
              description={philosophy.body}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={differentiators.eyebrow}
              title={differentiators.title}
            />
            <ul className="mt-6 mb-0 list-none space-y-4 p-0">
              {differentiators.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-[color:var(--rr-muted)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-[color:var(--rr-accent)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rr-section rr-surface rr-border-y">
        <div className="rr-container">
          <SectionHeading
            eyebrow={craftsmanship.eyebrow}
            title={craftsmanship.title}
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {craftsmanship.items.map((item) => (
              <article
                key={item.title}
                className="border border-[color:var(--rr-glass)] bg-[color:var(--rr-void)] p-6"
              >
                <h3 className="m-0 text-[22px] uppercase tracking-[0.02em]">
                  {item.title}
                </h3>
                <p className="rr-muted mt-3 mb-0 text-sm leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow={process.eyebrow}
        title={process.title}
        steps={process.steps}
      />

      <StatsCounters stats={stats} />
      <TeamGrid
        members={team}
        eyebrow="Our Team"
        title="Expert. Experienced."
      />

      <section className="rr-section rr-surface rr-border-t">
        <div className="rr-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="m-0 max-w-xl uppercase tracking-[0.02em]">
            {cta.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            <CtaButton href={cta.href} variant="outline">
              {cta.label}
            </CtaButton>
            <CtaButton href="/gallery" variant="light">
              Check Our Works
            </CtaButton>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Build Your Dream Bike!"
        ctaLabel="Let's Talk!"
        ctaHref="/contact"
      />
    </>
  );
}
