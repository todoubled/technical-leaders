// Article content utilities used at render time.
//
// NOTE: The app no longer calls the SEObot API at runtime. Articles are read from
// the committed snapshot in src/data/articles/ via src/lib/articles.ts. The
// SEObot -> Article conversion logic and the custom override maps
// (ARTICLE_PUBLISHED_DATES, ARTICLE_UPDATED_DATES, ARTICLE_KEYWORDS_MAP,
// ARTICLE_IMAGE_ALT_TEXT) now live in scripts/lib/article-converter.mjs and are
// baked into the snapshot by `npm run fetch-articles`.
//
// What remains here is `articleUtils`: pure helpers that derive structured data
// (FAQ / HowTo schema) and excerpts from an article's HTML at render time. These
// are still used by the article page to build JSON-LD.

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
