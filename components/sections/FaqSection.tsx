import { FaqItem } from "@/components/ui/FaqItem";
import type { FaqEntry } from "@/lib/data/services";

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly FaqEntry[];
};

export function FaqSection({
  eyebrow = "FAQ",
  title,
  description,
  items,
}: FaqSectionProps) {
  return (
    <section className="rr-section rr-void">
      <div className="rr-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="rr-eyebrow mb-3">{eyebrow}</p>
          <h2 className="m-0 uppercase tracking-[0.02em]">{title}</h2>
          {description ? (
            <p className="rr-muted mt-4 mb-0 max-w-md">{description}</p>
          ) : null}
        </div>
        <div>
          {items.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
