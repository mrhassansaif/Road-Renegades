/**
 * GitHub Pages project site base path.
 * Must stay in sync with next.config.ts.
 *
 * - Unset NEXT_PUBLIC_BASE_PATH → `/Road-Renegades` (project Pages)
 * - NEXT_PUBLIC_BASE_PATH="" → root hosting (user site / custom domain)
 */
export const DEFAULT_BASE_PATH = "/Road-Renegades";

export function resolveBasePath(): string {
  const configured = process.env.NEXT_PUBLIC_BASE_PATH;
  if (configured !== undefined) {
    return configured.replace(/\/$/, "");
  }
  return DEFAULT_BASE_PATH;
}

/** Prefix a root-relative public path with the deployment basePath (idempotent). */
export function withBasePath(path: string): string {
  const basePath = resolveBasePath();
  if (!path) return basePath || "/";
  if (/^https?:\/\//i.test(path) || path.startsWith("//")) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return normalized;
  if (normalized === basePath || normalized.startsWith(`${basePath}/`)) {
    return normalized;
  }
  return `${basePath}${normalized}`;
}

/** Strip deployment basePath, returning a root-relative public path. */
export function stripBasePath(path: string): string {
  const basePath = resolveBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return normalized;
  if (normalized === basePath) return "/";
  if (normalized.startsWith(`${basePath}/`)) {
    return normalized.slice(basePath.length) || "/";
  }
  return normalized;
}
