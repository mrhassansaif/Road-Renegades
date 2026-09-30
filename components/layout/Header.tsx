"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CtaButton } from "@/components/ui/Button";
import { Navigation } from "@/components/navigation/Navigation";
import { MobileNav } from "@/components/navigation/MobileNav";
import { IconClose, IconMenu } from "@/components/icons/SocialIcons";
import { navLinks, siteConfig } from "@/lib/data/site";
import { assets } from "@/lib/assets";

/**
 * Shared site header.
 * Home: fully opaque content over a transparent bar + top scrim (no faded nav).
 * Inner pages / scrolled / menu open: solid opaque bar.
 */
export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 922px)").matches) {
        closeMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`rr-header${solid ? " is-solid" : " is-transparent"}${
        open ? " is-menu-open" : ""
      }`}
    >
      <div className="rr-header__bar">
        <div className="rr-container rr-header__inner">
          <Link
            href="/"
            className="rr-header__logo"
            aria-label={`${siteConfig.name} home`}
            onClick={closeMenu}
          >
            <Image
              src={assets.logos.primary}
              alt=""
              width={132}
              height={34}
              priority
            />
          </Link>

          <div className="rr-header__desktop">
            <Navigation links={navLinks} pathname={pathname} />
            <CtaButton href="/contact" variant="header">
              Let&apos;s Talk
            </CtaButton>
          </div>

          <button
            type="button"
            className="rr-header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <MobileNav
        open={open}
        pathname={pathname}
        links={navLinks}
        onClose={closeMenu}
      />
    </header>
  );
}
