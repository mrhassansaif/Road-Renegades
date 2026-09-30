import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedWorkBlock } from "@/components/sections/FeaturedWorkBlock";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase";
import { CtaBand } from "@/components/sections/CtaBand";
import { featuredWork, galleryWorks, works } from "@/lib/data/works";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Motorcycle build showcase — scramblers, cafe racers, touring setups, restorations, and custom projects.",
  path: "/gallery",
});

export default function GalleryPage() {
  const showcaseItems = [...galleryWorks, ...works].filter(
    (item, index, arr) => arr.findIndex((x) => x.id === item.id) === index,
  );

  return (
    <>
      <PageHero
        title="Gallery"
        description="A showcase of workshop builds and styles. Use categories to browse — start a conversation to talk through your own brief."
      />
      <FeaturedWorkBlock work={featuredWork} />
      <GalleryShowcase
        items={showcaseItems}
        title="Build Showcase"
        description="Filter by style. Cards link through to a consultation so we can talk about a similar direction for your bike."
      />
      <CtaBand
        title="See Something Close to Your Idea?"
        description="Bring references, photos, or a rough sketch — we’ll help turn direction into a build plan."
        ctaLabel="Start Your Build"
        ctaHref="/contact"
      />
    </>
  );
}
