/**
 * Canonical public asset paths for the Next.js app.
 * Original scrape filenames and usage are documented in ASSET_MAP.md.
 */
export const assets = {
  logos: {
    primary: "/logos/logo-white.svg",
    signature: "/logos/signature.svg",
    partners: [
      "/logos/partner-1.svg",
      "/logos/partner-2.svg",
      "/logos/partner-3.svg",
      "/logos/partner-4.svg",
      "/logos/partner-5.svg",
    ],
  },
  icons: {
    favicon: "/icons/favicon.png",
  },
  backgrounds: {
    hero: "/backgrounds/hero-section.jpg",
  },
  images: {
    motorcycle: "/images/motorcycle.png",
    people: {
      owner: "/images/people/owner.png",
      customerTestimonial: "/images/people/customer-testimonial.png",
    },
    team: [
      "/images/team/team-1.jpg",
      "/images/team/team-2.jpg",
      "/images/team/team-3.jpg",
      "/images/team/team-4.jpg",
    ],
    storyWorks: [
      "/images/works/story-work-1.jpg",
      "/images/works/story-work-2.jpg",
      "/images/works/story-work-3.jpg",
      "/images/works/story-work-4.jpg",
      "/images/works/story-work-5.jpg",
      "/images/works/story-work-6.jpg",
    ],
    galleryWorks: [
      "/images/works/work-1.jpg",
      "/images/works/work-2.jpg",
      "/images/works/work-3.jpg",
      "/images/works/work-4.jpg",
      "/images/works/work-5.jpg",
      "/images/works/work-6.jpg",
    ],
    services: [
      "/images/services/service-1.jpg",
      "/images/services/service-2.jpg",
      "/images/services/service-3.jpg",
      "/images/services/service-4.jpg",
    ],
    testimonialAvatars: [
      "/images/testimonials/avatar-1.jpg",
      "/images/testimonials/avatar-2.jpg",
      "/images/testimonials/avatar-3.jpg",
      "/images/testimonials/avatar-4.jpg",
      "/images/testimonials/avatar-5.jpg",
      "/images/testimonials/avatar-6.jpg",
    ],
  },
} as const;
