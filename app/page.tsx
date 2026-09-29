import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { WorksGrid } from "@/components/sections/WorksGrid";
import { FeaturedTestimonial } from "@/components/sections/FeaturedTestimonial";
import { OwnerSpotlight } from "@/components/sections/OwnerSpotlight";
import { StatsCounters } from "@/components/sections/StatsCounters";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeContent } from "@/lib/data/home";
import { stats, team } from "@/lib/data/about";
import { featuredTestimonial } from "@/lib/data/testimonials";
import { works } from "@/lib/data/works";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
};

/**
 * Homepage section order matches scraped Elementor home:
 * Hero → Story → Stats → Services → Works → Testimonial →
 * Partners → Owner → Team → CTA band
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StorySection />
      <StatsCounters stats={stats} />
      <ServicesTeaser />
      <WorksGrid
        items={works}
        eyebrow={homeContent.works.eyebrow}
        title={homeContent.works.title}
        description={homeContent.works.description}
        align="center"
      />
      <FeaturedTestimonial
        testimonial={featuredTestimonial}
        eyebrow={homeContent.testimonial.eyebrow}
        ctaLabel={homeContent.testimonial.cta.label}
        ctaHref={homeContent.testimonial.cta.href}
      />
      <PartnerLogos />
      <OwnerSpotlight
        ctaLabel={homeContent.owner.cta.label}
        ctaHref={homeContent.owner.cta.href}
      />
      <TeamGrid
        members={team}
        eyebrow={homeContent.team.eyebrow}
        title={homeContent.team.title}
        description={homeContent.team.description}
      />
      <CtaBand
        title={homeContent.ctaBand.title}
        description={homeContent.ctaBand.description}
        ctaLabel={homeContent.ctaBand.cta.label}
        ctaHref={homeContent.ctaBand.cta.href}
      />
    </>
  );
}
