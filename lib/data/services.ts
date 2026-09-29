import { assets } from "@/lib/assets";

export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  features: string[];
};

export type FaqEntry = {
  question: string;
  answer: string;
};

/** Four pillars from the original site — workshop-voiced copy. */
export const services: Service[] = [
  {
    id: "bike-modifying",
    title: "Bike Modifying",
    summary: "Performance, stance, and style upgrades for the bike you already ride.",
    description:
      "Exhaust and intake work, suspension setup, lighting and electrical upgrades, and visual restyles that change how your motorcycle feels on the road — without losing what made you buy it.",
    image: assets.images.services[0],
    features: [
      "Exhaust, intake & performance tuning",
      "Suspension setup & handling",
      "Lighting & electrical upgrades",
      "Cosmetic restyling & accessories",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    summary: "Workshop-grade service so every mile stays sharp and reliable.",
    description:
      "Diagnostics, scheduled service, brake and drivetrain work, and seasonal prep from mechanics who ride. We keep custom and stock bikes road-ready — not stuck on the stand.",
    image: assets.images.services[1],
    features: [
      "Scheduled service packages",
      "Diagnostics & troubleshooting",
      "Brakes, chain & fluid service",
      "Seasonal prep & storage care",
    ],
  },
  {
    id: "spare-parts",
    title: "Accessories",
    summary: "Parts and kit chosen for fitment, strength, and the way you ride.",
    description:
      "OEM and aftermarket components, touring luggage, custom accessories, and fitment advice — whether you wrench at home or leave the install to the shop.",
    image: assets.images.services[2],
    features: [
      "OEM & aftermarket parts",
      "Touring & luggage setups",
      "Custom accessories",
      "Fitment consultation",
    ],
  },
  {
    id: "custom-build",
    title: "Custom Build",
    summary:
      "Cafe racers, scramblers, restorations, and one-off machines — concept to road test.",
    description:
      "Full custom projects under one roof: design, fabrication, paint and finish, assembly, and final shakedown. Built for riders who want a motorcycle that couldn't belong to anyone else.",
    image: assets.images.services[3],
    features: [
      "Design & concept development",
      "Custom fabrication & prototyping",
      "Paint, finish & detailing",
      "Final assembly & road test",
    ],
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Scope the Job",
    text: "We confirm the bike, the goal, and what success looks like — performance, looks, comfort, or a full rebuild.",
  },
  {
    step: "02",
    title: "Plan the Work",
    text: "Parts, fabrication, finish, and timeline get mapped before tools hit the machine.",
  },
  {
    step: "03",
    title: "Build & Set Up",
    text: "Workshop time for mechanical work, metalwork, wiring, paint, and careful assembly.",
  },
  {
    step: "04",
    title: "Test & Handover",
    text: "Final checks and a road-ready handoff with clear notes on care and follow-up.",
  },
] as const;

export const serviceFaqs: FaqEntry[] = [
  {
    question: "How do I start a customization project?",
    answer:
      "Reach out through the contact form or request a consultation. Share photos of your bike, what you want to change, and how you ride. We’ll outline options, rough scope, and what information we need next.",
  },
  {
    question: "How long does a custom build usually take?",
    answer:
      "Timelines depend on scope, parts lead times, and fabrication needs. Smaller modification jobs can move faster; full customs and restorations take longer. You’ll get a realistic range after the consultation — not a one-size promise.",
  },
  {
    question: "Can you work on a bike I already own?",
    answer:
      "Yes. Most of our work starts with a rider’s existing motorcycle — performance upgrades, stance and suspension, lighting, accessories, paint, or a fuller restyle.",
  },
  {
    question: "Do you only build cafe racers and scramblers?",
    answer:
      "No. Those styles show up often, but we also handle touring setups, restorations, performance street builds, and tailored accessory work. The brief follows your riding — not a fixed catalog.",
  },
  {
    question: "What about ongoing maintenance after a build?",
    answer:
      "We service both stock and modified machines. If we built or modified your bike, we’re already familiar with the setup — which makes follow-up service smoother.",
  },
  {
    question: "How do consultations work?",
    answer:
      "Consultations are conversations first: goals, budget range, timeline, and constraints. There’s no pressure to commit on the spot. If the project is a fit, we move into a clear plan.",
  },
];

export const faqGroups: { title: string; items: FaqEntry[] }[] = [
  {
    title: "Consultations",
    items: [
      serviceFaqs[0],
      serviceFaqs[5],
      {
        question: "What should I bring to a consultation?",
        answer:
          "Photos of the bike, a short list of goals (performance, comfort, looks, touring, etc.), any must-keep parts, and a rough budget range if you have one. References help — magazine shots, other builds, or a rough sketch are all useful.",
      },
    ],
  },
  {
    title: "Modifications",
    items: [
      serviceFaqs[2],
      serviceFaqs[3],
      {
        question: "Can I stage modifications over time?",
        answer:
          "Often yes. Many riders start with handling, brakes, or exhaust, then return for stance, lighting, or finish work. We’ll help sequence jobs so earlier work doesn’t fight later plans.",
      },
    ],
  },
  {
    title: "Timelines & Process",
    items: [
      serviceFaqs[1],
      {
        question: "What does the customization process look like?",
        answer:
          "Typical flow: consultation → design and plan → build and fabricate → finish and road test. You’ll get progress check-ins on larger jobs so the direction stays aligned.",
      },
      {
        question: "Will I get updates during a longer build?",
        answer:
          "Yes. On multi-stage projects we share progress notes and photos at agreed milestones so you’re not waiting in the dark for a surprise reveal.",
      },
    ],
  },
  {
    title: "Maintenance",
    items: [
      serviceFaqs[4],
      {
        question: "Do you service bikes you didn’t build?",
        answer:
          "Yes. Scheduled service, diagnostics, brakes, fluids, and seasonal prep are available for stock and modified machines — including bikes that arrived from another shop.",
      },
      {
        question: "How do I book routine maintenance?",
        answer:
          "Use the contact form with your bike details and preferred timing. We’ll confirm availability and what the visit should cover.",
      },
    ],
  },
];

export const faqPage = {
  hero: {
    title: "FAQ",
    description:
      "Common questions about modifications, timelines, consultations, customization process, and maintenance.",
  },
  groups: faqGroups,
} as const;
