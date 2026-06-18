// Shared SEObot -> Article conversion logic.
//
// This is the single source of truth for turning a raw SEObot API article into
// our app's `Article` shape (see src/types/article.ts). It is plain ESM with no
// browser or Vite dependencies so the Node fetch script (scripts/fetch-articles.mjs)
// can import it directly. The runtime app does NOT call SEObot anymore — it reads
// the committed snapshot these helpers produce — so this conversion only runs at
// snapshot-build time.
//
// The custom override maps below mirror the ones that previously lived in
// src/lib/seobot.ts and MUST stay in sync with editorial intent. They are baked
// INTO the snapshot at fetch time, so no runtime conversion is needed.

// Custom published dates for specific articles (format: YYYY-MM-DD)
export const ARTICLE_PUBLISHED_DATES = {
  '5-step-ethical-crisis-decision-making-guide': '2025-03-01',
  // Add more articles with custom published dates here as needed
};

// Custom updated dates for specific articles (format: YYYY-MM-DD)
export const ARTICLE_UPDATED_DATES = {
  '5-step-ethical-crisis-decision-making-guide': new Date().toISOString().split('T')[0],
  'cq-assessment-tools-a-comparative-analysis': new Date().toISOString().split('T')[0],
  // Add more articles with custom updated dates here as needed
};

// Custom SEO keywords mapping for specific articles
export const ARTICLE_KEYWORDS_MAP = {
  'smart-goals-for-tech-teams-examples-and-templates': [
    'SMART goals',
    'tech teams',
    'project management',
    'software development',
    'employee engagement',
    'performance improvement'
  ],
  'stakeholder-impact-analysis-5-case-studies': [
    'stakeholder analysis',
    'project management',
    'case studies',
    'engagement strategies',
    'decision-making'
  ],
  '5-step-ethical-crisis-decision-making-guide': [
    'ethical decision making',
    'crisis management',
    'leadership',
    'stakeholder impact',
    'ethical principles'
  ],
  'cq-assessment-tools-a-comparative-analysis': [
    'Cultural Intelligence',
    'CQ assessments',
    'diversity',
    'leadership',
    'intercultural development',
    'global competencies',
    'workplace inclusion',
    'team dynamics'
  ],
  // Add more article-specific keywords here as needed
};

// Custom featured image alt text for specific articles
export const ARTICLE_IMAGE_ALT_TEXT = {
  'interest-based-relational-approach-ultimate-guide-for-tech-leaders': 'Interest-Based Relational Approach, tech leaders, team collaboration, conflict resolution, shared interests, mutual respect',
  // Add more article-specific image alt text here as needed
};

// Helper function to safely extract a string from potentially complex objects.
// SEObot returns `category` as { id, title, slug } and `tags` as [{ title, ... }],
// so this reaches into `.title` (etc.) to produce a plain string.
export const safeStringExtract = (value) => {
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'object' && value !== null) {
    if (value.text) return String(value.text);
    if (value.content) return String(value.content);
    if (value.value) return String(value.value);
    if (value.title) return String(value.title);
    if (value.name) return String(value.name);
    if (value.toString && value.toString !== Object.prototype.toString) {
      return value.toString();
    }
    try {
      const jsonStr = JSON.stringify(value);
      if (jsonStr !== '{}' && jsonStr !== 'null') {
        return jsonStr.replace(/[{}"]/g, '').replace(/:/g, ': ').replace(/,/g, ', ');
      }
    } catch (e) {
      // Ignore JSON errors
    }
  }
  return String(value || '');
};

// Calculate reading time from content (HTML stripped, ~200 wpm).
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = (content || '').replace(/<[^>]*>/g, ''); // Strip HTML
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Convert a raw SEObot article (full or summary) into our `Article` shape.
// Applies all four custom override maps so the result is fully baked.
export const convertSeobotArticle = (seobotArticle) => {
  const id = safeStringExtract(seobotArticle.id || seobotArticle._id) || Math.random().toString(36);
  const slug = safeStringExtract(seobotArticle.slug || seobotArticle.url) || id;
  const title = safeStringExtract(seobotArticle.headline || seobotArticle.title) || 'Untitled';
  const description = safeStringExtract(seobotArticle.metaDescription || seobotArticle.description || seobotArticle.excerpt) || '';
  const content = safeStringExtract(seobotArticle.html || seobotArticle.content || seobotArticle.markdown) || '';

  // Extract published date - use createdAt as primary source (matches SEObot dashboard).
  // Check custom overrides first, then use createdAt, fall back to publishedAt.
  let publishedAt = ARTICLE_PUBLISHED_DATES[slug];
  if (!publishedAt) {
    publishedAt = safeStringExtract(seobotArticle.createdAt);
    if (!publishedAt || publishedAt === '' || publishedAt === 'null') {
      publishedAt = safeStringExtract(seobotArticle.publishedAt) || new Date().toISOString();
    }
  }
  const category = safeStringExtract(seobotArticle.category) || 'General';

  // Ensure tags is an array of strings
  let tags = [];
  if (Array.isArray(seobotArticle.tags)) {
    tags = seobotArticle.tags.map((tag) => safeStringExtract(tag)).filter((tag) => tag.length > 0);
  } else if (seobotArticle.tags) {
    const tagStr = safeStringExtract(seobotArticle.tags);
    if (tagStr) tags = [tagStr];
  }

  // Ensure author is properly structured
  let author = {
    name: 'Todd Larsen',
    role: 'Co-founder & CTO',
    profile: 'https://www.linkedin.com/in/remotebranch/',
    avatar: 'https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png'
  };

  if (seobotArticle.author) {
    if (typeof seobotArticle.author === 'string') {
      author.name = seobotArticle.author;
    } else if (typeof seobotArticle.author === 'object') {
      author = {
        name: safeStringExtract(seobotArticle.author.name) || 'Technical Leaders',
        role: safeStringExtract(seobotArticle.author.role) || 'Editorial Team',
        profile: safeStringExtract(seobotArticle.author.profile) || 'https://www.linkedin.com/in/remotebranch/',
        avatar: safeStringExtract(seobotArticle.author.avatar) || 'TL'
      };
    }
  }

  const result = {
    id,
    slug,
    title,
    description,
    content,
    author,
    publishedAt,
    updatedAt: ARTICLE_UPDATED_DATES[slug] || safeStringExtract(seobotArticle.updatedAt) || undefined,
    category,
    tags,
    featuredImage: seobotArticle.featuredImage || seobotArticle.image || undefined,
    featuredImageAlt: ARTICLE_IMAGE_ALT_TEXT[slug] || undefined,
    readingTime: calculateReadingTime(content),
    seo: {
      metaTitle: title,
      metaDescription: description,
      keywords: ARTICLE_KEYWORDS_MAP[slug] || tags, // Use custom keywords if available, otherwise tags
    }
  };

  return result;
};
