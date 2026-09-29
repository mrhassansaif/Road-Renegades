"use client";

import { useState } from "react";
import { CtaButton } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("ok");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="rr-newsletter">
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="rr-input"
        autoComplete="email"
      />
      <CtaButton type="submit" variant="outline">
        Subscribe
      </CtaButton>
      {status === "ok" ? (
        <p className="rr-newsletter__status" role="status">
          Thanks — you&apos;re on the list.
        </p>
      ) : null}
    </form>
  );
}
