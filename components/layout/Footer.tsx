import Image from "next/image";
import Link from "next/link";
import {
  footerExtraLinks,
  footerServices,
  siteConfig,
} from "@/lib/data/site";
import { assets } from "@/lib/assets";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SocialLinks } from "@/components/navigation/SocialLinks";

/**
 * Shared site footer — used on every page.
 *
 * Matches Astra builder layout:
 * - Primary row: 4 columns desktop (1fr 1fr 1fr 2fr), 2 equal tablet, stacked mobile
 *   1) Logo + blurb + social icons
 *   2) CONTACT INFO
 *   3) Services links (+ FAQ)
 *   4) STAY UP TO DATE newsletter
 * - Below row: centered copyright, min-height 80px
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rr-footer" id="colophon">
      <div className="rr-footer__primary">
        <div className="rr-container">
          <div className="rr-footer__grid">
            <div className="rr-footer__col">
              <Link href="/" className="rr-footer__logo" aria-label={siteConfig.name}>
                <Image
                  src={assets.logos.primary}
                  alt={siteConfig.name}
                  width={132}
                  height={34}
                />
              </Link>
              <p className="rr-footer__blurb">{siteConfig.footerBlurb}</p>
              <SocialLinks />
            </div>

            <div className="rr-footer__col">
              <h2 className="rr-footer__title">Contact Info</h2>
              <div className="rr-footer__text">
                <p className="mb-2 text-xs uppercase tracking-[2px] text-[color:var(--rr-accent)]">
                  {siteConfig.contact.note}
                </p>
                <p>
                  {siteConfig.contact.street}
                  <br />
                  <a href={siteConfig.contact.phoneHref}>
                    {siteConfig.contact.phone}
                  </a>
                  <br />
                  <a href={siteConfig.contact.emailHref}>
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="rr-footer__col">
              <h2 className="rr-footer__title">Services</h2>
              <ul className="rr-footer__menu">
                {footerServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                {footerExtraLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rr-footer__col rr-footer__col--wide">
              <h2 className="rr-footer__title">Stay Up To Date</h2>
              <div className="rr-footer__newsletter">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rr-footer__below">
        <div className="rr-container">
          <p className="rr-footer__copyright">
            Copyright © {year} {siteConfig.name} | Powered by {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
