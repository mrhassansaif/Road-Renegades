import type { NextConfig } from "next";

/**
 * GitHub Pages project site:
 *   https://mrhassansaif.github.io/Road-Renegades/
 *
 * Override with NEXT_PUBLIC_BASE_PATH="" for root hosting (e.g. custom domain
 * or username.github.io user site). Leave unset to use the repo subpath.
 */
const repoName = "Road-Renegades";
const configured = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  configured !== undefined ? configured : `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Empty string → omit (user/org site or custom domain at root)
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  images: {
    // Required for static hosting — no Next.js image optimization server
    unoptimized: true,
  },
};

export default nextConfig;
