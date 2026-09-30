import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconYouTube,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/data/site";

const icons = {
  Facebook: IconFacebook,
  Twitter: IconTwitter,
  Instagram: IconInstagram,
  YouTube: IconYouTube,
} as const;

type SocialLinksProps = {
  className?: string;
};

/**
 * Social icons. Placeholder entries without a real URL render as
 * non-interactive labeled controls (no broken `#` links).
 */
export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`rr-social ${className}`.trim()}>
      {siteConfig.social.map((item) => {
        const Icon = icons[item.label as keyof typeof icons];
        if (!Icon) return null;

        const hasUrl = Boolean(item.href && item.href !== "#");

        return (
          <li key={item.label}>
            {hasUrl ? (
              <a
                href={item.href}
                className="rr-social__link"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ) : (
              <span
                className="rr-social__link rr-social__link--pending"
                aria-label={`${item.label} (link coming soon)`}
                title={`${item.label} — link coming soon`}
              >
                <Icon />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
