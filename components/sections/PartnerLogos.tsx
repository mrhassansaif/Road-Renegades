import Image from "next/image";
import { partnerLogos } from "@/lib/data/partners";

export function PartnerLogos() {
  return (
    <section className="rr-surface rr-border-y py-[var(--rr-section-xs)] md:py-[var(--rr-section-sm)]">
      <div className="rr-container">
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-10 p-0 md:gap-14">
          {partnerLogos.map((logo) => (
            <li
              key={logo.src}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
