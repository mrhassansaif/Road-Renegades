export function MapEmbed() {
  return (
    <section className="rr-surface rr-border-t">
      <div className="rr-container py-[var(--rr-section-md)]">
        <h2 className="mb-3 mt-0 uppercase tracking-[0.02em]">
          Find The Workshop
        </h2>
        <p className="rr-muted mb-8 max-w-2xl">
          Map placeholder — replace with your real workshop location embed when
          the address is confirmed. The original demo used a generic map widget.
        </p>
        <div className="relative flex aspect-[21/9] min-h-[280px] items-center justify-center overflow-hidden border border-[color:var(--rr-glass)] bg-[color:var(--rr-void)] px-6 text-center">
          <div>
            <p className="rr-eyebrow mb-3">Location Map</p>
            <p className="rr-muted m-0 max-w-md text-sm">
              Add a Google Maps or Mapbox embed here pointing to your workshop.
              Until then, use the contact details above to arrange a visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
