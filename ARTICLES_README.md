# Articles System with SEObot CMS Integration

This project includes a complete articles/blog system that integrates with [SEObot](https://www.npmjs.com/package/seobot) as a headless CMS.

## Features

### 📚 Articles Index Page (`/articles`)
- **Search functionality** - Full-text search across articles
- **Category filtering** - Filter by Leadership, AI & Tools, Career Growth, etc.
- **Responsive grid layout** - Optimized for all screen sizes
- **Article previews** - Title, description, author, reading time, and featured image
- **Pagination support** - Load more articles as needed

### 📖 Individual Article Pages (`/articles/[slug]`)
- **Full article content** with rich text formatting
- **Author information** and publication dates
- **Social sharing** - Twitter, LinkedIn, and copy link functionality
- **Related articles** suggestions
- **SEO optimization** - Meta tags, structured data
- **Reading time estimation**
- **Tag system** for content organization

### 🔧 SEObot CMS Integration
- **Full CRUD operations** - Create, read, update, delete articles
- **Content management** - Rich text editor support
- **SEO optimization** - Meta titles, descriptions, keywords
- **Media management** - Featured images and content images
- **Analytics tracking** - Article performance metrics
- **Publishing workflow** - Draft/published states

## Setup Instructions

### 1. Install SEObot
```bash
npm install seobot
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and configure:
```bash
# SEObot Configuration
VITE_SEOBOT_API_KEY=your_api_key_here
```

### 3. SEObot Configuration
Follow the [SEObot documentation](https://www.npmjs.com/package/seobot) to:
- Set up your SEObot account
- Configure your content schema
- Obtain your API key

### 4. Content Schema
The articles system expects the following content structure:

```typescript
interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string; // Rich text/HTML content
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readingTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
}
```

## File Structure

```
src/
├── pages/
│   ├── Articles.tsx      # Articles index page
│   └── Article.tsx       # Individual article page
├── types/
│   └── article.ts        # TypeScript interfaces
├── lib/
│   └── seobot.ts         # SEObot client and utilities
└── components/
    └── ui/               # Reusable UI components
```

## Usage

### Displaying Articles
The `Articles.tsx` component automatically fetches and displays articles from SEObot:

```typescript
import { seobotClient } from '../lib/seobot';

// Fetch articles with filtering
const articles = await seobotClient.getArticles({
  page: 1,
  pageSize: 12,
  category: 'leadership',
  search: 'scaling teams'
});
```

### Individual Articles
Article pages are automatically generated based on the slug:
- URL: `/articles/scaling-engineering-teams`
- Component: `Article.tsx`
- Data: Fetched from SEObot by slug

### Creating Content
Use SEObot's admin interface to:
1. Create new articles
2. Set categories and tags
3. Upload featured images
4. Optimize for SEO
5. Publish/schedule content

## SEO Features

### Automatic SEO Optimization
- **Meta titles and descriptions** from article data
- **Open Graph tags** for social sharing
- **Structured data** for search engines
- **Canonical URLs** for each article
- **XML sitemap** generation (if configured)

### Social Sharing
Each article includes sharing buttons for:
- Twitter
- LinkedIn
- Copy link to clipboard

## Development

### Mock Data
For development without SEObot configured, the system includes mock data in:
- `src/lib/seobot.ts` - `mockSeobotData`
- Components automatically fall back to mock data when API is unavailable

### Adding New Features
To extend the articles system:

1. **Add new fields** to the `Article` interface in `src/types/article.ts`
2. **Update the SEObot client** in `src/lib/seobot.ts`
3. **Modify components** to display new fields
4. **Update SEObot schema** to match new structure

## Performance Optimizations

### Implemented
- **Image lazy loading** for featured images
- **Responsive images** with proper sizing
- **Component code splitting** with React.lazy (if needed)
- **Search debouncing** to reduce API calls

### Recommended
- **CDN integration** for images and static assets
- **Caching strategy** with React Query or SWR
- **Service worker** for offline reading
- **Progressive loading** for article content

## Analytics Integration

The system is prepared for analytics tracking:
- **Page views** - Track article reads
- **Engagement metrics** - Reading time, scroll depth
- **Social shares** - Track sharing activity
- **Search queries** - Popular search terms

Integrate with your preferred analytics platform (Google Analytics, Mixpanel, etc.).

## Content Guidelines

### Article Structure
1. **Compelling title** (50-60 characters)
2. **Clear description** (150-160 characters)
3. **Featured image** (1200x630px recommended)
4. **Structured content** with headings and subheadings
5. **Relevant tags** (3-5 tags per article)
6. **Author information** with credibility indicators

### SEO Best Practices
- **Unique meta titles** for each article
- **Descriptive meta descriptions** that encourage clicks
- **Relevant keywords** without keyword stuffing
- **Internal linking** between related articles
- **External links** to authoritative sources

## Troubleshooting

### Common Issues
1. **API Key Issues**: Verify your SEObot API key is correct
2. **CORS Errors**: Ensure your domain is whitelisted in SEObot
3. **Missing Images**: Check image URLs and permissions
4. **Build Errors**: Verify all TypeScript interfaces are properly exported

### Debug Mode
Set `NODE_ENV=development` to enable:
- Detailed error logging
- Mock data fallbacks
- Development-only features

## Support

For technical support:
- SEObot documentation: [https://www.npmjs.com/package/seobot](https://www.npmjs.com/package/seobot)
- Create an issue in this repository
- Contact the development team

---

This articles system provides a solid foundation for content marketing and thought leadership, with the flexibility to grow as your content needs evolve.