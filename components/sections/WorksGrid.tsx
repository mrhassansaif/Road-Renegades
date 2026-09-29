import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryCard } from "@/components/ui/GalleryCard";
import type { WorkItem } from "@/lib/data/works";

type WorksGridProps = {
  items: WorkItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  columns?: 2 | 3;
};

export function WorksGrid({
  items,
  eyebrow,
  title = "Our Latest Works",
  description,
  align = "left",
  columns = 3,
}: WorksGridProps) {
  const grid =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="rr-section rr-void">
      <div className="rr-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
          className="mb-12"
        />
        <div className={`grid gap-8 ${grid}`}>
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              subtitle={item.summary}
              image={item.image}
              href="/gallery"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
