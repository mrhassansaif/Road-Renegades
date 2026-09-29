export const siteConfig = {
  name: "Road Renegades",
  tagline: "Custom Bike Builder",
  description:
    "A specialist motorcycle workshop for custom builds, performance upgrades, and road-ready modifications — designed, fabricated, and finished under one roof.",
  url: "https://roadrenegades.com",
  contact: {
    /** Placeholder workshop details — replace with real business info before launch. */
    note: "Placeholder contact details — replace with your workshop information.",
    addressLines: [
      "123 Workshop Lane",
      "Your City, ST 00000",
      "United States",
    ],
    street: "123 Workshop Lane, Your City, ST 00000, United States",
    phone: "+1 (000) 000-0000",
    phoneHref: "tel:+10000000000",
    email: "hello@example.com",
    emailHref: "mailto:hello@example.com",
    /** Generic hours — original site did not publish a schedule. */
    hours: [
      { day: "Monday – Friday", time: "By appointment" },
      { day: "Saturday", time: "By appointment" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  social: [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  footerBlurb:
    "Road Renegades is a hands-on motorcycle customization shop. We design, fabricate, and finish bikes built for the road — not the showroom floor alone.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Testimonial", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServices = [
  { label: "Bike Modifying", href: "/services#bike-modifying" },
  { label: "Maintenance", href: "/services#maintenance" },
  { label: "Accessories", href: "/services#spare-parts" },
  { label: "Custom Build", href: "/services#custom-build" },
] as const;

export const footerExtraLinks = [
  { label: "FAQ", href: "/faq" },
] as const;
