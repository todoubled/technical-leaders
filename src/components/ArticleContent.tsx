import React from 'react';
import { Badge } from './ui/badge';
import '../styles/article.css';

interface ArticleContentProps {
  content: string;
  articleTitle?: string;
  articleKeywords?: string[];
  articleCategory?: string;
}

// Component to render parsed article content with enhanced styling
const ArticleContent: React.FC<ArticleContentProps> = ({
  content,
  articleTitle = '',
  articleKeywords = [],
  articleCategory = ''
}) => {
  // Helper function to generate ID from text
  const generateId = (text: string): string => {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  // Process the content to enhance readability
  const processContent = (htmlContent: string): string => {
    // Add enhanced classes and IDs to HTML elements
    return htmlContent
      // Headers with better spacing, typography, and IDs for navigation
      .replace(/<h1([^>]*)>(.*?)<\/h1>/g, (match, attrs, text) => {
        const id = generateId(text);
        return `<h1${attrs} id="${id}" class="text-4xl font-bold text-foreground mt-12 mb-6 first:mt-0 leading-tight scroll-mt-24">${text}</h1>`;
      })
      .replace(/<h2([^>]*)>(.*?)<\/h2>/g, (match, attrs, text) => {
        const cleanId = generateId(text);
        // Remove existing class and id attributes, keep other attrs like tabindex
        const cleanAttrs = attrs
          .replace(/\s*class="[^"]*"/g, '')
          .replace(/\s*id="[^"]*"/g, '')
          .trim();
        return `<h2${cleanAttrs ? ' ' + cleanAttrs : ''} id="${cleanId}" class="text-3xl font-semibold text-foreground mt-10 mb-5 leading-tight border-b border-border pb-2 scroll-mt-24">${text}</h2>`;
      })
      .replace(/<h3([^>]*)>(.*?)<\/h3>/g, (match, attrs, text) => {
        const cleanId = generateId(text);
        // Remove existing class and id attributes, keep other attrs like tabindex
        const cleanAttrs = attrs
          .replace(/\s*class="[^"]*"/g, '')
          .replace(/\s*id="[^"]*"/g, '')
          .trim();
        return `<h3${cleanAttrs ? ' ' + cleanAttrs : ''} id="${cleanId}" class="text-2xl font-semibold text-foreground mt-8 mb-4 leading-snug scroll-mt-24">${text}</h3>`;
      })
      .replace(/<h4([^>]*)>(.*?)<\/h4>/g, (match, attrs, text) => {
        const id = generateId(text);
        return `<h4${attrs} id="${id}" class="text-xl font-semibold text-foreground mt-6 mb-3 leading-snug scroll-mt-24">${text}</h4>`;
      })
      .replace(/<h5([^>]*)>(.*?)<\/h5>/g, (match, attrs, text) => {
        const id = generateId(text);
        return `<h5${attrs} id="${id}" class="text-lg font-semibold text-foreground mt-5 mb-3 leading-snug scroll-mt-24">${text}</h5>`;
      })
      .replace(/<h6([^>]*)>(.*?)<\/h6>/g, (match, attrs, text) => {
        const id = generateId(text);
        return `<h6${attrs} id="${id}" class="text-base font-semibold text-foreground mt-4 mb-2 leading-snug scroll-mt-24">${text}</h6>`;
      })
      
      // Paragraphs with optimal line height and spacing
      .replace(/<p([^>]*)>/g, '<p$1 class="text-lg leading-relaxed text-foreground mb-6 max-w-none">')
      
      // Enhanced lists with better spacing
      .replace(/<ul([^>]*)>/g, '<ul$1 class="space-y-3 mb-6 ml-6">')
      .replace(/<ol([^>]*)>/g, '<ol$1 class="space-y-3 mb-6 ml-6 list-decimal">')
      .replace(/<li([^>]*)>/g, '<li$1 class="text-lg leading-relaxed text-foreground relative pl-2">')
      
      // Blockquotes with visual distinction
      .replace(/<blockquote([^>]*)>/g, '<blockquote$1 class="border-l-4 border-primary bg-secondary/30 pl-6 py-4 mb-6 italic text-lg rounded-r-lg">')
      
      // Code blocks with better styling
      .replace(/<pre([^>]*)>/g, '<pre$1 class="bg-secondary/80 border border-border rounded-lg p-6 mb-6 overflow-x-auto text-sm">')
      .replace(/<code([^>]*)>/g, '<code$1 class="bg-secondary/60 px-2 py-1 rounded text-sm font-mono border">')
      
      // Links with hover effects
      .replace(/<a([^>]*)>/g, '<a$1 class="text-primary hover:text-primary/80 underline decoration-2 underline-offset-2 transition-colors font-medium">')
      
      // Strong/bold text with better contrast
      .replace(/<strong([^>]*)>/g, '<strong$1 class="font-semibold text-foreground">')
      .replace(/<b([^>]*)>/g, '<b$1 class="font-semibold text-foreground">')
      
      // Emphasis with subtle styling
      .replace(/<em([^>]*)>/g, '<em$1 class="italic text-foreground/90">')
      .replace(/<i([^>]*)>/g, '<i$1 class="italic text-foreground/90">')
      
      // Images with responsive behavior, lazy loading, and optimization
      .replace(/<img([^>]*)>/g, (match, attrs) => {
        // Extract src if available
        const srcMatch = attrs.match(/src="([^"]*)"/);
        const altMatch = attrs.match(/alt="([^"]*)"/);

        const src = srcMatch ? srcMatch[1] : '';
        let alt = altMatch ? altMatch[1] : '';

        // If no alt text, create SEO-optimized alt from article context and keywords
        if (!alt && src) {
          const filename = src.split('/').pop()?.split('.')[0] || '';
          const baseDescription = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

          // Build context-aware alt text with relevant keywords
          const keywordPhrase = articleKeywords.length > 0
            ? articleKeywords.slice(0, 3).join(', ')  // Use top 3 keywords
            : articleCategory;

          // Create descriptive alt text: "Base description related to keywords"
          alt = keywordPhrase
            ? `${baseDescription} - ${keywordPhrase}`
            : baseDescription;
        }

        // Build optimized image tag
        let optimizedAttrs = attrs;

        // Remove existing alt if present, we'll add it back
        optimizedAttrs = optimizedAttrs.replace(/\s*alt="[^"]*"/g, '');

        // Add loading="lazy" if not present
        if (!optimizedAttrs.includes('loading=')) {
          optimizedAttrs += ' loading="lazy"';
        }

        // Add decoding="async" for better performance
        if (!optimizedAttrs.includes('decoding=')) {
          optimizedAttrs += ' decoding="async"';
        }

        return `<img${optimizedAttrs} alt="${alt}" class="rounded-lg shadow-md mb-6 max-w-full h-auto">`;
      })
      
      // Tables with modern styling
      .replace(/<table([^>]*)>/g, '<table$1 class="w-full border-collapse border border-border rounded-lg overflow-hidden mb-6 shadow-sm">')
      .replace(/<th([^>]*)>/g, '<th$1 class="bg-secondary text-foreground font-semibold p-4 text-left border-b border-border">')
      .replace(/<td([^>]*)>/g, '<td$1 class="p-4 border-b border-border text-foreground">')
      
      // Horizontal rules
      .replace(/<hr([^>]*)>/g, '<hr$1 class="border-0 border-t-2 border-border my-12">');
  };

  return (
    <div className="article-content">
      <div 
        className="prose-custom max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: processContent(content) 
        }} 
      />
      
      <style jsx>{`
        .article-content {
          font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Custom bullet points for lists */
        .prose-custom ul li::before {
          content: "•";
          color: hsl(var(--primary));
          position: absolute;
          left: -1rem;
          font-weight: bold;
          font-size: 1.2em;
        }
        
        /* Table striping */
        .prose-custom table tbody tr:nth-child(even) {
          background-color: hsl(var(--secondary) / 0.3);
        }
        
        /* Code syntax highlighting placeholder */
        .prose-custom pre code {
          background: transparent;
          border: none;
          padding: 0;
        }
        
        /* Focus states for accessibility */
        .prose-custom a:focus {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 2px;
          border-radius: 2px;
        }
        
        /* Responsive text scaling */
        @media (max-width: 768px) {
          .prose-custom h1 { font-size: 2rem; }
          .prose-custom h2 { font-size: 1.75rem; }
          .prose-custom h3 { font-size: 1.5rem; }
          .prose-custom p, .prose-custom li { font-size: 1rem; }
        }
        
        /* Print styles */
        @media print {
          .prose-custom {
            font-size: 12pt;
            line-height: 1.4;
          }
          .prose-custom h1, .prose-custom h2, .prose-custom h3 {
            page-break-after: avoid;
          }
          .prose-custom p, .prose-custom li {
            orphans: 2;
            widows: 2;
          }
        }
      `}</style>
    </div>
  );
};

export default ArticleContent;