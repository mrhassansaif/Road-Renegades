import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import type { Testimonial } from "@/lib/data/testimonials";

type FeaturedTestimonialProps = {
  testimonial: Testimonial;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showCta?: boolean;
};

/**
 * Featured quote block — large Oswald quote + portrait,
 * matching home / testimonial Elementor layout.
 */
export function FeaturedTestimonial({
  testimonial,
  eyebrow = "What Our Client Say",
  ctaLabel = "View All Testimonial",
  ctaHref = "/testimonials",
  showCta = true,
}: FeaturedTestimonialProps) {
  return (
    <section className="rr-section rr-surface rr-border-y">
      <div className="rr-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rr-card-media rr-aspect-portrait mx-auto w-full max-w-md lg:mx-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="rr-eyebrow">{eyebrow}</p>
          <blockquote className="rr-quote mt-6 mb-0">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="rr-display mt-8 mb-0 text-lg uppercase tracking-[0.5px]">
            {testimonial.name}
          </p>
          {testimonial.role ? (
            <p className="rr-muted mt-1 mb-0 text-sm">{testimonial.role}</p>
          ) : null}
          {showCta ? (
            <div className="mt-10">
              <CtaButton href={ctaHref} variant="outline">
                {ctaLabel}
              </CtaButton>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
