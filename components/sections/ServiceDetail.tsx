import Image from "next/image";
import { CtaButton } from "@/components/ui/Button";
import type { Service } from "@/lib/data/services";

export function ServiceDetail({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <article id={service.id} className="rr-border-b scroll-mt-[90px] py-[var(--rr-section-md)]">
      <div
        className={`rr-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="rr-card-media rr-aspect-service">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="m-0 uppercase tracking-[0.02em]">{service.title}</h2>
          <p className="rr-muted mt-4 mb-0 md:text-[17px]">{service.description}</p>
          <ul className="mt-6 mb-0 list-none space-y-3 p-0">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-[15px] text-[color:var(--rr-white)]"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-[color:var(--rr-accent)]"
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/gallery" variant="outline">
              Check Our Work
            </CtaButton>
            <CtaButton href="/contact" variant="solid">
              Contact Us
            </CtaButton>
          </div>
        </div>
      </div>
    </article>
  );
}
