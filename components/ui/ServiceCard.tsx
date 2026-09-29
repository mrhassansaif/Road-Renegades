import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  href: string;
  title: string;
  summary: string;
  image: string;
};

export function ServiceCard({ href, title, summary, image }: ServiceCardProps) {
  return (
    <Link href={href} className="rr-service-card group">
      <div className="rr-card-media rr-aspect-service">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="rr-service-card__body">
        <h3 className="rr-service-card__title">{title}</h3>
        <p className="rr-service-card__text">{summary}</p>
      </div>
    </Link>
  );
}
