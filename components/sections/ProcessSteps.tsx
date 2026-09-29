type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: readonly ProcessStep[];
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="rr-section rr-surface rr-border-y">
      <div className="rr-container">
        <div className="mb-12 max-w-[720px]">
          {eyebrow ? <p className="rr-eyebrow mb-3">{eyebrow}</p> : null}
          <h2 className="m-0 uppercase tracking-[0.02em]">{title}</h2>
          {description ? (
            <p className="rr-muted mt-4 mb-0">{description}</p>
          ) : null}
        </div>
        <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="border border-[color:var(--rr-glass)] bg-[color:var(--rr-void)] p-6"
            >
              <p className="rr-eyebrow mb-4 text-[color:var(--rr-accent)]">
                {item.step}
              </p>
              <h3 className="m-0 text-[22px] uppercase tracking-[0.02em]">
                {item.title}
              </h3>
              <p className="rr-muted mt-3 mb-0 text-sm leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
