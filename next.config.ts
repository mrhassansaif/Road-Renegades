import type { NextConfig } from "next";
import { resolveBasePath } from "./lib/basePath";

/**
 * GitHub Pages project site:
 *   https://mrhassansaif.github.io/Road-Renegades/
 *
 * Override with NEXT_PUBLIC_BASE_PATH="" for root hosting (e.g. custom domain
 * or username.github.io user site). Leave unset to use the repo subpath.
 */
const basePath = resolveBasePath();

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
    // Required for static hosting — no Next.js image optimization server.
    // Note: unoptimized images do NOT auto-prefix basePath; public paths
    // are prefixed centrally in lib/assets.ts via withBasePath().
    unoptimized: true,
  },
};

export default nextConfig;
