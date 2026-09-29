import { siteConfig } from "@/lib/data/site";
import { SocialLinks } from "@/components/navigation/SocialLinks";

type ContactBlockProps = {
  title?: string;
  description?: string;
  showHours?: boolean;
  showSocial?: boolean;
};

export function ContactBlock({
  title = "Get In Touch",
  description = "Tell us about your bike, your vision, or the service you need. The workshop is ready when you are.",
  showHours = true,
  showSocial = true,
}: ContactBlockProps) {
  return (
    <div className="rr-contact-block">
      <h2 className="m-0 uppercase tracking-[0.02em]">{title}</h2>
      <p className="rr-muted mt-4 mb-0">{description}</p>
      <p className="mt-4 mb-0 text-xs uppercase tracking-[2px] text-[color:var(--rr-accent)]">
        {siteConfig.contact.note}
      </p>

      <ul className="mt-8 mb-0 list-none space-y-0 p-0">
        <li className="rr-border-b py-4">
          <p className="rr-label mb-2">Address</p>
          <p className="m-0 text-[15px]">{siteConfig.contact.street}</p>
        </li>
        <li className="rr-border-b py-4">
          <p className="rr-label mb-2">Phone</p>
          <a
            href={siteConfig.contact.phoneHref}
            className="text-[15px] text-[color:var(--rr-white)] hover:text-accent"
          >
            {siteConfig.contact.phone}
          </a>
        </li>
        <li className="rr-border-b py-4">
          <p className="rr-label mb-2">Email</p>
          <a
            href={siteConfig.contact.emailHref}
            className="text-[15px] text-[color:var(--rr-white)] hover:text-accent"
          >
            {siteConfig.contact.email}
          </a>
        </li>
      </ul>

      {showHours ? (
        <div className="rr-border-b py-4">
          <p className="rr-label mb-3">Workshop Hours</p>
          <ul className="m-0 list-none space-y-2 p-0 text-[15px] text-[color:var(--rr-muted)]">
            {siteConfig.contact.hours.map((row) => (
              <li
                key={row.day}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <span>{row.day}</span>
                <span className="text-[color:var(--rr-white)]">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {showSocial ? (
        <div className="mt-8">
          <p className="rr-label mb-3">Social</p>
          <SocialLinks />
        </div>
      ) : null}
    </div>
  );
}
