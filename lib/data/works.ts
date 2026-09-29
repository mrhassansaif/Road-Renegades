import { assets } from "@/lib/assets";

export type WorkItem = {
  id: string;
  title: string;
  image: string;
  category: string;
  summary?: string;
};

export type FeaturedWork = {
  title: string;
  model: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  category: string;
  highlights: string[];
};

export const galleryCategories = [
  "All",
  "Scrambler",
  "Cafe Racer",
  "Touring",
  "Restoration",
  "Performance",
  "Custom",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const featuredWork: FeaturedWork = {
  title: "Featured Build",
  model: "Harborline Scrambler",
  category: "Scrambler",
  duration: "Multi-month project",
  price: "Quote on consultation",
  image: assets.images.storyWorks[5],
  description:
    "A street-scrambler style commission focused on stance, usable suspension, and a durable finish. Details and investment are confirmed during consultation — figures here are illustrative of project shape, not a fixed package price.",
  highlights: [
    "Custom exhaust & intake path",
    "Suspension and geometry setup",
    "Hand-finished tank and trim",
    "Road-test and final setup",
  ],
};

/** Home “Latest Works” — original story-work images. */
export const works: WorkItem[] = [
  {
    id: "night-road-scrambler",
    title: "Night Road Scrambler",
    image: assets.images.storyWorks[0],
    category: "Scrambler",
    summary: "Mixed-surface stance with a darker finish package.",
  },
  {
    id: "cafe-line-twin",
    title: "Cafe Line Twin",
    image: assets.images.storyWorks[1],
    category: "Cafe Racer",
    summary: "Clip-on attitude, cleaned lines, road-focused setup.",
  },
  {
    id: "blackout-tourer",
    title: "Blackout Tourer",
    image: assets.images.storyWorks[2],
    category: "Touring",
    summary: "Comfort and luggage without losing a hard street look.",
  },
  {
    id: "iron-frame-restore",
    title: "Iron Frame Restore",
    image: assets.images.storyWorks[3],
    category: "Restoration",
    summary: "Mechanical refresh with careful cosmetic conservation.",
  },
  {
    id: "track-day-spec",
    title: "Track Day Spec",
    image: assets.images.storyWorks[4],
    category: "Performance",
    summary: "Brakes, cooling, and control upgrades for harder riding.",
  },
  {
    id: "harborline-scrambler",
    title: "Harborline Scrambler",
    image: assets.images.storyWorks[5],
    category: "Custom",
    summary: "Full custom direction from consult through road test.",
  },
];

/** Gallery page — dedicated work images from the original Works page. */
export const galleryWorks: WorkItem[] = [
  {
    id: "work-1",
    title: "Steel Cut Cafe",
    image: assets.images.galleryWorks[0],
    category: "Cafe Racer",
    summary: "Tight silhouette and purposeful street ergonomics.",
  },
  {
    id: "work-2",
    title: "Dust Trail Scrambler",
    image: assets.images.galleryWorks[1],
    category: "Scrambler",
    summary: "Higher stance and trail-ready attitude for weekend loops.",
  },
  {
    id: "work-3",
    title: "Long Haul Touring",
    image: assets.images.galleryWorks[2],
    category: "Touring",
    summary: "Distance comfort with integrated luggage solutions.",
  },
  {
    id: "work-4",
    title: "Heritage Restore",
    image: assets.images.galleryWorks[3],
    category: "Restoration",
    summary: "Preserve character, renew reliability.",
  },
  {
    id: "work-5",
    title: "Street Fighter Spec",
    image: assets.images.galleryWorks[4],
    category: "Performance",
    summary: "Aggressive street setup with focused control upgrades.",
  },
  {
    id: "work-6",
    title: "Custom Flat Tracker",
    image: assets.images.galleryWorks[5],
    category: "Custom",
    summary: "One-off direction shaped around the rider’s brief.",
  },
];
