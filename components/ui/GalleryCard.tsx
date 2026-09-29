import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
  title: string;
  image: string;
  subtitle?: string;
  category?: string;
  href?: string;
};

/**
 * Work / gallery tile — image-led with title + subtitle overlay,
 * matching original Elementor image-box cards.
 */
export function GalleryCard({
  title,
  image,
  subtitle,
  category,
  href = "/gallery",
}: GalleryCardProps) {
  const meta = subtitle || category;

  return (
    <article className="rr-gallery-card">
      <Link href={href} className="rr-gallery-card__link">
        <div className="rr-card-media rr-aspect-gallery">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="rr-gallery-card__shade" aria-hidden />
          <div className="rr-gallery-card__caption">
            <h3 className="rr-gallery-card__title">{title}</h3>
            {meta ? <p className="rr-gallery-card__meta">{meta}</p> : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
