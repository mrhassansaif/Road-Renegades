"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/data/about";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useCountUp(target: number, active: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="text-center">
      <p className="rr-display m-0 text-[48px] font-bold leading-none text-[color:var(--rr-accent)] md:text-[56px]">
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className="rr-eyebrow mt-3 mb-0 text-[color:var(--rr-muted)]">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsCounters({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="rr-surface rr-border-y py-[var(--rr-section-md)]"
      aria-label="Workshop highlights"
    >
      <div className="rr-container grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
