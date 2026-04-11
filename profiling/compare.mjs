import { readFileSync } from "fs";

// ── CLI args ──────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  let baseline = "";
  let current = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--baseline" && args[i + 1]) baseline = args[++i];
    if (args[i] === "--current" && args[i + 1]) current = args[++i];
  }

  if (!baseline || !current) {
    console.error("Usage: node compare.mjs --baseline <file.json> --current <file.json>");
    process.exit(1);
  }
  return { baseline, current };
}

// ── Helpers ───────────────────────────────────────────────────────────
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function pctChange(baseline, current) {
  if (baseline === 0) return current === 0 ? 0 : 100;
  return ((current - baseline) / baseline) * 100;
}

function colorize(pct, lowerIsBetter = true) {
  const sign = pct > 0 ? "+" : "";
  const formatted = `${sign}${pct.toFixed(1)}%`;
  // ANSI colors: green = improvement, red = regression
  if (lowerIsBetter) {
    if (pct < -2) return `\x1b[32m${formatted}\x1b[0m`; // green (improvement)
    if (pct > 2) return `\x1b[31m${formatted}\x1b[0m`; // red (regression)
  } else {
    if (pct > 2) return `\x1b[32m${formatted}\x1b[0m`;
    if (pct < -2) return `\x1b[31m${formatted}\x1b[0m`;
  }
  return `\x1b[33m${formatted}\x1b[0m`; // yellow (neutral)
}

// ── Main ──────────────────────────────────────────────────────────────
function main() {
  const { baseline: baselinePath, current: currentPath } = parseArgs();

  const baseline = JSON.parse(readFileSync(baselinePath, "utf-8"));
  const current = JSON.parse(readFileSync(currentPath, "utf-8"));

  console.log(`\n  MWatch Collection — Performance Comparison`);
  console.log(`  ─────────────────────────────────────────────`);
  console.log(`  Baseline: ${baseline.meta.label} (${baseline.meta.timestamp})`);
  console.log(`  Current:  ${current.meta.label} (${current.meta.timestamp})`);
  console.log(`  Baseline runs: ${baseline.meta.runs}  |  Current runs: ${current.meta.runs}\n`);

  const allPages = new Set([...Object.keys(baseline.pages), ...Object.keys(current.pages)]);

  for (const pagePath of allPages) {
    const base = baseline.pages[pagePath];
    const curr = current.pages[pagePath];

    if (!base || !curr) {
      console.log(`  ⚠  Page ${pagePath} only exists in ${base ? "baseline" : "current"}\n`);
      continue;
    }

    console.log(`  ┌──────────────────────────────────────────────────────────────────────`);
    console.log(`  │ ${base.name}`);
    console.log(`  │ ${pagePath}`);
    console.log(`  ├──────────────────────────────────────────────────────────────────────`);
    console.log(
      `  │ ${"Metric".padEnd(25)} ${"Baseline".padStart(10)} ${"Current".padStart(10)} ${"Change".padStart(12)}`,
    );
    console.log(`  │ ${"─".repeat(25)} ${"─".repeat(10)} ${"─".repeat(10)} ${"─".repeat(12)}`);

    // Timing metrics
    const timingMetrics = [
      { key: "ttfb", label: "TTFB (ms)" },
      { key: "fcp", label: "FCP (ms)" },
      { key: "lcp", label: "LCP (ms)" },
      { key: "domContentLoaded", label: "DOM Loaded (ms)" },
      { key: "loadEvent", label: "Load Event (ms)" },
      { key: "totalLoadTime", label: "Total Load (ms)" },
    ];

    for (const { key, label } of timingMetrics) {
      const bVal = base.timing?.[key]?.avg ?? 0;
      const cVal = curr.timing?.[key]?.avg ?? 0;
      const pct = pctChange(bVal, cVal);
      console.log(
        `  │ ${label.padEnd(25)} ${(bVal + "").padStart(10)} ${(cVal + "").padStart(10)} ${colorize(pct).padStart(23)}`,
      );
    }

    // Network metrics
    console.log(`  │`);

    const bReqs = base.network?.totalRequests?.avg ?? 0;
    const cReqs = curr.network?.totalRequests?.avg ?? 0;
    console.log(
      `  │ ${"Total Requests".padEnd(25)} ${(bReqs + "").padStart(10)} ${(cReqs + "").padStart(10)} ${colorize(pctChange(bReqs, cReqs)).padStart(23)}`,
    );

    const bSize = base.network?.totalTransferSize?.avg ?? 0;
    const cSize = curr.network?.totalTransferSize?.avg ?? 0;
    console.log(
      `  │ ${"Total Size".padEnd(25)} ${formatBytes(bSize).padStart(10)} ${formatBytes(cSize).padStart(10)} ${colorize(pctChange(bSize, cSize)).padStart(23)}`,
    );

    // Image metrics
    const bImgCount = base.images?.count ?? 0;
    const cImgCount = curr.images?.count ?? 0;
    const bImgSize = base.images?.totalSize ?? 0;
    const cImgSize = curr.images?.totalSize ?? 0;

    console.log(
      `  │ ${"Image Count".padEnd(25)} ${(bImgCount + "").padStart(10)} ${(cImgCount + "").padStart(10)} ${colorize(pctChange(bImgCount, cImgCount)).padStart(23)}`,
    );
    console.log(
      `  │ ${"Image Size".padEnd(25)} ${formatBytes(bImgSize).padStart(10)} ${formatBytes(cImgSize).padStart(10)} ${colorize(pctChange(bImgSize, cImgSize)).padStart(23)}`,
    );

    // Resource type breakdown
    const allTypes = new Set([
      ...Object.keys(base.network?.byType ?? {}),
      ...Object.keys(curr.network?.byType ?? {}),
    ]);
    if (allTypes.size > 0) {
      console.log(`  │`);
      console.log(`  │ Resource breakdown:`);
      for (const type of [...allTypes].sort()) {
        const bT = base.network?.byType?.[type] ?? { count: 0, size: 0 };
        const cT = curr.network?.byType?.[type] ?? { count: 0, size: 0 };
        const sizePct = pctChange(bT.size, cT.size);
        console.log(
          `  │   ${type.padEnd(15)} ${(bT.count + " / " + formatBytes(bT.size)).padStart(20)} → ${(cT.count + " / " + formatBytes(cT.size)).padStart(20)} ${colorize(sizePct).padStart(23)}`,
        );
      }
    }

    console.log(`  └──────────────────────────────────────────────────────────────────────\n`);
  }

  // Overall summary
  const baselinePages = Object.values(baseline.pages);
  const currentPages = Object.values(current.pages);

  const avgBaseLCP =
    baselinePages.reduce((s, p) => s + (p.timing?.lcp?.avg ?? 0), 0) / baselinePages.length;
  const avgCurrLCP =
    currentPages.reduce((s, p) => s + (p.timing?.lcp?.avg ?? 0), 0) / currentPages.length;
  const avgBaseLoad =
    baselinePages.reduce((s, p) => s + (p.timing?.totalLoadTime?.avg ?? 0), 0) /
    baselinePages.length;
  const avgCurrLoad =
    currentPages.reduce((s, p) => s + (p.timing?.totalLoadTime?.avg ?? 0), 0) / currentPages.length;
  const avgBaseSize =
    baselinePages.reduce((s, p) => s + (p.network?.totalTransferSize?.avg ?? 0), 0) /
    baselinePages.length;
  const avgCurrSize =
    currentPages.reduce((s, p) => s + (p.network?.totalTransferSize?.avg ?? 0), 0) /
    currentPages.length;

  console.log(`  ═══════════════════════════════════════════════════════════════════════`);
  console.log(`  OVERALL AVERAGES (across all pages)`);
  console.log(`  ═══════════════════════════════════════════════════════════════════════`);
  console.log(
    `    Avg LCP:       ${Math.round(avgBaseLCP)}ms → ${Math.round(avgCurrLCP)}ms  ${colorize(pctChange(avgBaseLCP, avgCurrLCP))}`,
  );
  console.log(
    `    Avg Load:      ${Math.round(avgBaseLoad)}ms → ${Math.round(avgCurrLoad)}ms  ${colorize(pctChange(avgBaseLoad, avgCurrLoad))}`,
  );
  console.log(
    `    Avg Page Size: ${formatBytes(avgBaseSize)} → ${formatBytes(avgCurrSize)}  ${colorize(pctChange(avgBaseSize, avgCurrSize))}`,
  );
  console.log(`  ═══════════════════════════════════════════════════════════════════════\n`);
}

main();
