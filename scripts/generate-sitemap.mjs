import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');

// The set of static page routes comes from the SAME shared source the app and the
// prerender use (src/routes.tsx -> getStaticRoutePaths, compiled into the SSR
// bundle). This is why `npm run build` builds the SSR bundle BEFORE generating the
// sitemap: it guarantees the sitemap, the prerendered pages, and the route table
// can never drift apart. If the SSR bundle is missing (e.g. running this script on
// its own), we fall back to a minimal hand list so the script still produces output.
const getStaticRoutePathsSafe = async () => {
  if (fs.existsSync(SSR_ENTRY)) {
    const mod = await import(pathToFileURL(SSR_ENTRY).href);
    if (typeof mod.getStaticRoutePaths === 'function') {
      return mod.getStaticRoutePaths();
    }
  }
  console.warn(
    '⚠️  SSR bundle not found; sitemap falling back to a minimal route list.\n' +
      '   Run `npm run build:ssr` first (the full `npm run build` does this for you).'
  );
  return ['/', '/articles'];
};

// Per-route sitemap hints. The route SET is derived from the shared source above;
// this map only overrides priority/changefreq for routes where the default isn't
// ideal. Any route not listed here uses DEFAULT_HINT. Keys must be route paths.
const ROUTE_HINTS = {
  '/': { priority: 1.0, changefreq: 'daily' },
  '/articles': { priority: 0.9, changefreq: 'daily' },
  '/january': { priority: 0.9, changefreq: 'weekly' },
  '/december': { priority: 0.9, changefreq: 'weekly' },
  '/scale': { priority: 0.9, changefreq: 'weekly' },
  '/call': { priority: 0.8, changefreq: 'weekly' },
  '/claude-masterclass': { priority: 0.8, changefreq: 'monthly' },
  '/copilot-cowork': { priority: 0.8, changefreq: 'monthly' },
  '/longhand': { priority: 0.8, changefreq: 'monthly' },
  '/tokens': { priority: 0.8, changefreq: 'monthly' },
  '/ai-trade-school': { priority: 0.7, changefreq: 'weekly' },
  '/accredited': { priority: 0.7, changefreq: 'weekly' },
  '/first-time-founder': { priority: 0.7, changefreq: 'monthly' },
  '/refer': { priority: 0.6, changefreq: 'monthly' },
  '/call-confirmed': { priority: 0.3, changefreq: 'monthly' },
  '/privacy-policy': { priority: 0.3, changefreq: 'yearly' },
};

const DEFAULT_HINT = { priority: 0.7, changefreq: 'monthly' };

// Extra static URLs that are NOT React routes (served as standalone static files
// via vercel.json), so they don't appear in getStaticRoutePaths().
const EXTRA_STATIC_ROUTES = [
  { path: '/s2p-elevate-ai-guide', priority: 0.7, changefreq: 'monthly' },
];

// Read articles from the committed snapshot (src/data/articles/index.json).
// The build no longer calls the SEObot API — the snapshot is the single source of
// truth. Refresh it with `npm run fetch-articles`.
const fetchArticles = async () => {
  try {
    const indexPath = path.join(ROOT, 'src', 'data', 'articles', 'index.json');
    const articles = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    console.log(`📄 Loaded ${articles.length} articles from snapshot`);
    return articles;
  } catch (error) {
    console.warn('⚠️  Could not read article snapshot, skipping article routes:', error.message);
    return [];
  }
};

const generateSitemap = async () => {
  const domain = 'https://technical-leaders.com';
  const today = new Date().toISOString().split('T')[0];

  // Build the static route list from the shared source + extra static files.
  const staticPaths = await getStaticRoutePathsSafe();
  const routes = [
    ...staticPaths.map((p) => ({ path: p, ...(ROUTE_HINTS[p] || DEFAULT_HINT) })),
    ...EXTRA_STATIC_ROUTES,
  ];

  // Generate static URLs
  const staticUrls = routes.map(route => `
    <url>
        <loc>${domain}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('');

  // Fetch and generate article URLs
  const articles = await fetchArticles();
  const dynamicUrls = articles.map(article => {
    const slug = article.slug;
    const lastmod = article.updatedAt || article.publishedAt || today;
    const formattedDate = new Date(lastmod).toISOString().split('T')[0];
    const imageUrl = article.image || article.featuredImage;

    let urlContent = `
    <url>
        <loc>${domain}/post/${slug}</loc>
        <lastmod>${formattedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>`;

    // Add image if available
    if (imageUrl) {
      const imageTitle = (article.headline || article.title || '').replace(/[<>&"']/g, '');
      urlContent += `
        <image:image>
            <image:loc>${imageUrl}</image:loc>
            <image:title>${imageTitle}</image:title>
        </image:image>`;
    }

    urlContent += `
    </url>`;

    return urlContent;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticUrls}${dynamicUrls}
</urlset>`;

  // Write to public directory (the client build copies public/ into dist/).
  const publicPath = path.join(ROOT, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap, 'utf8');

  console.log(`✅ Sitemap generated successfully with ${routes.length} static + ${articles.length} article URLs`);
  console.log('   Location: public/sitemap.xml');
};

// Also create a sitemap index if you have multiple sitemaps
const generateSitemapIndex = () => {
  const domain = 'https://technical-leaders.com';
  const today = new Date().toISOString();

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${domain}/sitemap.xml</loc>
        <lastmod>${today}</lastmod>
    </sitemap>
</sitemapindex>`;

  const publicPath = path.join(ROOT, 'public', 'sitemap-index.xml');
  fs.writeFileSync(publicPath, sitemapIndex, 'utf8');

  console.log('✅ Sitemap index generated at public/sitemap-index.xml');
};

// Run the generators
(async () => {
  console.log('🗺️  Generating sitemap...\n');
  await generateSitemap();
  generateSitemapIndex();
  console.log('\n🎉 Sitemap generation complete!');
})();

export { generateSitemap, generateSitemapIndex };
