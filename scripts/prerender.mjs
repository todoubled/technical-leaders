// Static prerender (SSG) for EVERY real page route.
//
// Runs at the end of `npm run build`, after both the client build (dist/) and the
// SSR build (dist-ssr/entry-server.js). For each route it server-renders the app,
// injects the collected <head> tags and the rendered body into the built
// index.html template, and writes a static HTML file. Crawlers and users receive
// fully-rendered HTML with the correct per-page title, meta, OG/Twitter tags, and
// JSON-LD — no JavaScript or API call required to see the content.
//
// Routes prerendered:
//   every fixed-path page from getStaticRoutePaths() (the shared route source in
//     src/routes.tsx) -> dist/<path>/index.html  (and "/" -> dist/index.html)
//   /post/<slug>      -> dist/post/<slug>/index.html   (one per snapshot slug)
//
// Pure <Navigate> redirects, the dynamic /post/:slug pattern, and the "*" catch-all
// are intentionally NOT in getStaticRoutePaths(), so no blank shell is written for
// them. Redirects resolve client-side via the SPA fallback (or via vercel.json).
//
// For /post/<slug>, the article's full data is also inlined as window.__ARTICLE__ so
// the client hydrates the prerendered markup synchronously (no flash, no refetch).
// Other pages need no preloaded data; they render inside the same StaticRouter and
// hydrate to full content on the client.
//
// This script does NOT call the SEObot API — it reads only the committed snapshot.

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const TEMPLATE_PATH = path.join(DIST, 'index.html');

const ROOT_DIV = '<div id="root"></div>';

// JS line/paragraph separators are valid in JSON strings but break inline <script>,
// so escape them along with "<" (to neutralize any "</script>" sequence).
const LINE_SEP = String.fromCharCode(0x2028);
const PARA_SEP = String.fromCharCode(0x2029);

// Escape a value for safe embedding inside an inline <script> JSON blob.
const serializeForScript = (data) =>
  JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .split(LINE_SEP)
    .join('\\u2028')
    .split(PARA_SEP)
    .join('\\u2029');

const ensureDir = (filePath) => fs.mkdirSync(path.dirname(filePath), { recursive: true });

// Remove the template's default head tags that react-helmet-async re-renders, so the
// prerendered page has exactly one <title> and one set of description/OG/Twitter tags
// (the per-article ones) instead of duplicating the generic template defaults.
// charset, viewport, favicon, fonts, and all analytics <script> tags are preserved.
const stripManagedHeadTags = (html) => {
  const headEnd = html.indexOf('</head>');
  if (headEnd === -1) return html;
  let head = html.slice(0, headEnd);
  const rest = html.slice(headEnd);

  head = head
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="author"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="twitter:[^"]*"[^>]*>/gi, '');

  return head + rest;
};

async function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Missing client build template at ${TEMPLATE_PATH}. Run the client build first.`);
    process.exit(1);
  }
  if (!fs.existsSync(SSR_ENTRY)) {
    console.error(`❌ Missing SSR bundle at ${SSR_ENTRY}. Run "vite build --ssr src/entry-server.tsx" first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  if (!template.includes(ROOT_DIV)) {
    console.error(`❌ Template does not contain ${ROOT_DIV}; cannot inject prerendered markup.`);
    process.exit(1);
  }

  const { render, getAllSlugs, loadArticle, getStaticRoutePaths } = await import(
    pathToFileURL(SSR_ENTRY).href
  );

  // Map a route path to its output file: "/" -> dist/index.html,
  // "/foo/bar" -> dist/foo/bar/index.html.
  const outFileFor = (routePath) => {
    const clean = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
    return clean
      ? path.join(DIST, ...clean.split('/'), 'index.html')
      : path.join(DIST, 'index.html');
  };

  // Every fixed-path page from the shared route source (includes "/", "/articles",
  // and all marketing/landing pages). Redirects, the dynamic /post/:slug pattern,
  // and "*" are excluded at the source, so nothing blank is generated for them.
  const staticPaths = getStaticRoutePaths();
  const slugs = getAllSlugs();
  console.log(
    `🧩 Prerendering ${staticPaths.length} page routes + ${slugs.length} article routes...`
  );

  // Build the list of routes to prerender: fixed-path pages first, then one
  // /post/<slug> per article in the snapshot.
  const routes = [
    ...staticPaths.map((routePath) => ({
      url: routePath,
      outFile: outFileFor(routePath),
      slug: null,
    })),
    ...slugs.map((slug) => ({
      url: `/post/${slug}`,
      outFile: path.join(DIST, 'post', slug, 'index.html'),
      slug,
    })),
  ];

  let written = 0;
  for (let i = 0; i < routes.length; i++) {
    const { url, outFile, slug } = routes[i];

    // Preload the article body so getArticleSync resolves during render.
    let article = null;
    if (slug) {
      article = await loadArticle(slug);
      if (!article) {
        console.warn(`   ⚠️  ${slug}: not found in snapshot, skipping`);
        continue;
      }
    }

    const { appHtml, headTags, htmlAttributes, bodyAttributes } = await render(url);

    // Drop the template's generic head defaults so helmet's per-article tags are
    // the only title/description/OG/Twitter present (no duplicates).
    let html = stripManagedHeadTags(template);

    // Inject collected <head> tags right before </head>.
    if (headTags) {
      html = html.replace('</head>', `    ${headTags}\n  </head>`);
    }

    // Apply html/body attributes from helmet, if any (usually none here).
    if (htmlAttributes) {
      html = html.replace('<html lang="en">', `<html lang="en" ${htmlAttributes}>`);
    }
    if (bodyAttributes) {
      html = html.replace('<body>', `<body ${bodyAttributes}>`);
    }

    // Inline the full article data for synchronous client hydration, then the SSR body.
    const inlineScript = article
      ? `<script>window.__ARTICLE__ = ${serializeForScript(article)}</script>`
      : '';
    html = html.replace(ROOT_DIV, `${inlineScript}<div id="root">${appHtml}</div>`);

    ensureDir(outFile);
    fs.writeFileSync(outFile, html, 'utf-8');
    written++;

    if ((i + 1) % 50 === 0 || i + 1 === routes.length) {
      console.log(`   ...${i + 1}/${routes.length} written`);
    }
  }

  console.log(`✅ Prerendered ${written} static HTML file(s) into dist/.`);
}

main().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
