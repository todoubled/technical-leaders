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
  { path: '/scale', priority: 0.9, changefreq: 'weekly' },
  { path: '/call', priority: 0.8, changefreq: 'weekly' },
  { path: '/ai-trade-school', priority: 0.7, changefreq: 'weekly' },
  { path: '/accredited', priority: 0.7, changefreq: 'weekly' },
  { path: '/refer', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/call-confirmed', priority: 0.3, changefreq: 'monthly' },
];

// Dynamic routes that would be fetched from your CMS or database
// For now, we'll add placeholders
const dynamicRoutes = [
  // Article routes would be fetched from your SEObot API
  // { path: '/post/article-slug', priority: 0.7, changefreq: 'monthly' }
];

const generateSitemap = () => {
  const domain = 'https://technical-leaders.com';
  const today = new Date().toISOString().split('T')[0];
  
  const staticUrls = routes.map(route => `
    <url>
        <loc>${domain}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('');
    
  const dynamicUrls = dynamicRoutes.map(route => `
    <url>
        <loc>${domain}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}${dynamicUrls}
</urlset>`;

  // Write to public directory
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap, 'utf8');
  
  console.log('Sitemap generated successfully at public/sitemap.xml');
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
};

// Run the generators
generateSitemap();
generateSitemapIndex();

export { generateSitemap, generateSitemapIndex };