import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaButton } from "@/components/ui/Button";
import { homeContent } from "@/lib/data/home";
import { assets } from "@/lib/assets";

/**
 * Home “What We Do” — matches original: image column + copy/list/CTA.
 */
export function ServicesTeaser() {
  const { services: copy } = homeContent;

  return (
    <section className="rr-section rr-surface relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[color:var(--rr-void)] lg:block"
      />
      <div className="rr-container relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rr-card-media rr-aspect-service">
          <Image
            src={assets.backgrounds.hero}
            alt="Custom motorcycle in workshop light"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <ul className="rr-feature-list mt-8 mb-0">
            {copy.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaButton href={copy.cta.href} variant="outline">
              {copy.cta.label}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
