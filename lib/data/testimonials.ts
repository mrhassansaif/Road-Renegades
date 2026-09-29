import { assets } from "@/lib/assets";

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  image: string;
  role?: string;
};

/**
 * Sample placeholder quotes for layout/demo purposes.
 * Replace with real, permissioned rider feedback before launch.
 * These are not claimed as verified Road Renegades customer reviews.
 */
export const featuredTestimonial: Testimonial = {
  id: "sample-featured",
  name: "Sample Rider",
  quote:
    "Placeholder feedback: the workshop kept communication clear, the stance felt right on the first ride, and the finish held up past the photos. Replace this with a real rider quote.",
  image: assets.images.people.customerTestimonial,
  role: "Sample custom-build feedback",
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    name: "Sample Rider A",
    quote:
      "Placeholder: modification work felt deliberate — exhaust, suspension, and finish read as one machine. Replace with a real review.",
    image: assets.images.testimonialAvatars[0],
    role: "Sample — modifications",
  },
  {
    id: "sample-2",
    name: "Sample Rider B",
    quote:
      "Placeholder: updates during the project were easy to follow. Replace with a real review.",
    image: assets.images.testimonialAvatars[1],
    role: "Sample — custom commission",
  },
  {
    id: "sample-3",
    name: "Sample Rider C",
    quote:
      "Placeholder: touring comfort and luggage setup matched the brief. Replace with a real review.",
    image: assets.images.testimonialAvatars[2],
    role: "Sample — touring setup",
  },
  {
    id: "sample-4",
    name: "Sample Rider D",
    quote:
      "Placeholder: service explained options without pressure. Replace with a real review.",
    image: assets.images.testimonialAvatars[3],
    role: "Sample — maintenance",
  },
  {
    id: "sample-5",
    name: "Sample Rider E",
    quote:
      "Placeholder: performance work felt sorted and street-usable. Replace with a real review.",
    image: assets.images.testimonialAvatars[4],
    role: "Sample — performance",
  },
  {
    id: "sample-6",
    name: "Sample Rider F",
    quote:
      "Placeholder: restoration kept character while renewing reliability. Replace with a real review.",
    image: assets.images.testimonialAvatars[5],
    role: "Sample — restoration",
  },
];
