import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://technical-leaders.com';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

const SEO = ({
  title = 'Technical Leaders',
  description = 'Transform your technical expertise into strategic leadership. Join a community of CTOs, VPs of Engineering, and technical executives advancing their careers and organizations.',
  keywords = ['technical leadership', 'CTO', 'VP Engineering', 'tech executives', 'leadership development', 'career growth', 'engineering management'],
  author = 'Technical Leaders',
  image = 'https://technical-leaders.com/opengraph-image-p98pqg.png',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}: SEOProps) => {
  const siteTitle = 'Technical Leaders';
  // Append the brand suffix, but only when the title doesn't already end in the
  // brand (some pages bake "... | Technical Leaders" or "... Tech Leaders" into
  // their own title). This prevents doubled brands like
  // "Foo | Technical Leaders | Technical Leaders" in the prerendered HTML.
  const alreadyBranded = /(technical leaders|tech leaders)\s*$/i.test(title);
  const fullTitle = alreadyBranded ? title : `${title} | ${siteTitle}`;
  // Current route path, from the router. Works in the browser AND during static
  // prerendering (StaticRouter), where `window` is undefined — this is what lets
  // every prerendered page ship a correct, page-specific canonical and og:url
  // without each page having to pass `url` by hand.
  const { pathname } = useLocation();
  // Canonical resolution order:
  //   1. an explicit `url` prop (e.g. /post/:slug passes its computed URL), else
  //   2. the site origin + the current path (stable on server and client, so no
  //      hydration mismatch and no empty canonical in prerendered HTML).
  // Drop a trailing slash (except for the root "/") so the canonical is stable.
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const canonicalUrl = url || `${SITE_ORIGIN}${normalizedPath}`;
  
  // Base structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Technical Leaders",
    "url": "https://technical-leaders.com",
    "logo": "https://technical-leaders.com/favicon.webp",
    "sameAs": [
      "https://twitter.com/technical_leaders",
      "https://www.linkedin.com/company/technical-leaders"
    ],
    "description": "Community and programs for technical leaders advancing their careers and organizations."
  };

  // Combine with any custom structured data
  const combinedStructuredData = structuredData || organizationSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Technical Leaders" />
      
      {/* Article specific Open Graph tags.
          These are direct children of <Helmet> (not wrapped in a fragment) because
          react-helmet-async's server-side head collector does not recurse into
          nested fragments, so a fragment here would silently drop these tags from
          prerendered HTML. The rendered tags and conditions are otherwise identical
          to before, so browser output is unchanged. */}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {type === 'article' && section && <meta property="article:section" content={section} />}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={`article-tag-${index}`} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@technical_leaders" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data - Separate script blocks for each schema */}
      {Array.isArray(combinedStructuredData) ? (
        combinedStructuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(combinedStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;