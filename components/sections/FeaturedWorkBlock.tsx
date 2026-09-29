import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import type { FeaturedWork } from "@/lib/data/works";

export function FeaturedWorkBlock({ work }: { work: FeaturedWork }) {
  return (
    <section className="rr-section rr-void">
      <div className="rr-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rr-card-media rr-aspect-service">
          <Image
            src={work.image}
            alt={work.model}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="rr-eyebrow">{work.title}</p>
          <p className="rr-muted mt-2 mb-0 text-sm uppercase tracking-[2px]">
            {work.category}
          </p>
          <h2 className="mt-3 mb-0 uppercase tracking-[0.02em]">{work.model}</h2>
          <p className="rr-muted mt-4 mb-0">{work.description}</p>
          <ul className="mt-6 mb-0 list-none space-y-3 p-0">
            {work.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-[color:var(--rr-white)]"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-[color:var(--rr-accent)]"
                />
                {item}
              </li>
            ))}
          </ul>
          <dl className="rr-border-t mt-8 grid grid-cols-2 gap-6 pt-8">
            <div>
              <dt className="rr-label mb-2">Timeline</dt>
              <dd className="m-0 text-lg">{work.duration}</dd>
            </div>
            <div>
              <dt className="rr-label mb-2">Investment</dt>
              <dd className="m-0 text-lg text-[color:var(--rr-accent)]">
                {work.price}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/contact" variant="solid">
              Start Your Build
            </CtaButton>
            <CtaButton href="/services" variant="outline">
              View Services
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
