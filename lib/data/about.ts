import { assets } from "@/lib/assets";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Owner / crew names and photos come from the original demo assets.
 * Treat as placeholder workshop personas until real bios are supplied.
 */
export const owner = {
  name: "Matt Owen",
  role: "Founder & Lead Builder",
  image: assets.images.people.owner,
  signature: assets.logos.signature,
  headline: "Born to Ride",
  bio: "Road Renegades was founded around a simple workshop idea: every motorcycle should feel personal. Design, fabrication, finish, and setup stay in the same bay from first sketch to final road test.",
  story:
    "We take stock machines and unfinished ideas and shape them into bikes worth riding every day — performance-tuned, road-tested, and finished with the detail riders notice the moment they throw a leg over.",
};

export const team: TeamMember[] = [
  {
    name: "Danny Ings",
    role: "Gearhead",
    image: assets.images.team[0],
  },
  {
    name: "Rodrigo Lima",
    role: "Senior mechanic",
    image: assets.images.team[1],
  },
  {
    name: "Tim Hendrick",
    role: "Shop Manager",
    image: assets.images.team[2],
  },
  {
    name: "Mario Jota",
    role: "Mechanic",
    image: assets.images.team[3],
  },
];

/**
 * Workshop-shape counters (not claims of awards, clients, or years in business).
 * Replace with real figures only when the business supplies verified numbers.
 */
export const stats: Stat[] = [
  { value: 4, label: "Service Pillars" },
  { value: 6, label: "Build Styles" },
  { value: 4, label: "Build Stages" },
  { value: 4, label: "Core Disciplines" },
];

export const aboutPage = {
  hero: {
    title: "About Us",
    description:
      "A specialist motorcycle workshop for riders who want builds that feel personal — metalwork, finish, and setup under one roof.",
  },
  story: {
    eyebrow: "Workshop Story",
    title: "How Road Renegades Works",
    body: [
      "Road Renegades is built like a traditional custom shop: one crew, one bay language, and a process that keeps the rider involved without drowning them in jargon.",
      "Whether you bring a clear brief or a rough sketch, we map the build around how you ride — city streets, weekend trails, long tours, or a little of everything.",
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Ride First. Style Second. Never Either/Or.",
    body: "A good custom motorcycle has to feel right in the first mile. Stance, suspension, controls, and weight distribution come before chrome for chrome’s sake. Looks follow function — then we push both until the bike feels finished.",
  },
  craftsmanship: {
    eyebrow: "Craftsmanship",
    title: "Built in the Bay, Not Assembled From Boxes",
    items: [
      {
        title: "Fabrication",
        text: "Brackets, exhaust work, subframe changes, and one-off metalwork shaped to the bike — not forced onto it.",
      },
      {
        title: "Paint & Finish",
        text: "Prep, paint, and detailing that hold up past the photoshoot — clean edges, honest materials, durable clear.",
      },
      {
        title: "Mechanical Setup",
        text: "Brakes, drivetrain, electrics, and suspension dialed so the finished machine is ready to ride, not just ready to post.",
      },
    ],
  },
  differentiators: {
    eyebrow: "What Sets Us Apart",
    title: "What Makes Road Renegades Different",
    items: [
      "Design, fabrication, finish, and mechanical work stay with the same workshop.",
      "Build plans focus on how you ride — not a one-size catalog look.",
      "Clear milestones: consult, design, build, finish, road test.",
      "Modifications and maintenance for machines we know inside out.",
    ],
  },
  process: {
    eyebrow: "Build Process",
    title: "From First Conversation to First Ride",
    steps: [
      {
        step: "01",
        title: "Consultation",
        text: "Share photos, goals, budget range, and how you ride. We outline scope and next steps.",
      },
      {
        step: "02",
        title: "Design & Plan",
        text: "We lock direction — stance, parts, fabrication needs, finish, and a realistic timeline.",
      },
      {
        step: "03",
        title: "Build & Fabricate",
        text: "Metalwork, mechanical changes, wiring, and assembly happen in the workshop with progress check-ins.",
      },
      {
        step: "04",
        title: "Finish & Road Test",
        text: "Paint, detailing, setup, and a shakedown ride before the bike leaves the bay.",
      },
    ],
  },
  cta: {
    title: "Ready to Talk About Your Build?",
    label: "Request a Consultation",
    href: "/contact",
  },
} as const;
