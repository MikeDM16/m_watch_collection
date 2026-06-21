// Sub-series grouping for brand collections.
//
// A `*BrandSeries.tsx` file normally maps a key to a flat display string. When several series
// belong to one umbrella (e.g. Breitling's Chronomat lines), wrap them with `seriesGroup` so the
// stored value carries both levels: "<group> — <sub label>". The grouping service later splits it
// back apart with `parseSeries`. The separator is display-safe, so the raw value can still be shown
// verbatim on the watch detail page / PDF.

// Reserved separator (spaced em-dash). Never type this literally inside a series label.
export const SERIES_GROUP_SEPARATOR = " — ";

// Compose a group: each sub value becomes "<group> — <sub>", or just "<group>" when the sub label
// is empty (the "base" members of the group, rendered directly under the umbrella title).
export function seriesGroup<T extends Record<string, string>>(
  group: string,
  subs: T,
): { [K in keyof T]: string } {
  const out = {} as { [K in keyof T]: string };
  for (const key in subs) {
    const sub = subs[key];
    out[key] = sub ? `${group}${SERIES_GROUP_SEPARATOR}${sub}` : group;
  }
  return out;
}

// Split a stored series string back into { group, label }. A value with no separator is a flat
// series (its whole text is the group; label is "").
export function parseSeries(value: string): { group: string; label: string } {
  const i = value.indexOf(SERIES_GROUP_SEPARATOR);
  return i === -1
    ? { group: value, label: "" }
    : { group: value.slice(0, i), label: value.slice(i + SERIES_GROUP_SEPARATOR.length) };
}
