import Link from "next/link";

export type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  links: readonly NavLink[];
  pathname: string;
};

/**
 * Desktop primary navigation (≥922px).
 * Soft white default, solid white active, lime hover — Astra transparent-header rules.
 */
export function Navigation({ links, pathname }: NavigationProps) {
  return (
    <nav className="rr-nav" aria-label="Primary">
      <ul className="rr-nav__list">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href} className="rr-nav__item">
              <Link
                href={link.href}
                className={`rr-nav__link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
