import { CtaButton } from "@/components/ui/Button";

type CtaBandProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({
  title = "Let's Build Your Dream Bike!",
  description,
  ctaLabel = "Let's Talk!",
  ctaHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="rr-cta-band">
      <div className="rr-container rr-cta-band__inner">
        <div className="max-w-xl">
          <h2 className="m-0 uppercase">{title}</h2>
          {description ? (
            <p className="rr-muted mt-4 mb-0 text-base md:text-[17px]">
              {description}
            </p>
          ) : null}
        </div>
        <CtaButton href={ctaHref} variant="outline">
          {ctaLabel}
        </CtaButton>
      </div>
    </section>
  );
}
