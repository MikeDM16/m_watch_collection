/**
 * bookmarklet.ts — turn export-snippet.js into a bookmark you click on chrono24.pt.
 *
 * Writes `.chrono24/bookmarklet.html`: open it in Chrome and drag its link to
 * the bookmarks bar. The bookmark is the snippet itself, so re-run this after
 * editing the snippet and replace the bookmark.
 *
 * Usage:
 *   npm run chrono24:bookmarklet
 */

import fs from "fs";
import path from "path";

import { BOOKMARKLET_HTML, ensureDir, WORK_DIR } from "./_shared";

const code = fs.readFileSync(path.join(__dirname, "export-snippet.js"), "utf-8");
const href = `javascript:${encodeURIComponent(code)}`;

ensureDir(WORK_DIR);
fs.writeFileSync(
  BOOKMARKLET_HTML,
  `<!doctype html>
<meta charset="utf-8">
<title>Chrono24 export bookmarklet</title>
<body style="font:16px system-ui;max-width:640px;margin:60px auto;line-height:1.5">
<h1 style="font-size:22px">Chrono24 collection export</h1>
<p>Drag this link to your bookmarks bar:</p>
<p><a href="${href.replace(/"/g, "&quot;")}" style="display:inline-block;padding:10px 16px;background:#c40d2e;color:#fff;border-radius:6px;text-decoration:none;font-weight:600">Chrono24 export</a></p>
<p>Then, on <b>chrono24.pt</b> with you logged in, click the bookmark. It downloads
<code>chrono24-collection-&lt;date&gt;.json</code>; run <code>npm run chrono24:sync</code> next.</p>
<p style="color:#666">If clicking it does nothing, paste <code>scripts/chrono24/export-snippet.js</code>
into DevTools → Console on chrono24.pt instead.</p>
</body>
`,
);
console.log(`Written ${BOOKMARKLET_HTML}`);
console.log("Open it in Chrome and drag the link to your bookmarks bar.");
