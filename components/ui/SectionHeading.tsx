type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-[720px] ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <p className="rr-eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="m-0">{title}</Tag>
      {description ? (
        <p className="rr-muted mt-4 mb-0 text-base leading-[1.6] md:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
