/**
 * Homepage-specific copy.
 * Section order mirrors the scraped Elementor home page.
 */
export const homeContent = {
  hero: {
    eyebrow: "Custom Bike Builder",
    title: "Make Your Bike Truly Yours",
    primaryCta: { label: "Check Our Works", href: "/gallery" },
  },
  story: {
    eyebrow: "Custom Bike Builder",
    title: "How It All Started",
    description:
      "Road Renegades began as a small garage obsessed with one idea: every motorcycle should feel personal. What started with weekend builds and late-night fabrication grew into a full workshop where design, metalwork, paint, and setup happen side by side.",
    body: "Today we take stock machines and unfinished ideas and turn them into bikes worth riding every day — performance-tuned, road-tested, and finished with the kind of detail riders notice the moment they throw a leg over.",
    cta: { label: "Read More", href: "/about" },
  },
  services: {
    eyebrow: "What We Do",
    title: "We Build Custom Bike",
    description:
      "Modify what you ride, keep it sharp, kit it right, or commission a full custom — design, fabrication, finish, and setup under one roof.",
    features: [
      "Performance and stance modifications",
      "Workshop-grade maintenance",
      "Accessories and fitment support",
      "Full custom builds and restorations",
    ],
    cta: { label: "Check Our Works", href: "/gallery" },
  },
  works: {
    eyebrow: "Custom Bike Builder",
    title: "Our Latest Works",
    description:
      "Recent commissions from the bay — scramblers, cafe builds, restorations, and performance machines.",
  },
  testimonial: {
    eyebrow: "What Our Client Say",
    cta: { label: "View All Testimonial", href: "/testimonials" },
  },
  owner: {
    cta: { label: "Read More", href: "/about" },
  },
  team: {
    eyebrow: "Our Team",
    title: "Expert. Experienced.",
    description:
      "Fabricators, finishers, mechanics, and designers — one crew across every stage of the build.",
  },
  ctaBand: {
    title: "Let's Build Your Dream Bike!",
    description:
      "Bring a photo, a sketch, or just a gut feeling. We'll map the build, the timeline, and the ride.",
    cta: { label: "Let's Talk!", href: "/contact" },
  },
} as const;
