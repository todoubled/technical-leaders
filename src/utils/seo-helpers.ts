// SEO utility functions and constants

export const generateArticleStructuredData = (article: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://technical-leaders.com/post/${article.slug}`
    },
    "headline": article.title,
    "description": article.description,
    "image": article.featuredImage || "https://technical-leaders.com/opengraph-image-p98pqg.png",
    "author": {
      "@type": "Person",
      "name": article.author?.name || "Technical Leaders",
      "jobTitle": article.author?.role || "Technical Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Technical Leaders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://technical-leaders.com/favicon.webp"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "keywords": article.tags?.join(", ") || ""
  };
};

export const generateCourseStructuredData = (courseName: string, description: string, price?: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Technical Leaders",
      "sameAs": "https://technical-leaders.com"
    },
    "offers": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "courseMode": "online",
    "educationalLevel": "advanced"
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Technical Leaders",
  "alternateName": "Tech Leaders",
  "url": "https://technical-leaders.com",
  "logo": "https://technical-leaders.com/favicon.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@technical-leaders.com"
  },
  "sameAs": [
    "https://twitter.com/technical_leaders",
    "https://www.linkedin.com/company/technical-leaders"
  ],
  "description": "Technical Leaders is a community and platform for CTOs, VPs of Engineering, and technical executives to advance their careers through coaching, programs, and peer connections."
};

// Common meta descriptions for different page types
export const metaDescriptions = {
  home: "Transform your technical expertise into strategic leadership. Join CTOs, VPs of Engineering, and technical executives advancing their careers and organizations.",
  launch: "6-week intensive program for senior engineers ready to become CTOs, VPs, and technical executives. Build authority, expand income, and lead at scale.",
  scale: "Transform your expertise into a scalable business. For technical leaders ready to build consulting practices, advisory roles, and thought leadership platforms.",
  articles: "Practical insights, strategies, and tools for CTOs, VPs of Engineering, and technical executives. Learn from real-world experiences in scaling teams and advancing careers.",
  call: "Schedule a free strategy call to discuss how to advance your technical leadership career. Get personalized guidance from experienced CTOs and tech executives."
};

// SEO-friendly URL slugs
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Generate meta keywords from content
export const generateKeywords = (content: string, additionalKeywords: string[] = []): string[] => {
  const baseKeywords = ['technical leadership', 'CTO', 'VP Engineering', 'tech executive'];
  
  // Extract important words from content (this is a simple implementation)
  const contentWords = content
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 5)
    .slice(0, 5);
  
  return [...new Set([...baseKeywords, ...additionalKeywords, ...contentWords])];
};