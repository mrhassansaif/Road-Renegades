import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialsGrid({ items }: { items: Testimonial[] }) {
  return (
    <section className="rr-section rr-void">
      <div className="rr-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            quote={item.quote}
            image={item.image}
            role={item.role}
          />
        ))}
      </div>
    </section>
  );
}
