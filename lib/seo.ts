import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { assets } from "@/lib/assets";

/** Join site origin + path without dropping the GitHub Pages basePath segment. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/")
    ? `${base}${normalized}`
    : `${base}${normalized}/`;
}

/** Absolute URL for a public asset (no trailing slash). */
export function absoluteAssetUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Root-relative asset path including GitHub Pages basePath. */
export function publicAssetPath(path: string): string {
  const basePath = siteConfig.basePath.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

const ogImage = {
  url: absoluteAssetUrl(assets.backgrounds.hero),
  width: 1920,
  height: 1080,
  alt: `${siteConfig.name} custom motorcycle workshop`,
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage.url],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  };
}

export const defaultOgImage = ogImage;
