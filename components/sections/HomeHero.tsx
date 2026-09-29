import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import { homeContent } from "@/lib/data/home";
import { assets } from "@/lib/assets";

/**
 * Home hero — matches original Elementor section:
 * centered eyebrow + H1 + single white outline CTA over full-bleed bg.
 */
export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="rr-hero">
      <Image
        src={assets.backgrounds.hero}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="rr-hero__overlay" aria-hidden />

      <div className="rr-container relative z-10 w-full">
        <div className="rr-hero__content">
          <p className="rr-eyebrow">{hero.eyebrow}</p>
          <h1 className="rr-hero__title">{hero.title}</h1>
          <div className="rr-hero__actions">
            <CtaButton href={hero.primaryCta.href} variant="light">
              {hero.primaryCta.label}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
