import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  quote: string;
  image: string;
  role?: string;
};

export function TestimonialCard({
  name,
  quote,
  image,
  role,
}: TestimonialCardProps) {
  return (
    <article className="rr-testimonial-card">
      <div className="mb-6 flex items-center gap-4">
        <div className="rr-aspect-avatar relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <h3 className="rr-testimonial-card__name" style={{ margin: 0 }}>
            {name}
          </h3>
          {role ? <p className="rr-muted m-0 mt-1 text-xs">{role}</p> : null}
        </div>
      </div>
      <p className="rr-testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
    </article>
  );
}
