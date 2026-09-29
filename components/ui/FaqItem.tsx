"use client";

import { useId, useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="rr-faq">
      <button
        type="button"
        className="rr-faq__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <span className="rr-faq__icon" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <div id={panelId} className="rr-faq__panel" role="region">
          {answer}
        </div>
      ) : null}
    </div>
  );
}
