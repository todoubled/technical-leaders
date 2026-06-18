import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your routes with their priorities and change frequencies
const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/articles', priority: 0.9, changefreq: 'daily' },
  { path: '/launch', priority: 0.9, changefreq: 'weekly' },
  { path: '/december', priority: 0.9, changefreq: 'weekly' },
  { path: '/scale', priority: 0.9, changefreq: 'weekly' },
  { path: '/call', priority: 0.8, changefreq: 'weekly' },
  { path: '/ai-trade-school', priority: 0.7, changefreq: 'weekly' },
  { path: '/accredited', priority: 0.7, changefreq: 'weekly' },
  { path: '/s2p-elevate-ai-guide', priority: 0.7, changefreq: 'monthly' },
  { path: '/refer', priority: 0.6, changefreq: 'monthly' },
  { path: '/first-time-founder', priority: 0.7, changefreq: 'monthly' },
  { path: '/claude-masterclass', priority: 0.8, changefreq: 'monthly' },
  { path: '/copilot-cowork', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/call-confirmed', priority: 0.3, changefreq: 'monthly' },
];

// Read articles from the committed snapshot (src/data/articles/index.json).
// The build no longer calls the SEObot API — the snapshot is the single source of
// truth. Refresh it with `npm run fetch-articles`.
const fetchArticles = async () => {
  try {
    const indexPath = path.join(__dirname, '..', 'src', 'data', 'articles', 'index.json');
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

  // Write to public directory
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
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

  const publicPath = path.join(__dirname, '..', 'public', 'sitemap-index.xml');
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
