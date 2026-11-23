"use client";

import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  Maximize,
  Minimize,
  PanelBottomClose,
  PanelBottomOpen,
  Pause,
  Play,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ACTIVE_SLIDE_COMPLETE,
  ACTIVE_SLIDE_ERROR,
  ACTIVE_SLIDE_LOADING,
  createModule,
  MODULE_PORTAL,
  useEvents,
  useLightboxState,
  type Plugin,
  type RenderSlideContainerProps,
} from "yet-another-react-lightbox";

/**
 * The viewer-only pieces of LightboxViewer. Everything here renders inside the
 * lightbox's portal, so it can read the lightbox state, and is styled by
 * lightbox.css under the `lb` class the viewer puts on that portal.
 */

/** The chrome fades out after this long without the pointer moving. */
const IDLE_MS = 2500;

/** How long each photograph holds in the slideshow. The ring reads the same
    constant, so the two cannot drift apart. */
export const SLIDESHOW_DELAY = 5000;

/** A media query as state. The viewer only renders on the client, so the
    server snapshot is never shown; it exists to satisfy the hook. */
export function useMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/* ----------------------------------------------------------------------------
   Ambient glow
   ------------------------------------------------------------------------- */

/**
 * The current photograph, blurred far past recognition, behind everything in
 * the viewer. It is a plugin rather than a render slot because the slots all
 * sit inside the image area, and the glow has to run under the filmstrip too.
 * Prepended to the portal, it paints first; `z-index: -1` keeps it under the
 * rest whatever they position.
 */
function AmbientLayer() {
  const { currentSlide } = useLightboxState();
  const src = currentSlide?.thumbnail;

  // The last two photographs, oldest first. The newest fades in over the one
  // before it, which is then dropped on the next change. Raised during render,
  // the pattern React documents for state derived from earlier renders.
  const [layers, setLayers] = useState<string[]>(src ? [src] : []);
  if (src && layers[layers.length - 1] !== src) setLayers([...layers.slice(-1), src]);

  return (
    <div aria-hidden className="lb-ambient">
      {layers.map((url) => (
        <div key={url} style={{ backgroundImage: `url("${url}")` }} />
      ))}
    </div>
  );
}

export const Ambient: Plugin = ({ addChild }) => {
  addChild(MODULE_PORTAL, createModule("ambient", AmbientLayer), true);
};

/* ----------------------------------------------------------------------------
   Header: position hairline and counter
   ------------------------------------------------------------------------- */

/**
 * Top-left of the image area. The counter keeps the `yarl__counter` class and
 * reads "21 / 39" as text, which e2e/journal.spec.ts asserts on. The carousel
 * already announces each slide through its own live region, so this stays
 * aria-hidden rather than announcing twice.
 *
 * No title beside it: the page the viewer opens from already names the watch.
 */
export function ViewerHeader({ idle }: { idle: boolean }) {
  const { currentIndex, slides } = useLightboxState();
  const head = useRef<HTMLDivElement>(null);
  useIdleChrome(head, idle);

  const total = slides.length;
  if (!total) return null;
  const n = currentIndex + 1;

  return (
    <>
      <div aria-hidden className="lb-progress">
        <span style={{ transform: `scaleX(${n / total})` }} />
      </div>
      <div ref={head} aria-hidden className="lb-head">
        <span className="yarl__counter num lb-count">
          {n} <span>/ {total}</span>
        </span>
      </div>
    </>
  );
}

/**
 * Fades the header, toolbar and arrows out after IDLE_MS without the pointer
 * moving, and hides the cursor with them, so the photograph has the screen.
 * Any movement, click, wheel or key brings them back.
 *
 * It stays awake while the pointer rests on a control, and never sleeps while
 * a keyboard user has focus on one. The flag is an attribute on the portal so
 * plain CSS can reach the library's own toolbar and arrows.
 */
function useIdleChrome(anchor: React.RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const portal = anchor.current?.closest<HTMLElement>(".yarl__portal");
    if (!portal || !enabled) return;

    let timer: number | undefined;
    const sleep = () => {
      if (portal.ownerDocument.activeElement?.matches(".yarl__button:focus-visible")) return;
      portal.setAttribute("data-idle", "");
    };
    const wake = (event?: Event) => {
      portal.removeAttribute("data-idle");
      window.clearTimeout(timer);
      const target = event?.target;
      if (
        target instanceof Element &&
        target.closest(".yarl__toolbar, .yarl__navigation_prev, .yarl__navigation_next")
      ) {
        return;
      }
      timer = window.setTimeout(sleep, IDLE_MS);
    };

    const events = ["pointermove", "pointerdown", "keydown", "wheel"] as const;
    events.forEach((type) => portal.addEventListener(type, wake, { passive: true }));
    wake();

    return () => {
      events.forEach((type) => portal.removeEventListener(type, wake));
      window.clearTimeout(timer);
      portal.removeAttribute("data-idle");
    };
  }, [anchor, enabled]);
}

/* ----------------------------------------------------------------------------
   Slideshow ring
   ------------------------------------------------------------------------- */

/**
 * The pause icon, with a ring that fills over the slideshow delay. It renders
 * only while the slideshow plays (the library swaps in the play icon
 * otherwise), so its existence is the "playing" state.
 *
 * It mirrors the plugin's scheduler: the timer restarts on every slide change
 * and again when the active photograph finishes loading, and is cancelled
 * while it loads. So the ring restarts on the same two signals and sits empty
 * in between.
 */
function SlideshowRing({ delay }: { delay: number }) {
  const { currentIndex } = useLightboxState();
  const { subscribe } = useEvents();
  const [cycle, setCycle] = useState(0);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const restart = () => {
      setWaiting(false);
      setCycle((c) => c + 1);
    };
    const off = [
      subscribe(ACTIVE_SLIDE_LOADING, () => setWaiting(true)),
      subscribe(ACTIVE_SLIDE_COMPLETE, restart),
      subscribe(ACTIVE_SLIDE_ERROR, restart),
    ];
    return () => off.forEach((unsubscribe) => unsubscribe());
  }, [subscribe]);

  return (
    <>
      <Pause aria-hidden strokeWidth={1.5} className="yarl__icon" />
      <svg aria-hidden viewBox="0 0 40 40" className="lb-ring">
        <circle cx="20" cy="20" r="19" pathLength={1} className="lb-ring-track" />
        {!waiting && (
          <circle
            key={`${currentIndex}-${cycle}`}
            cx="20"
            cy="20"
            r="19"
            pathLength={1}
            className="lb-ring-fill"
            style={{ animationDuration: `${delay}ms` }}
          />
        )}
      </svg>
    </>
  );
}

/* ----------------------------------------------------------------------------
   Slide frame: blur-up while the photograph loads
   ------------------------------------------------------------------------- */

/**
 * Layers the slide's 200px thumbnail, blurred, under the full photograph. The
 * filmstrip has usually fetched that file already, so the slide opens on a
 * soft version of itself instead of a spinner, and the photograph develops
 * over it. lightbox.css fades the blur out once the image stops loading.
 *
 * Both are fitted with `contain` inside the same box, so they line up.
 */
export function SlideFrame({ slide, children }: RenderSlideContainerProps) {
  return (
    <div className="lb-frame">
      {slide.thumbnail && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img aria-hidden alt="" src={slide.thumbnail} draggable={false} className="lb-blur" />
      )}
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Icons
   ------------------------------------------------------------------------- */

/** One family and one stroke weight with the rest of the site (lucide, 1.5).
    `yarl__icon` takes its size from the viewer's --yarl__icon_size. */
const icon = (Glyph: LucideIcon) =>
  function renderIcon() {
    return <Glyph aria-hidden strokeWidth={1.5} className="yarl__icon" />;
  };

export const viewerIcons = {
  iconPrev: icon(ChevronLeft),
  iconNext: icon(ChevronRight),
  iconClose: icon(X),
  iconZoomIn: icon(ZoomIn),
  iconZoomOut: icon(ZoomOut),
  iconSlideshowPlay: icon(Play),
  iconSlideshowPause: () => <SlideshowRing delay={SLIDESHOW_DELAY} />,
  iconEnterFullscreen: icon(Maximize),
  iconExitFullscreen: icon(Minimize),
  iconThumbnailsVisible: icon(PanelBottomClose),
  iconThumbnailsHidden: icon(PanelBottomOpen),
  // The blur-up stands in for the spinner.
  iconLoading: () => null,
  iconError: () => (
    <span className="lb-error">
      <ImageOff aria-hidden strokeWidth={1.5} />
      <span>Photo unavailable</span>
    </span>
  ),
};
