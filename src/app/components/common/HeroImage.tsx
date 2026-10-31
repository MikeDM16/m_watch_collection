"use client";

/**
 * The hero band's photograph, as an <img> at high priority rather than a CSS
 * background: the band is the page's largest paint, and the browser's preload
 * scanner finds an <img> in the HTML, but a background only once the band is
 * laid out, which on a Journal entry is after the whole page has streamed in.
 *
 * A client component for one reason. React writes a preload hint into a
 * route's RSC data for every eager <img> a server component renders (and for
 * ReactDOM.preload), and a Link prefetching the route fires it, so every page
 * downloaded the heroes of the pages it links to: /, /journal, the brand page.
 * Rendered here, the <img> is in the HTML, where it belongs, and the RSC data
 * carries only its props.
 */
export default function HeroImage({ src }: { src: string }) {
  return (
    // z-0 puts it under the band's scrim, against .band > *'s z-index 1.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 z-0 h-full w-full object-cover object-center"
    />
  );
}
