// Manual SEObot snapshot fetcher.
//
// Run with `npm run fetch-articles`. This is the ONLY consumer of the SEObot API.
// It paginates the article list, fetches each full article body via getArticle(slug),
// converts via the shared converter (applying the custom override maps), and writes a
// committed snapshot under src/data/articles/:
//
//   src/data/articles/index.json          - array of lightweight summaries (no body),
//                                            used by the /articles grid.
//   src/data/articles/posts/<slug>.json   - one full Article (with `content`) per slug,
//                                            used by the prerendered /post/:slug pages.
//
// The build (`npm run build`) does NOT run this script and never calls SEObot.
// To refresh content: run this script, then commit the changed data files.
//
// Output is written deterministically (stable key order, slug-sorted index, stale files
// pruned) so re-running with no upstream changes produces no diff churn.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convertSeobotArticle } from './lib/article-converter.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'articles');
const POSTS_DIR = path.join(DATA_DIR, 'posts');

// Load VITE_SEOBOT_API_KEY from .env (same pattern as generate-sitemap.mjs).
const loadEnv = () => {
  try {
    const envPath = path.join(__dirname, '..', '.env');
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const apiKeyMatch = envContent.match(/VITE_SEOBOT_API_KEY=(.+)/);
    return apiKeyMatch ? apiKeyMatch[1].trim() : null;
  } catch (error) {
    return null;
  }
};

const SEOBOT_API_KEY = loadEnv();

// Recursively sort object keys so JSON.stringify output is stable across runs.
const sortKeysDeep = (value) => {
  if (Array.isArray(value)) {
    return value.map(sortKeysDeep);
  }
  if (value && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortKeysDeep(value[key]);
        return acc;
      }, {});
  }
  return value;
};

// Write JSON only if content changed, to avoid touching mtimes / git noise.
const writeJsonStable = (filePath, data) => {
  const json = JSON.stringify(sortKeysDeep(data), null, 2) + '\n';
  let existing = null;
  try {
    existing = fs.readFileSync(filePath, 'utf-8');
  } catch {
    // file doesn't exist yet
  }
  if (existing !== json) {
    fs.writeFileSync(filePath, json, 'utf8');
    return true;
  }
  return false;
};

// Fetch all article summaries by paginating the list endpoint.
const fetchAllSummaries = async (client) => {
  const all = [];
  let page = 0;
  let hasMore = true;

  while (hasMore && page < 50) {
    const response = await client.getArticles(page, 100);
    const articles = Array.isArray(response) ? response : response.articles || [];

    if (articles.length > 0) {
      all.push(...articles);
      console.log(`   Page ${page + 1}: ${articles.length} articles (running total ${all.length})`);
      page++;
      hasMore = articles.length === 100;
    } else {
      hasMore = false;
    }
  }

  return all;
};

const fetchArticles = async () => {
  if (!SEOBOT_API_KEY) {
    console.error('❌ VITE_SEOBOT_API_KEY not found in .env — cannot fetch snapshot.');
    process.exit(1);
  }

  const { BlogClient } = await import('seobot');
  const client = new BlogClient(SEOBOT_API_KEY);

  console.log('📥 Fetching article list from SEObot...');
  const summaries = await fetchAllSummaries(client);
  // De-dupe by slug, preserving first occurrence.
  const seen = new Set();
  const uniqueSummaries = summaries.filter((s) => {
    if (!s.slug || seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });
  console.log(`✅ ${uniqueSummaries.length} unique article slugs found.`);

  console.log('📥 Fetching full article bodies (one request per slug)...');
  const fullArticles = [];
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < uniqueSummaries.length; i++) {
    const slug = uniqueSummaries[i].slug;
    try {
      const raw = await client.getArticle(slug);
      // Skip explicitly-unpublished or deleted articles.
      if (raw && (raw.published === false || raw.deleted === true)) {
        skipped++;
        continue;
      }
      const article = convertSeobotArticle(raw);
      if (!article.content) {
        console.warn(`   ⚠️  ${slug}: no content body, skipping`);
        skipped++;
        continue;
      }
      fullArticles.push(article);
    } catch (error) {
      failed++;
      console.warn(`   ⚠️  ${slug}: fetch failed (${error.message})`);
    }

    if ((i + 1) % 25 === 0 || i + 1 === uniqueSummaries.length) {
      console.log(`   ...${i + 1}/${uniqueSummaries.length} processed`);
    }
  }

  // Sort newest-first by publishedAt (the grid expects recent articles first),
  // with slug as a stable tiebreaker for deterministic output.
  fullArticles.sort((a, b) => {
    const da = new Date(a.publishedAt).getTime() || 0;
    const db = new Date(b.publishedAt).getTime() || 0;
    if (db !== da) return db - da;
    return a.slug.localeCompare(b.slug);
  });

  return { fullArticles, skipped, failed, totalSlugs: uniqueSummaries.length };
};

const writeSnapshot = ({ fullArticles }) => {
  fs.mkdirSync(POSTS_DIR, { recursive: true });

  // Write one full-article file per slug.
  let written = 0;
  for (const article of fullArticles) {
    const filePath = path.join(POSTS_DIR, `${article.slug}.json`);
    if (writeJsonStable(filePath, article)) written++;
  }

  // Prune stale per-slug files that are no longer in the snapshot.
  const liveSlugs = new Set(fullArticles.map((a) => a.slug));
  let pruned = 0;
  for (const file of fs.readdirSync(POSTS_DIR)) {
    if (!file.endsWith('.json')) continue;
    const slug = file.replace(/\.json$/, '');
    if (!liveSlugs.has(slug)) {
      fs.unlinkSync(path.join(POSTS_DIR, file));
      pruned++;
    }
  }

  // Write the lightweight index (summaries, no body) used by the grid.
  // Keep ordering identical to the sorted full list.
  const index = fullArticles.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    description: a.description,
    author: a.author,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
    category: a.category,
    tags: a.tags,
    featuredImage: a.featuredImage,
    featuredImageAlt: a.featuredImageAlt,
    readingTime: a.readingTime,
    seo: a.seo,
  }));
  // Index intentionally preserves recency order, so do NOT key-sort the array;
  // only stabilize each entry's object keys.
  const indexJson = JSON.stringify(index.map(sortKeysDeep), null, 2) + '\n';
  const indexPath = path.join(DATA_DIR, 'index.json');
  let existingIndex = null;
  try {
    existingIndex = fs.readFileSync(indexPath, 'utf-8');
  } catch {
    /* none */
  }
  const indexChanged = existingIndex !== indexJson;
  if (indexChanged) fs.writeFileSync(indexPath, indexJson, 'utf8');

  return { written, pruned, indexChanged, count: fullArticles.length };
};

(async () => {
  console.log('🗂️  Generating SEObot article snapshot...\n');
  const result = await fetchArticles();
  const writeResult = writeSnapshot(result);

  console.log('\n📊 Snapshot summary:');
  console.log(`   Slugs listed:        ${result.totalSlugs}`);
  console.log(`   Articles written:    ${writeResult.count}`);
  console.log(`   Skipped (unpub/empty): ${result.skipped}`);
  console.log(`   Failed fetches:      ${result.failed}`);
  console.log(`   Files changed:       ${writeResult.written} post(s)${writeResult.indexChanged ? ' + index.json' : ''}`);
  if (writeResult.pruned > 0) console.log(`   Stale files pruned:  ${writeResult.pruned}`);
  console.log(`\n   Location: src/data/articles/ (index.json + posts/<slug>.json)`);
  console.log('\n🎉 Snapshot generation complete!');
})();
