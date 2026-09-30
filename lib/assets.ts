import { withBasePath } from "@/lib/basePath";

/**
 * Canonical public asset paths for the Next.js app.
 * Original scrape filenames and usage are documented in ASSET_MAP.md.
 *
 * Paths are prefixed with the GitHub Pages `basePath` because
 * `next/image` with `images.unoptimized: true` does not apply `basePath`
 * to local `src` values (see Next.js `generateImgAttrs`).
 */
const asset = (path: `/${string}`) => withBasePath(path);

export const assets = {
  logos: {
    primary: asset("/logos/logo-white.svg"),
    signature: asset("/logos/signature.svg"),
    partners: [
      asset("/logos/partner-1.svg"),
      asset("/logos/partner-2.svg"),
      asset("/logos/partner-3.svg"),
      asset("/logos/partner-4.svg"),
      asset("/logos/partner-5.svg"),
    ],
  },
  icons: {
    favicon: asset("/icons/favicon.png"),
  },
  backgrounds: {
    hero: asset("/backgrounds/hero-section.jpg"),
  },
  images: {
    motorcycle: asset("/images/motorcycle.png"),
    people: {
      owner: asset("/images/people/owner.png"),
      customerTestimonial: asset("/images/people/customer-testimonial.png"),
    },
    team: [
      asset("/images/team/team-1.jpg"),
      asset("/images/team/team-2.jpg"),
      asset("/images/team/team-3.jpg"),
      asset("/images/team/team-4.jpg"),
    ],
    storyWorks: [
      asset("/images/works/story-work-1.jpg"),
      asset("/images/works/story-work-2.jpg"),
      asset("/images/works/story-work-3.jpg"),
      asset("/images/works/story-work-4.jpg"),
      asset("/images/works/story-work-5.jpg"),
      asset("/images/works/story-work-6.jpg"),
    ],
    galleryWorks: [
      asset("/images/works/work-1.jpg"),
      asset("/images/works/work-2.jpg"),
      asset("/images/works/work-3.jpg"),
      asset("/images/works/work-4.jpg"),
      asset("/images/works/work-5.jpg"),
      asset("/images/works/work-6.jpg"),
    ],
    services: [
      asset("/images/services/service-1.jpg"),
      asset("/images/services/service-2.jpg"),
      asset("/images/services/service-3.jpg"),
      asset("/images/services/service-4.jpg"),
    ],
    testimonialAvatars: [
      asset("/images/testimonials/avatar-1.jpg"),
      asset("/images/testimonials/avatar-2.jpg"),
      asset("/images/testimonials/avatar-3.jpg"),
      asset("/images/testimonials/avatar-4.jpg"),
      asset("/images/testimonials/avatar-5.jpg"),
      asset("/images/testimonials/avatar-6.jpg"),
    ],
  },
} as const;
