import Image from "next/image";

/**
 * One specification group as a definition list, not a table.
 *
 * Field completeness contract: rows are driven from the mapping record so a
 * field cannot be dropped by omission, then any data key the mapping does not
 * cover is appended. All 32 spec fields are present on all 322 model files, so
 * in practice every row renders; the guard exists so that stays true.
 *
 * No rule between rows. One hairline above the block. A 9-row Case block reads
 * as a single group rather than a nine-line hairline table.
 */
export default function SpecBlock({
  title,
  values,
  labels,
  image,
  imageAlt = "",
}: {
  title: string;
  values: Record<string, string | undefined>;
  labels: Record<string, string>;
  image?: string;
  imageAlt?: string;
}) {
  const mapped = Object.keys(labels);
  const extra = Object.keys(values).filter((k) => !mapped.includes(k));
  const keys = [...mapped, ...extra].filter((k) => {
    const v = values[k];
    return v !== undefined && v !== null && String(v).trim() !== "";
  });

  if (!keys.length) return null;

  return (
    <section className="border-t border-border pt-6">
      <h3 className="font-display text-lg font-medium tracking-tight">{title}</h3>

      <div className={image ? "mt-4 grid gap-6 sm:grid-cols-[1fr_auto]" : "mt-4"}>
        <dl className="grid gap-2">
          {keys.map((key) => (
            <div key={key} className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
              <dt className="lab min-w-[9.5rem] flex-none">{labels[key] ?? key}</dt>
              <dd className="num text-spec">{values[key]}</dd>
            </div>
          ))}
        </dl>

        {/* unoptimized: see the note on getExternalResource in commonFunctions.tsx.
            Vercel's /_next/image endpoint 402s every cache MISS while the
            account is over its monthly transformation quota, and these 34
            local JPGs are small decorative assets already — not worth routing
            through an optimiser that might be unavailable at any given time. */}
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            width={220}
            height={220}
            unoptimized
            loading="lazy"
            className="hidden h-auto w-[140px] self-start object-contain opacity-80 sm:block"
          />
        )}
      </div>
    </section>
  );
}
