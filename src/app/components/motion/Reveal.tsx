"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reveal without an animation library.
 *
 * The home page ships zero motion JS today. Reaching for motion's whileInView
 * would pull 35-45KB gz into it, which is real money against a 442ms LCP. This
 * is an IntersectionObserver plus a CSS transition, and the stagger comes from
 * a capped transition-delay so there is no per-card JS at all.
 */
export default function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      // Cap the index so a 72-item Tissot grid does not take three seconds.
      style={{ "--reveal-delay": `${Math.min(index, 12) * 40}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
