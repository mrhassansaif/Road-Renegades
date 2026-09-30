import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactForm } from "@/components/ui/ContactForm";
import { CtaButton } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact the Road Renegades workshop — consultation requests, service questions, and build conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Start a build conversation, ask about service, or request a consultation. Placeholder contact details are shown until your real workshop info is added."
      />

      <section className="rr-section rr-void">
        <div className="rr-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactBlock
            title="Workshop Information"
            description="Use the form to send a message. Replace the placeholder address, phone, and email with your live details before publishing."
          />
          <div>
            <h2 className="mb-6 mt-0 uppercase tracking-[0.02em]">
              Send Us a Message
            </h2>
            <ContactForm />
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/services" variant="outline">
                View Services
              </CtaButton>
              <CtaButton href="/faq" variant="outline">
                Read FAQ
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <MapEmbed />

      <CtaBand
        title="Prefer to Talk Builds First?"
        description="Browse recent styles, then come back with references and questions."
        ctaLabel="Explore Builds"
        ctaHref="/gallery"
      />
    </>
  );
}
