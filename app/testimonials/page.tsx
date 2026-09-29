import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedTestimonial } from "@/components/sections/FeaturedTestimonial";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { featuredTestimonial, testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Sample rider feedback placeholders for the Road Renegades workshop site — replace with real reviews before launch.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        description="Sample feedback layout from the original site structure. Replace these placeholders with real, permissioned rider quotes before launch."
      />

      <section className="rr-surface rr-border-b">
        <div className="rr-container py-6">
          <p className="rr-eyebrow m-0 text-[color:var(--rr-accent)]">
            Placeholder content — not verified customer reviews
          </p>
        </div>
      </section>

      <FeaturedTestimonial testimonial={featuredTestimonial} showCta={false} />
      <TestimonialsGrid items={testimonials} />
      <CtaBand
        title="Have a Build Story to Share?"
        description="After launch, this page should feature real rider feedback. Until then, contact the workshop to talk about your project."
        ctaLabel="Contact the Workshop"
        ctaHref="/contact"
      />
    </>
  );
}
