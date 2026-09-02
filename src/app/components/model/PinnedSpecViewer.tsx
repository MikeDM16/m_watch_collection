"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { gsap, ScrollTrigger } from "../motion/gsap";

export interface PinnedFrame {
  /** Section key, matched against the `data-frame` attribute of each child. */
  key: string;
  /** Caption shown under the pinned image. */
  label: string;
  /** One or more photographs. Sections with several cycle through them as
      that section scrolls past, which is how the movement block shows all of
      its images rather than only the first. */
  images: { src: string; alt: string }[];
}

/**
 * The photograph on the left advances as the specification on the right
 * scrolls past.
 *
 * It does not claim that a given frame shows the case rather than the dial:
 * nothing in the data records that. It walks the watch's own photographs in
 * order while you read, and swaps to genuinely matching images where they do
 * exist, at the movement and the auction sheet.
 *
 * Below lg, or under reduced motion, the pin never engages and this is a plain
 * single column showing the first frame.
 */
export default function PinnedSpecViewer({
  frames,
  children,
}: {
  frames: PinnedFrame[];
  children: React.ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const first = frames[0]?.key ?? "";
  const [active, setActive] = useState({ key: first, index: 0 });

  const all = useMemo(
    () => frames.flatMap((f) => f.images.map((img, i) => ({ ...img, key: f.key, index: i }))),
    [frames],
  );

  // Frames mount on demand rather than all at once. They are absolutely
  // positioned inside a visible box, so `loading="lazy"` would not hold them
  // back and every photograph would be fetched on first paint. Mounting a
  // frame one step before it is needed keeps the cross-fade instant while the
  // page still starts with a single image.
  //
  // What is wanted at any moment is always a *prefix* of `all` — everything up
  // to the active frame, plus the next one — so "mounted so far" is a single
  // high-water mark rather than a set accumulated in an effect. Raising it
  // during render is the pattern React documents for state derived from
  // earlier renders; it re-renders immediately, before any paint.
  const at = all.findIndex((i) => i.key === active.key && i.index === active.index);
  const reach = Math.max(1, at + 2);
  const [mountedCount, setMountedCount] = useState(1);
  if (reach > mountedCount) setMountedCount(reach);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-frame]"));
    if (!sections.length) return;

    const byKey = new Map(frames.map((f) => [f.key, f]));
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const stage = el.querySelector<HTMLElement>("[data-pin-stage]");
      const column = el.querySelector<HTMLElement>("[data-pin-column]");
      if (!stage || !column) return;

      const pin = ScrollTrigger.create({
        trigger: el,
        start: "top top+=88",
        end: () => `+=${Math.max(0, column.offsetHeight - stage.offsetHeight)}`,
        pin: stage,
        pinSpacing: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      // One trigger per section. `progress` gives us both which section is in
      // view and how far through it we are, so a multi-image section can step
      // through its own photographs.
      const steps = sections.map((section) => {
        const key = section.dataset.frame ?? "";
        const count = byKey.get(key)?.images.length ?? 1;

        return ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(count - 1, Math.floor(self.progress * count));
            setActive((prev) => (prev.key === key && prev.index === index ? prev : { key, index }));
          },
          onEnter: () => setActive({ key, index: 0 }),
          onEnterBack: () => setActive({ key, index: Math.max(0, count - 1) }),
        });
      });

      return () => {
        pin.kill();
        steps.forEach((s) => s.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, [frames]);

  const current = byKeyLabel(frames, active.key);

  return (
    <div ref={wrap} className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div data-pin-stage className="lg:h-fit">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {all.slice(0, mountedCount).map((img) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={`${img.key}-${img.index}`}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 size-full object-contain p-4 transition-opacity duration-500 ${
                img.key === active.key && img.index === active.index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <p className="lab mt-3">{current}</p>
      </div>

      <div data-pin-column className="grid gap-10">
        {children}
      </div>
    </div>
  );
}

function byKeyLabel(frames: PinnedFrame[], key: string) {
  return frames.find((f) => f.key === key)?.label ?? frames[0]?.label ?? "";
}
