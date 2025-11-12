import { Article, ArticleListResponse } from '../types/article';

// SEObot API configuration
const SEOBOT_API_KEY = import.meta.env?.VITE_SEOBOT_API_KEY;

// Debug logging
console.log('Environment check:', {
  VITE_SEOBOT_API_KEY: SEOBOT_API_KEY ? 'Present' : 'Missing',
  importMetaEnv: import.meta.env,
});

// Test SEObot package availability
const testSeobotAvailability = async () => {
  try {
    const seobot = await import('seobot');
    console.log('SEObot package is available:', Object.keys(seobot));
    return true;
  } catch (error) {
    console.log('SEObot package not available:', error);
    return false;
  }
};

// Run test
testSeobotAvailability();

// Custom published dates for specific articles (format: YYYY-MM-DD)
const ARTICLE_PUBLISHED_DATES: Record<string, string> = {
  '5-step-ethical-crisis-decision-making-guide': '2025-03-01',
  // Add more articles with custom published dates here as needed
};

// Custom updated dates for specific articles (format: YYYY-MM-DD)
const ARTICLE_UPDATED_DATES: Record<string, string> = {
  '5-step-ethical-crisis-decision-making-guide': new Date().toISOString().split('T')[0],
  'cq-assessment-tools-a-comparative-analysis': new Date().toISOString().split('T')[0],
  // Add more articles with custom updated dates here as needed
};

// Custom SEO keywords mapping for specific articles
const ARTICLE_KEYWORDS_MAP: Record<string, string[]> = {
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
const ARTICLE_IMAGE_ALT_TEXT: Record<string, string> = {
  'interest-based-relational-approach-ultimate-guide-for-tech-leaders': 'Interest-Based Relational Approach, tech leaders, team collaboration, conflict resolution, shared interests, mutual respect',
  // Add more article-specific image alt text here as needed
};

// SEObot Article interface (from their API)
interface SeobotArticle {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  html: string;
  markdown: string;
  publishedAt: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
}

// Dynamic import for SEObot client (only available in browser)
let BlogClient: any = null;

const initializeBlogClient = async () => {
  if (typeof window !== 'undefined' && !BlogClient) {
    try {
      console.log('Attempting to import seobot...');
      const { BlogClient: BC } = await import('seobot');
      BlogClient = BC;
      console.log('SEObot BlogClient imported successfully');
    } catch (error) {
      console.warn('SEObot not available, using mock data:', error);
    }
  } else if (BlogClient) {
    console.log('BlogClient already initialized');
  } else {
    console.log('Not in browser environment');
  }
};

// Helper function to safely extract string from potentially complex objects
const safeStringExtract = (value: any): string => {
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'object' && value !== null) {
    // If it's an object, try to extract meaningful text
    if (value.text) return String(value.text);
    if (value.content) return String(value.content);
    if (value.value) return String(value.value);
    if (value.title) return String(value.title);
    if (value.name) return String(value.name);
    // If it has a toString method that's not the default Object.toString
    if (value.toString && value.toString !== Object.prototype.toString) {
      return value.toString();
    }
    // Last resort: JSON stringify and clean up
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

// Convert SEObot article to our Article interface
const convertSeobotArticle = (seobotArticle: any): Article => {
  console.log('Converting article:', seobotArticle);

  // Ensure we have required fields, provide defaults if missing
  // Use safe string extraction for all fields
  const id = safeStringExtract(seobotArticle.id || seobotArticle._id) || Math.random().toString(36);
  const slug = safeStringExtract(seobotArticle.slug || seobotArticle.url) || id;
  const title = safeStringExtract(seobotArticle.headline || seobotArticle.title) || 'Untitled';
  const description = safeStringExtract(seobotArticle.metaDescription || seobotArticle.description || seobotArticle.excerpt) || '';
  const content = safeStringExtract(seobotArticle.html || seobotArticle.content || seobotArticle.markdown) || '';

  // Extract published date - use createdAt as primary source (matches SEObot dashboard)
  // Check custom overrides first, then use createdAt, fall back to publishedAt
  let publishedAt = ARTICLE_PUBLISHED_DATES[slug];
  if (!publishedAt) {
    // Use createdAt as primary since it matches the "Created (published)" field in SEObot dashboard
    publishedAt = safeStringExtract(seobotArticle.createdAt);
    if (!publishedAt || publishedAt === '' || publishedAt === 'null') {
      publishedAt = safeStringExtract(seobotArticle.publishedAt) || new Date().toISOString();
    }
  }
  const category = safeStringExtract(seobotArticle.category) || 'General';

  // Ensure tags is an array of strings
  let tags: string[] = [];
  if (Array.isArray(seobotArticle.tags)) {
    tags = seobotArticle.tags.map((tag: any) => safeStringExtract(tag)).filter(tag => tag.length > 0);
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

  console.log('Converted article result:', result);
  return result;
};

// Calculate reading time from content
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// API client for SEObot
class SeobotClient {
  private client: any = null;
  private apiKey: string;

  constructor(apiKey: string = SEOBOT_API_KEY || '') {
    this.apiKey = apiKey;
  }

  private async getClient() {
    console.log('Getting client, API key:', this.apiKey ? 'Present' : 'Missing');

    if (!this.client && this.apiKey) {
      console.log('Initializing BlogClient...');
      await initializeBlogClient();

      if (BlogClient) {
        console.log('BlogClient available, creating instance');
        this.client = new BlogClient(this.apiKey);
        console.log('Client created successfully');
      } else {
        console.log('BlogClient not available');
      }
    } else if (!this.apiKey) {
      console.log('No API key provided, will use mock data');
    }

    return this.client;
  }

  // Fetch all articles with pagination and filtering
  async getArticles(params: {
    page?: number;
    pageSize?: number;
    category?: string;
    tag?: string;
    search?: string;
    published?: boolean;
  } = {}): Promise<ArticleListResponse> {
    console.log('getArticles called with params:', params);
    const client = await this.getClient();

    if (!client) {
      console.log('No client available, using mock data');
      // Fall back to mock data if SEObot is not available
      return this.getMockArticles(params);
    }

    try {
      console.log('Using SEObot client to fetch articles');
      const page = params.page || 0; // SEObot uses 0-based pagination
      const limit = params.pageSize || 12;

      let seobotArticles: SeobotArticle[] = [];

      if (params.category && params.category !== 'all') {
        console.log('Fetching articles by category:', params.category);
        seobotArticles = await client.getCategoryArticles(params.category, page, limit);
      } else if (params.tag) {
        console.log('Fetching articles by tag:', params.tag);
        seobotArticles = await client.getTagArticles(params.tag, page, limit);
      } else {
        console.log('Fetching all articles, page:', page, 'limit:', limit);
        seobotArticles = await client.getArticles(page, limit);
      }

      console.log('Raw articles from SEObot:', seobotArticles);
      console.log('Type of seobotArticles:', typeof seobotArticles);
      console.log('Is array:', Array.isArray(seobotArticles));

      // Handle different response structures from SEObot
      let articlesArray: SeobotArticle[] = [];

      if (Array.isArray(seobotArticles)) {
        articlesArray = seobotArticles;
      } else if (seobotArticles && typeof seobotArticles === 'object') {
        // SEObot might return an object with articles property
        if ('articles' in seobotArticles) {
          articlesArray = (seobotArticles as any).articles || [];
        } else if ('data' in seobotArticles) {
          articlesArray = (seobotArticles as any).data || [];
        } else {
          // If it's a single article object, wrap it in an array
          articlesArray = [seobotArticles as any];
        }
      } else {
        console.warn('Unexpected response format from SEObot:', seobotArticles);
        articlesArray = [];
      }

      console.log('Processed articles array:', articlesArray);

      // Filter out any invalid articles and convert
      const articles = articlesArray
        .filter(article => article && typeof article === 'object')
        .map(convertSeobotArticle);

      console.log('Converted articles:', articles);

      // Filter by search query if provided
      const filteredArticles = params.search
        ? articles.filter(article =>
            article.title.toLowerCase().includes(params.search!.toLowerCase()) ||
            article.description.toLowerCase().includes(params.search!.toLowerCase())
          )
        : articles;

      const result = {
        articles: filteredArticles,
        total: filteredArticles.length,
        page: page,
        pageSize: limit,
        hasMore: filteredArticles.length === limit
      };

      console.log('Returning result:', result);
      return result;
    } catch (error) {
      console.error('Error fetching articles from SEObot:', error);
      console.log('Falling back to mock data due to error');
      return this.getMockArticles(params);
    }
  }

  // Fetch a single article by slug
  async getArticle(slug: string): Promise<Article> {
    const client = await this.getClient();

    if (!client) {
      return this.getMockArticle(slug);
    }

    try {
      const seobotArticle: SeobotArticle = await client.getArticle(slug);
      return convertSeobotArticle(seobotArticle);
    } catch (error) {
      console.error('Error fetching article from SEObot:', error);
      return this.getMockArticle(slug);
    }
  }

  // Mock data fallback methods
  private getMockArticles(params: any): ArticleListResponse {
    const articles = mockSeobotData.articles.map(convertSeobotArticle);
    const filteredArticles = params.search
      ? articles.filter((article: Article) =>
          article.title.toLowerCase().includes(params.search.toLowerCase()) ||
          article.description.toLowerCase().includes(params.search.toLowerCase())
        )
      : articles;

    return {
      articles: filteredArticles,
      total: filteredArticles.length,
      page: params.page || 0,
      pageSize: params.pageSize || 12,
      hasMore: false
    };
  }

  private getMockArticle(slug: string): Article {
    const mockArticle = mockSeobotData.articles.find(a => a.slug === slug);
    if (!mockArticle) {
      throw new Error(`Article with slug "${slug}" not found`);
    }
    return convertSeobotArticle(mockArticle);
  }

  // Get related articles (using mock data for now)
  async getRelatedArticles(articleId: string, limit: number = 3): Promise<Article[]> {
    // For now, return mock related articles
    // TODO: Implement with SEObot when they add related articles API
    const allArticles = mockSeobotData.articles.map(convertSeobotArticle);
    return allArticles
      .filter(article => article.id !== articleId)
      .slice(0, limit);
  }
}

// Export singleton instance
export const seobotClient = new SeobotClient();

// React hooks for SEObot integration
export const useSeobotArticles = () => {
  // This would typically use React Query or SWR for caching
  // Implementation depends on your preferred data fetching library
  return {
    getArticles: seobotClient.getArticles.bind(seobotClient),
    getArticle: seobotClient.getArticle.bind(seobotClient),
    getRelatedArticles: seobotClient.getRelatedArticles.bind(seobotClient),
  };
};

// Utility functions for working with articles
export const articleUtils = {
  // Generate reading time estimate
  calculateReadingTime: (content: string): number => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  },

  // Generate article excerpt
  generateExcerpt: (content: string, maxLength: number = 160): string => {
    const text = content.replace(/<[^>]*>/g, ''); // Strip HTML
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + '...'
      : text;
  },

  // Format article URL
  generateSlug: (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  },

  // SEO optimization helpers
  optimizeForSEO: (article: Partial<Article>): Partial<Article> => {
    const seo = {
      metaTitle: article.seo?.metaTitle || article.title,
      metaDescription: article.seo?.metaDescription || article.description,
      keywords: article.seo?.keywords || article.tags,
    };

    return {
      ...article,
      seo: {
        ...article.seo,
        ...seo,
      },
    };
  },

  // Extract FAQs from article content for Schema.org
  extractFAQs: (content: string): Array<{ question: string; answer: string }> => {
    const faqs: Array<{ question: string; answer: string }> = [];

    try {
      // Find FAQ section (case insensitive)
      const faqSectionMatch = content.match(/(<h[2-3][^>]*>.*?(?:FAQ[s]?|Frequently Asked Questions?).*?<\/h[2-3]>)(.*?)(?=<h[12][^>]*>|$)/is);

      if (!faqSectionMatch) {
        return faqs;
      }

      const faqContent = faqSectionMatch[2];

      // Match h3 questions followed by their content until the next h3 or end
      const questionPattern = /<h3[^>]*>(.*?)<\/h3>(.*?)(?=<h3|$)/gis;
      let match;

      while ((match = questionPattern.exec(faqContent)) !== null) {
        const question = match[1]
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .trim();

        let answerHTML = match[2];

        // Convert lists to bullet points
        answerHTML = answerHTML.replace(/<li[^>]*>(.*?)<\/li>/gis, '• $1\n');

        // Remove ordered/unordered list tags but keep the content
        answerHTML = answerHTML.replace(/<\/?[ou]l[^>]*>/gi, '');

        // Handle table rows - convert to structured text
        answerHTML = answerHTML.replace(/<tr[^>]*>(.*?)<\/tr>/gis, (_, row) => {
          const cells = row.match(/<t[dh][^>]*>(.*?)<\/t[dh]>/gis) || [];
          return cells.map(cell => cell.replace(/<[^>]*>/g, '').trim()).join(': ') + '. ';
        });

        // Remove remaining table tags
        answerHTML = answerHTML.replace(/<\/?table[^>]*>/gi, '');
        answerHTML = answerHTML.replace(/<\/?tbody[^>]*>/gi, '');
        answerHTML = answerHTML.replace(/<\/?thead[^>]*>/gi, '');

        // Convert paragraphs to proper spacing
        answerHTML = answerHTML.replace(/<\/p>\s*<p[^>]*>/gi, ' ');

        // Remove all remaining HTML tags
        const answer = answerHTML
          .replace(/<[^>]*>/g, ' ')
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/\s+/g, ' ') // Normalize whitespace
          .replace(/\.\s*\./g, '.') // Remove duplicate periods
          .trim();

        if (question && answer) {
          faqs.push({ question, answer });
        }
      }
    } catch (error) {
      console.error('Error extracting FAQs:', error);
    }

    return faqs;
  },

  // Extract HowTo steps from article content for HowTo schema
  extractHowToSteps: (content: string, articleTitle: string): Array<{ name: string; text: string; url: string }> => {
    const steps: Array<{ name: string; text: string; url: string }> = [];

    try {
      // Look for numbered steps or step-by-step patterns
      // Pattern 1: Look for "Step 1:", "Step 2:", etc.
      const stepPattern1 = /<h[23][^>]*>(Step\s+\d+[:\.]?\s*)(.*?)<\/h[23]>(.*?)(?=<h[23]|$)/gis;
      let match;

      while ((match = stepPattern1.exec(content)) !== null) {
        const stepNumber = match[1];
        const stepName = match[2].replace(/<[^>]*>/g, '').trim();
        const stepContent = match[3];

        // Extract text content
        let stepText = stepContent
          .replace(/<[^>]*>/g, ' ')
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/\s+/g, ' ')
          .trim()
          .substring(0, 300); // Limit to 300 chars

        // Generate URL anchor
        const stepId = (stepNumber + stepName).toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-');

        if (stepName && stepText) {
          steps.push({
            name: stepName,
            text: stepText,
            url: `#${stepId}`
          });
        }
      }

      // Pattern 2: If no explicit "Step" headers, look for numbered H2/H3 headings
      if (steps.length === 0) {
        const numberedHeadingPattern = /<h[23][^>]*>(\d+[\.)]\s*)(.*?)<\/h[23]>(.*?)(?=<h[23]|$)/gis;

        while ((match = numberedHeadingPattern.exec(content)) !== null) {
          const stepNumber = match[1];
          const stepName = match[2].replace(/<[^>]*>/g, '').trim();
          const stepContent = match[3];

          let stepText = stepContent
            .replace(/<[^>]*>/g, ' ')
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 300);

          const stepId = stepName.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-');

          if (stepName && stepText) {
            steps.push({
              name: stepName,
              text: stepText,
              url: `#${stepId}`
            });
          }
        }
      }

    } catch (error) {
      console.error('Error extracting HowTo steps:', error);
    }

    return steps;
  },
};

// Mock data for development (remove when SEObot is configured)
export const mockSeobotData = {
  articles: [
    {
      id: '1',
      slug: 'scaling-engineering-teams-lessons-learned',
      headline: 'Scaling Engineering Teams: Lessons Learned from 10x Growth',
      metaDescription: 'Practical insights on building and scaling high-performing engineering teams from seed to series C.',
      html: '<h1>Scaling Engineering Teams</h1><p>Practical insights on building and scaling high-performing engineering teams from seed to series C.</p>',
      markdown: '# Scaling Engineering Teams\n\nPractical insights on building and scaling high-performing engineering teams from seed to series C.',
      author: { name: 'Todd Kerpelman', role: 'CTO Coach', avatar: 'TK' },
      publishedAt: '2024-01-15T00:00:00Z',
      updatedAt: '2024-01-16T00:00:00Z',
      category: 'Leadership',
      tags: ['Team Building', 'Scaling', 'Management'],
      featuredImage: '/placeholder.svg',
    },
    {
      id: '2',
      slug: 'ai-tools-technical-leaders-2024',
      headline: 'AI Tools Every Technical Leader Should Know in 2024',
      metaDescription: 'A comprehensive guide to AI tools that can 10x your productivity as a technical leader.',
      html: '<h1>AI Tools for Technical Leaders</h1><p>A comprehensive guide to AI tools that can 10x your productivity as a technical leader.</p>',
      markdown: '# AI Tools for Technical Leaders\n\nA comprehensive guide to AI tools that can 10x your productivity as a technical leader.',
      author: { name: 'Sara Mazer', role: 'Field CTO', avatar: 'SM' },
      publishedAt: '2024-01-10T00:00:00Z',
      updatedAt: '2024-01-11T00:00:00Z',
      category: 'AI & Tools',
      tags: ['AI', 'Productivity', 'Tools'],
      featuredImage: '/placeholder.svg',
    },
    {
      id: '3',
      slug: 'negotiating-tech-leadership-compensation',
      headline: 'The Complete Guide to Negotiating Tech Leadership Compensation',
      metaDescription: 'How to negotiate your worth as a senior technical leader, from base salary to equity packages.',
      html: '<h1>Negotiating Tech Leadership Compensation</h1><p>How to negotiate your worth as a senior technical leader, from base salary to equity packages.</p>',
      markdown: '# Negotiating Tech Leadership Compensation\n\nHow to negotiate your worth as a senior technical leader, from base salary to equity packages.',
      author: { name: 'Miguel Suárez', role: 'Technical Director', avatar: 'MS' },
      publishedAt: '2024-01-05T00:00:00Z',
      updatedAt: '2024-01-06T00:00:00Z',
      category: 'Career Growth',
      tags: ['Compensation', 'Negotiation', 'Career'],
      featuredImage: '/placeholder.svg',
    }
  ],
  categories: [
    { id: '1', name: 'Leadership', slug: 'leadership', count: 12 },
    { id: '2', name: 'AI & Tools', slug: 'ai-tools', count: 8 },
    { id: '3', name: 'Career Growth', slug: 'career-growth', count: 15 },
    { id: '4', name: 'Technical Strategy', slug: 'technical-strategy', count: 10 },
  ],
};

export default seobotClient;