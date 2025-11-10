import { Helmet } from 'react-helmet-async';

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
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const canonicalUrl = url || window.location.href;
  
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
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
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