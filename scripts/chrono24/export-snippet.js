/*
 * export-snippet.js — run it in your own Chrome tab, on chrono24.pt, logged in.
 *
 * It reads your Watch Collection through the same API the site's own pages use
 * (the owned list, the overview with its value chart, then each watch's page
 * data) and downloads it all as one file, chrono24-collection-<date>.json.
 * It sends nothing anywhere else. Then: npm run chrono24:sync
 *
 * Two ways to run it:
 *   - the bookmarklet: npm run chrono24:bookmarklet, open the page it writes,
 *     drag the link to the bookmarks bar, click it on chrono24.pt;
 *   - or paste this whole file into DevTools → Console on chrono24.pt (Chrome
 *     asks you to type "allow pasting" the first time).
 *
 * The API calls send the CSRF token and locale headers the site's own calls
 * send, when the page exposes them; read-only GETs normally pass without.
 */
(async () => {
  const API = "/api/watch-collection/";
  if (!/(^|\.)chrono24\.[a-z.]+$/.test(location.hostname)) {
    alert("Open chrono24.pt, logged in, and run this there.");
    return;
  }

  const box = document.createElement("div");
  box.style.cssText =
    "position:fixed;z-index:2147483647;right:16px;bottom:16px;padding:12px 16px;" +
    "background:#111;color:#fff;font:14px system-ui;border-radius:8px;box-shadow:0 4px 16px #0006";
  document.body.appendChild(box);
  const say = (text) => {
    box.textContent = text;
    console.log("[chrono24 export]", text);
  };

  /* The token the site's own API calls carry, wherever this page keeps it. */
  const findToken = () => {
    const meta = document.querySelector('meta[name*="csrf" i], meta[name="_csrf"]');
    if (meta && meta.content) return meta.content;
    for (const c of document.cookie.split("; ")) {
      const [k, ...v] = c.split("=");
      if (/csrf|xsrf/i.test(k)) return decodeURIComponent(v.join("="));
    }
    for (const s of document.querySelectorAll("script:not([src])")) {
      const m = (s.textContent || "").match(/csrf[\w-]*["']?\s*[:=]\s*["']([\w\-+/=.]{16,})["']/i);
      if (m) return m[1];
    }
    return null;
  };

  const headers = { accept: "application/json" };
  const token = findToken();
  if (token) headers["x-csrf-token"] = token;
  const lang = (document.documentElement.lang || "pt-PT").replace("-", "_");
  headers["x-vite-locale"] = lang;

  const get = async (path) => {
    const res = await fetch(API + path, { credentials: "same-origin", headers });
    if (!res.ok) throw new Error(`${path} → HTTP ${res.status}`);
    return res.json();
  };
  const pause = () => new Promise((r) => setTimeout(r, 500 + Math.random() * 700));

  try {
    say("Reading your collection…");
    const items = await get("get-items.json?category=Owns");
    const overview = await get("get-overview.json");
    const list = items.items || [];
    const details = {};
    for (let i = 0; i < list.length; i++) {
      const id = list[i].watchCollectionItemId;
      say(`Watch ${i + 1} of ${list.length}: ${list[i].name}`);
      await pause();
      details[id] = await get(`get-item.json?watchCollectionItemId=${id}`);
    }

    const out = {
      kind: "chrono24-watch-collection",
      version: 1,
      exportedAt: new Date().toISOString(),
      origin: location.origin,
      locale: lang,
      items,
      overview,
      details,
    };
    const day = out.exportedAt.slice(0, 10);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(out)], { type: "application/json" }));
    a.download = `chrono24-collection-${day}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    say(
      `Done: ${list.length} watches saved to chrono24-collection-${day}.json. Now: npm run chrono24:sync`,
    );
    setTimeout(() => box.remove(), 12000);
  } catch (err) {
    say(`Export failed: ${err.message}. Are you logged in? Details in the console.`);
    console.error(err);
  }
})();
