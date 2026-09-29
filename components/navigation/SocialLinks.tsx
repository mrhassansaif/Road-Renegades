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

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`rr-social ${className}`.trim()}>
      {siteConfig.social.map((item) => {
        const Icon = icons[item.label as keyof typeof icons];
        if (!Icon) return null;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              className="rr-social__link"
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
