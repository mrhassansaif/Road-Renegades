import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  serviceFaqs,
  serviceProcess,
  services,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Motorcycle modifying, maintenance, accessories, and full custom builds from the Road Renegades workshop.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Modify, maintain, kit, or fully custom-build — four workshop pillars under one roof."
      />

      <div className="rr-void">
        {services.map((service, index) => (
          <ServiceDetail
            key={service.id}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <ProcessSteps
        eyebrow="Process"
        title="How a Workshop Job Moves"
        description="Whether it’s a bolt-on upgrade or a full custom, the rhythm stays clear."
        steps={serviceProcess}
      />

      <FaqSection
        title="Common Workshop Questions"
        description="Timelines, consultations, and what to expect before you commit."
        items={serviceFaqs}
      />

      <PartnerLogos />
      <CtaBand
        title="Ready to Scope Your Project?"
        description="Tell us about the bike and the goal — we’ll help map the next step."
        ctaLabel="Let's Talk!"
        ctaHref="/contact"
      />
    </>
  );
}
