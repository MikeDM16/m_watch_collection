"use client";

import { useEffect, useRef } from "react";

/**
 * A horizontal scroll-snap rail that borrows the wheel without trapping you.
 *
 * This deliberately does NOT pin the section. A pinned pan consumes every
 * vertical wheel event while it holds, so you cannot reach the rest of the page
 * without first panning the whole track. Instead:
 *
 *   - the page scrolls normally at all times;
 *   - a vertical wheel over the rail pans it horizontally, but only while the
 *     rail still has somewhere to go in that direction;
 *   - at either end, or for a horizontal gesture, the event passes straight
 *     through and the page scrolls.
 *
 * React registers `onWheel` as passive, so `preventDefault` there is a no-op.
 * The listener has to be attached manually with `{ passive: false }`.
 */
export default function HorizontalRail({ children }: { children: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    let restore: ReturnType<typeof setTimeout> | undefined;

    /** deltaY is only in pixels when deltaMode is PIXEL. Firefox and several
        mice report LINE, where deltaY is about 3, which would be invisible. */
    const pixels = (e: WheelEvent) => {
      if (e.deltaMode === 1) return e.deltaY * 16; // DOM_DELTA_LINE
      if (e.deltaMode === 2) return e.deltaY * el.clientHeight; // DOM_DELTA_PAGE
      return e.deltaY;
    };

    const onWheel = (e: WheelEvent) => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 1) return;

      // A real horizontal gesture (trackpad swipe) already scrolls the rail.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      // Hand the page back its scroll at both ends, so the rail is a detour
      // rather than a gate.
      const atStart = e.deltaY < 0 && el.scrollLeft <= 0;
      const atEnd = e.deltaY > 0 && el.scrollLeft >= max - 1;
      if (atStart || atEnd) return;

      e.preventDefault();

      // Mandatory snapping re-snaps after every scroll, including a
      // programmatic one. Snap points sit 296px apart and a wheel tick is
      // 40-120px, so without this the rail is pulled straight back to where it
      // started and never moves. Suppressed only for the duration of the wheel
      // gesture, so dragging and touch keep snapping.
      el.style.scrollSnapType = "none";
      clearTimeout(restore);
      restore = setTimeout(() => {
        el.style.scrollSnapType = "";
      }, 140);

      el.scrollLeft = Math.max(0, Math.min(max, el.scrollLeft + pixels(e)));
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      clearTimeout(restore);
      el.style.scrollSnapType = "";
    };
  }, []);

  return (
    <div
      ref={track}
      tabIndex={0}
      aria-label="Special timepieces, scrollable"
      className="flex snap-x snap-mandatory overflow-x-auto pl-[clamp(1rem,4vw,3.5rem)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}
