/**
 * Justified photo rows, decided when the page is built.
 *
 * Journal photographs keep their own proportions, so a row of them only lines
 * up if every photo in it shares one height. This picks where the rows break:
 * of every way to cut the sequence into rows of at most `maxPerRow`, the one
 * whose row heights at `width` stay closest to `target` (least squares, which
 * is what stops one tall leftover row at the end). Each row then renders as a
 * flex row whose items grow in proportion to their aspect ratio, so it fills
 * the width exactly at any viewport and only its height changes.
 *
 * Order is never changed: the photographs stay in the sequence they were taken.
 */
export const DESKTOP = { width: 1328, target: 330 };
export const PHONE = { width: 358, target: 240 };

export function justify<T extends { w: number; h: number }>(
  photos: T[],
  { width, target }: { width: number; target: number },
  gap = 8,
  maxPerRow = 6,
): T[][] {
  const best: number[] = [0];
  const cut: number[] = [0];

  for (let end = 1; end <= photos.length; end++) {
    best[end] = Infinity;
    let ratio = 0;
    for (let start = end - 1; start >= 0 && end - start <= maxPerRow; start--) {
      ratio += photos[start].w / photos[start].h;
      const height = (width - gap * (end - start - 1)) / ratio;
      const cost = best[start] + (height - target) ** 2;
      if (cost < best[end]) {
        best[end] = cost;
        cut[end] = start;
      }
    }
  }

  const rows: T[][] = [];
  for (let end = photos.length; end > 0; end = cut[end]) rows.unshift(photos.slice(cut[end], end));
  return rows;
}
