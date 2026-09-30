"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { CtaButton } from "@/components/ui/Button";
import type { NavLink } from "@/components/navigation/Navigation";

type MobileNavProps = {
  open: boolean;
  pathname: string;
  links: readonly NavLink[];
  onClose: () => void;
};

/**
 * Astra-style mobile dropdown (break at 921px).
 */
export function MobileNav({ open, pathname, links, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>(
      "a, button",
    );
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      ref={panelRef}
      className={`rr-mobile-nav${open ? " is-open" : ""}`}
      hidden={!open}
      aria-hidden={!open}
    >
      <div className="rr-mobile-nav__inner">
        <nav
          className="rr-mobile-nav__nav"
          aria-labelledby={labelId}
        >
          <p id={labelId} className="sr-only">
            Mobile
          </p>
          <ul className="rr-mobile-nav__list">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rr-mobile-nav__link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="rr-mobile-nav__cta">
          <CtaButton
            href="/contact"
            variant="header"
            className="rr-mobile-nav__button"
            tabIndex={open ? undefined : -1}
            onClick={onClose}
          >
            Let&apos;s Talk
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
