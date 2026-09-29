"use client";

import { useMemo, useState } from "react";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  galleryCategories,
  type GalleryCategory,
  type WorkItem,
} from "@/lib/data/works";

type GalleryShowcaseProps = {
  items: WorkItem[];
  title?: string;
  description?: string;
};

export function GalleryShowcase({
  items,
  title = "Build Showcase",
  description = "Browse workshop builds by style. Imagery is from the original site archive.",
}: GalleryShowcaseProps) {
  const [active, setActive] = useState<GalleryCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <section className="rr-section rr-void">
      <div className="rr-container">
        <SectionHeading
          title={title}
          description={description}
          className="mb-8"
        />

        <div
          className="rr-gallery-filters mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Build categories"
        >
          {galleryCategories.map((category) => {
            const selected = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`rr-display border px-4 py-2 text-xs uppercase tracking-[2px] transition-colors ${
                  selected
                    ? "border-[color:var(--rr-accent)] bg-[color:var(--rr-accent)] text-[color:var(--rr-void)]"
                    : "border-[color:var(--rr-glass)] bg-transparent text-[color:var(--rr-soft)] hover:border-[color:var(--rr-accent)] hover:text-[color:var(--rr-accent)]"
                }`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="rr-muted">No builds in this category yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
                href="/contact"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
