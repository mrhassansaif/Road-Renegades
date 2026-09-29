"use client";

import { useState } from "react";
import { CtaButton } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="rr-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Full name"
          className="rr-input"
        />
      </div>
      <div>
        <label htmlFor="email" className="rr-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rr-input"
        />
      </div>
      <div>
        <label htmlFor="message" className="rr-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Your message"
          className="rr-textarea resize-y"
        />
      </div>
      <CtaButton type="submit" variant="solid">
        Send Message
      </CtaButton>
      {status === "ok" ? (
        <p className="text-sm text-[color:var(--rr-accent)]" role="status">
          Message received — we&apos;ll get back to you soon.
        </p>
      ) : null}
    </form>
  );
}
