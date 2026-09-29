type PageHeroProps = {
  title: string;
  description?: string;
};

/**
 * Inner-page title band — matches scraped Elementor page heroes:
 * large left title + short lime accent rule + right-side intro copy.
 */
export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="rr-page-hero">
      <div className="rr-container">
        <div
          className={`rr-page-hero__grid${description ? "" : " rr-page-hero__grid--solo"}`}
        >
          <div className="rr-page-hero__title-wrap">
            <h1 className="rr-page-hero__title">{title}</h1>
            <span className="rr-page-hero__rule" aria-hidden />
          </div>
          {description ? (
            <p className="rr-page-hero__desc">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
