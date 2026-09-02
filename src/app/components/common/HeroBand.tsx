import { getExternalResource } from "@/app/services/commonFunctions";
import Link from "next/link";

/**
 * The full-bleed photograph band with a directional scrim. The one photo
 * primitive kept from the old design, now used on the home hero and the brand
 * header only rather than above every section.
 *
 * The scrim is dark in both themes because it sits on photography, not on a
 * themed surface.
 */
export default function HeroBand({
  image,
  eyebrow,
  title,
  subtitle,
  meta,
  cta,
  size = "page",
  titleHref,
}: {
  image: string;
  eyebrow?: React.ReactNode;
  title: string;
  subtitle?: string;
  meta?: React.ReactNode;
  cta?: { href: string; label: string };
  size?: "home" | "page";
  titleHref?: string;
}) {
  const heading = (
    <h1
      className={`text-white ${
        size === "home" ? "text-display-xl" : "text-display-l"
      } font-display font-medium uppercase [font-variation-settings:'wdth'_112]`}
      style={{ textWrap: "balance" }}
    >
      {title}
    </h1>
  );

  return (
    <header
      data-hero-band
      className={`band bg-cover bg-center ${size === "home" ? "min-h-[78dvh]" : "min-h-[46dvh]"}`}
      style={{ backgroundImage: `url(${getExternalResource(image)})` }}
    >
      <div className="mx-auto w-full max-w-shell px-[clamp(1rem,4vw,3.5rem)] pb-[clamp(2.5rem,6vw,5rem)] pt-24">
        {eyebrow && <div className="mb-4">{eyebrow}</div>}

        {titleHref ? (
          <Link href={titleHref} className="no-underline">
            {heading}
          </Link>
        ) : (
          heading
        )}

        {subtitle && (
          <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-scrim-foreground">
            {subtitle}
          </p>
        )}

        {meta && <div className="mt-5">{meta}</div>}

        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded-sm bg-white px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#16161a] no-underline transition-opacity hover:opacity-90"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </header>
  );
}
