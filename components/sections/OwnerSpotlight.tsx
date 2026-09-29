import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import { owner } from "@/lib/data/about";

type OwnerSpotlightProps = {
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function OwnerSpotlight({
  showCta = true,
  ctaLabel = "Meet the Crew",
  ctaHref = "/about",
}: OwnerSpotlightProps) {
  return (
    <section className="rr-section rr-void">
      <div className="rr-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="rr-owner-media">
          <div className="rr-owner-media__slash" aria-hidden />
          <div className="rr-card-media rr-aspect-portrait max-w-md lg:max-w-none">
            <Image
              src={owner.image}
              alt={owner.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
        <div>
          <p className="rr-eyebrow">{owner.role}</p>
          <h2 className="mt-3 mb-0 uppercase tracking-[0.02em]">{owner.name}</h2>
          <p className="rr-display mt-2 mb-0 text-xl uppercase tracking-[0.5px] text-[color:var(--rr-muted)]">
            {owner.headline}
          </p>
          <p className="rr-muted mt-6 mb-0">{owner.bio}</p>
          <p className="rr-muted mt-4 mb-0">{owner.story}</p>
          <Image
            src={owner.signature}
            alt=""
            width={160}
            height={48}
            className="mt-8 h-12 w-auto brightness-0 invert"
          />
          {showCta ? (
            <div className="mt-8">
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
