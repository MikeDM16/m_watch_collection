import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESULTS_DIR = join(__dirname, "results");

// ── Config ────────────────────────────────────────────────────────────
const DEFAULT_BASE_URL = "https://www.mwatchcollection.com";
const DEFAULT_RUNS = 5;

const PAGES = [
  // Home
  { name: "Home", path: "/" },
  // Brand pages (heavy → light)
  { name: "Brand — Tissot (67 models)", path: "/collection/Tissot" },
  { name: "Brand — Omega (29 models)", path: "/collection/Omega" },
  { name: "Brand — Tag Heuer (22 models)", path: "/collection/Tag Heuer" },
  { name: "Brand — Breitling", path: "/collection/Breitling" },
  { name: "Brand — Arauto (1 model)", path: "/collection/Arauto" },
  // Model detail pages (one per major brand)
  {
    name: "Model — Tissot Antimagnetic 27-2",
    path: "/collection/Tissot/Tissot Antimagnetic 27-2",
  },
  {
    name: "Model — Omega StayBrite Tank CK3416",
    path: "/collection/Omega/Omega StayBrite Tank CK3416",
  },
  {
    name: "Model — Tag Heuer Professional Chronograph",
    path: "/collection/Tag Heuer/Tag Heuer Professional 272.006-1 Chronograph",
  },
  {
    name: "Model — Breitling Sextant B55047",
    path: "/collection/Breitling/Breitling Sextant B55047",
  },
];

// ── CLI args ──────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  let baseUrl = DEFAULT_BASE_URL;
  let runs = DEFAULT_RUNS;
  let label = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--url" && args[i + 1]) baseUrl = args[++i];
    if (args[i] === "--runs" && args[i + 1]) runs = parseInt(args[++i], 10);
    if (args[i] === "--label" && args[i + 1]) label = args[++i];
  }
  return { baseUrl, runs, label };
}

// ── Helpers ───────────────────────────────────────────────────────────
function classifyResource(type, url) {
  if (type === "document") return "document";
  if (type === "stylesheet") return "stylesheet";
  if (type === "script") return "script";
  if (type === "font") return "font";
  if (type === "image" || /\.(jpg|jpeg|png|gif|webp|avif|svg|ico)(\?|$)/i.test(url)) return "image";
  if (type === "fetch" || type === "xhr") return "fetch";
  return "other";
}

function stats(arr) {
  if (arr.length === 0) return { avg: 0, min: 0, max: 0, p50: 0 };
  const sorted = [...arr].sort((a, b) => a - b);
  return {
    avg: Math.round(arr.reduce((s, v) => s + v, 0) / arr.length),
    min: Math.round(sorted[0]),
    max: Math.round(sorted[sorted.length - 1]),
    p50: Math.round(sorted[Math.floor(sorted.length / 2)]),
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// ── Profile a single page once ────────────────────────────────────────
async function profilePage(browser, url) {
  const context = await browser.newContext({
    // Fresh context = no cache, no cookies
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 MWatchProfiler/1.0",
  });

  const page = await context.newPage();
  const requests = [];

  // Intercept all responses to capture size + timing
  page.on("response", async (response) => {
    const request = response.request();
    const timing = response.request().timing();
    let size = 0;
    try {
      const body = await response.body();
      size = body.length;
    } catch {
      // Some responses (e.g., redirects) have no body
    }
    requests.push({
      url: request.url(),
      resourceType: classifyResource(request.resourceType(), request.url()),
      status: response.status(),
      size,
      startTime: timing.startTime,
      responseEnd: timing.responseEnd,
      duration: timing.responseEnd > 0 ? timing.responseEnd - timing.startTime : 0,
    });
  });

  const startTime = Date.now();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  const loadTime = Date.now() - startTime;

  // Extract Performance API metrics
  const perfMetrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    const paint = performance.getEntriesByType("paint");
    const fcp = paint.find((e) => e.name === "first-contentful-paint");

    // LCP requires PerformanceObserver — collect what's available
    let lcp = null;
    try {
      const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
      if (lcpEntries.length > 0) lcp = lcpEntries[lcpEntries.length - 1].startTime;
    } catch {
      // Not available in all contexts
    }

    return {
      ttfb: nav ? nav.responseStart - nav.requestStart : null,
      fcp: fcp ? fcp.startTime : null,
      lcp,
      domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : null,
      loadEvent: nav ? nav.loadEventEnd - nav.startTime : null,
      domInteractive: nav ? nav.domInteractive - nav.startTime : null,
      transferSize: nav ? nav.transferSize : null,
      encodedBodySize: nav ? nav.encodedBodySize : null,
      decodedBodySize: nav ? nav.decodedBodySize : null,
    };
  });

  // If LCP wasn't available via getEntriesByType, try PerformanceObserver
  if (perfMetrics.lcp === null) {
    const lcpValue = await page.evaluate(() => {
      return new Promise((resolve) => {
        let lcpVal = null;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) lcpVal = entries[entries.length - 1].startTime;
        });
        try {
          observer.observe({ type: "largest-contentful-paint", buffered: true });
        } catch {
          resolve(null);
          return;
        }
        // Give it a moment to collect buffered entries
        setTimeout(() => {
          observer.disconnect();
          resolve(lcpVal);
        }, 200);
      });
    });
    perfMetrics.lcp = lcpValue;
  }

  await context.close();

  return {
    loadTime,
    perfMetrics,
    requests,
  };
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  const { baseUrl, runs, label } = parseArgs();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const labelSlug = label || "profile";

  console.log(`\n  MWatch Collection — Performance Profiler`);
  console.log(`  ─────────────────────────────────────────`);
  console.log(`  URL:   ${baseUrl}`);
  console.log(`  Runs:  ${runs}`);
  console.log(`  Pages: ${PAGES.length}`);
  console.log(`  Label: ${labelSlug}\n`);

  mkdirSync(RESULTS_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = {};

  for (const pageConfig of PAGES) {
    const fullUrl = `${baseUrl}${pageConfig.path}`;
    console.log(`  Profiling: ${pageConfig.name}`);
    console.log(`  URL: ${fullUrl}`);

    const runResults = [];
    for (let i = 0; i < runs; i++) {
      process.stdout.write(`    Run ${i + 1}/${runs}...`);
      const result = await profilePage(browser, fullUrl);
      runResults.push(result);
      console.log(` done (${result.loadTime}ms, ${result.requests.length} requests)`);
    }

    // Aggregate across runs — exclude Run 1 (cold start) from warm stats
    const warmRuns = runResults.slice(1);
    const timings = {
      ttfb: stats(warmRuns.map((r) => r.perfMetrics.ttfb).filter(Boolean)),
      fcp: stats(warmRuns.map((r) => r.perfMetrics.fcp).filter(Boolean)),
      lcp: stats(warmRuns.map((r) => r.perfMetrics.lcp).filter(Boolean)),
      domContentLoaded: stats(warmRuns.map((r) => r.perfMetrics.domContentLoaded).filter(Boolean)),
      loadEvent: stats(warmRuns.map((r) => r.perfMetrics.loadEvent).filter(Boolean)),
      domInteractive: stats(warmRuns.map((r) => r.perfMetrics.domInteractive).filter(Boolean)),
      totalLoadTime: stats(warmRuns.map((r) => r.loadTime)),
    };

    // Cold start metrics (Run 1 only)
    const coldStart = {
      fcp: runResults[0].perfMetrics.fcp,
      lcp: runResults[0].perfMetrics.lcp,
      loadTime: runResults[0].loadTime,
    };

    // Aggregate network metrics from last run (representative)
    const lastRun = runResults[runResults.length - 1];
    const byType = {};
    for (const req of lastRun.requests) {
      if (!byType[req.resourceType]) byType[req.resourceType] = { count: 0, size: 0 };
      byType[req.resourceType].count++;
      byType[req.resourceType].size += req.size;
    }

    const images = lastRun.requests
      .filter((r) => r.resourceType === "image")
      .map((r) => ({ url: r.url, size: r.size, duration: r.duration }))
      .sort((a, b) => b.size - a.size);

    const networkAgg = {
      totalRequests: stats(warmRuns.map((r) => r.requests.length)),
      totalTransferSize: stats(warmRuns.map((r) => r.requests.reduce((s, req) => s + req.size, 0))),
      byType,
    };

    results[pageConfig.path] = {
      name: pageConfig.name,
      url: fullUrl,
      timing: timings,
      coldStart,
      network: networkAgg,
      images,
      rawRuns: runResults.map((r) => ({
        loadTime: r.loadTime,
        perfMetrics: r.perfMetrics,
        requestCount: r.requests.length,
        totalSize: r.requests.reduce((s, req) => s + req.size, 0),
      })),
    };

    // Print per-page summary
    console.log(`    ┌─────────────────────────────────────────`);
    console.log(
      `    │ Cold start: FCP=${coldStart.fcp}ms  LCP=${coldStart.lcp}ms  Load=${coldStart.loadTime}ms`,
    );
    console.log(
      `    │ Warm avg:   FCP=${timings.fcp.avg}ms  LCP=${timings.lcp.avg}ms  Load=${timings.totalLoadTime.avg}ms`,
    );
    console.log(
      `    │ Requests: ${networkAgg.totalRequests.avg}  Size: ${formatBytes(networkAgg.totalTransferSize.avg)}`,
    );
    console.log(
      `    │ Images: ${images.length} files, ${formatBytes(images.reduce((s, i) => s + i.size, 0))}`,
    );
    console.log(`    └─────────────────────────────────────────\n`);
  }

  await browser.close();

  // Build output
  const output = {
    meta: {
      url: baseUrl,
      timestamp: new Date().toISOString(),
      runs,
      label: labelSlug,
      userAgent: "MWatchProfiler/1.0 (Playwright/Chromium)",
    },
    pages: results,
  };

  // Save files
  const rawPath = join(RESULTS_DIR, `${timestamp}_${labelSlug}_raw.json`);
  const summaryPath = join(RESULTS_DIR, `${timestamp}_${labelSlug}_summary.json`);

  // Summary = same structure but without rawRuns and individual image URLs
  const summary = JSON.parse(JSON.stringify(output));
  for (const page of Object.values(summary.pages)) {
    delete page.rawRuns;
    page.images = {
      count: page.images.length,
      totalSize: page.images.reduce((s, i) => s + i.size, 0),
      top5: page.images.slice(0, 5),
    };
  }

  writeFileSync(rawPath, JSON.stringify(output, null, 2));
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  console.log(`\n  Results saved:`);
  console.log(`    Raw:     ${rawPath}`);
  console.log(`    Summary: ${summaryPath}`);

  // Final summary table — warm runs (excludes cold start Run 1)
  console.log(`\n  ═══════════════════════════════════════════════════════════════════════`);
  console.log(`  SUMMARY (warm runs only — Run 1 cold start excluded)`);
  console.log(`  ═══════════════════════════════════════════════════════════════════════`);
  console.log(
    `  ${"Page".padEnd(40)} ${"FCP".padStart(8)} ${"LCP".padStart(8)} ${"Load".padStart(8)} ${"Reqs".padStart(6)} ${"Size".padStart(10)} ${"ColdFCP".padStart(10)}`,
  );
  console.log(
    `  ${"─".repeat(40)} ${"─".repeat(8)} ${"─".repeat(8)} ${"─".repeat(8)} ${"─".repeat(6)} ${"─".repeat(10)} ${"─".repeat(10)}`,
  );
  for (const [path, data] of Object.entries(results)) {
    console.log(
      `  ${data.name.padEnd(40)} ${(data.timing.fcp.avg + "ms").padStart(8)} ${(data.timing.lcp.avg + "ms").padStart(8)} ${(data.timing.totalLoadTime.avg + "ms").padStart(8)} ${String(data.network.totalRequests.avg).padStart(6)} ${formatBytes(data.network.totalTransferSize.avg).padStart(10)} ${(data.coldStart.fcp + "ms").padStart(10)}`,
    );
  }
  console.log(`  ═══════════════════════════════════════════════════════════════════════\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
