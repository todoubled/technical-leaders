import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingLibraryCTA from '../components/FloatingLibraryCTA';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react';
import { Article } from '../types/article';
import { useToast } from '../components/ui/use-toast';
import { articleUtils } from '../lib/seobot';
import { getArticleSync, loadArticle, hasArticle, getRelatedArticles } from '../lib/articles';
import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';
import TableOfContents from '../components/TableOfContents';
import ReadingProgress from '../components/ReadingProgress';
import InlineArticleCTA from '../components/InlineArticleCTA';
import StickySidebarCTA from '../components/StickySidebarCTA';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { trackEvent } from '../utils/posthog';
import { toISODateTime } from '../utils/seo-helpers';

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  // Resolve the article from the committed snapshot synchronously when its body is
  // already available — i.e. on a prerendered /post/:slug page (the build inlines
  // the body) or after it's been loaded this session. This makes the full content
  // present on first paint and lets hydration match the prerendered markup.
  const [article, setArticle] = useState<Article | null>(() =>
    slug ? getArticleSync(slug) : null
  );
  // `null` until we know: only show "not found" after a load attempt resolves.
  const [notFound, setNotFound] = useState(false);

  // Track scroll progress for dynamic CTAs
  const { scrollProgress, scrollDepth, hasReachedMidpoint, hasReachedEnd, timeOnPage, maxScrollDepth } = useScrollTracking();

  // Read the article from the local snapshot (replaces the runtime SEObot call).
  // Synchronous when the body is already available; otherwise lazy-load the
  // code-split body (client-side navigation between articles).
  useEffect(() => {
    setNotFound(false);
    if (!slug) {
      setArticle(null);
      return;
    }
    const sync = getArticleSync(slug);
    if (sync) {
      setArticle(sync);
      return;
    }
    if (!hasArticle(slug)) {
      setArticle(null);
      setNotFound(true);
      return;
    }
    let active = true;
    setArticle(null);
    loadArticle(slug).then((loaded) => {
      if (!active) return;
      setArticle(loaded);
      setNotFound(!loaded);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  // Related articles, derived from the snapshot (same category first).
  const relatedArticles = article ? getRelatedArticles(article, 3) : [];

  // Track scroll milestones for analytics
  useEffect(() => {
    if (!article) return;

    const milestones = [25, 50, 75, 90];
    const tracked = new Set<number>();

    milestones.forEach(milestone => {
      if (scrollDepth >= milestone && !tracked.has(milestone)) {
        trackEvent('article_scroll_depth', {
          article_slug: slug,
          scroll_depth: milestone,
          time_on_page: timeOnPage,
          article_title: article.title
        });
        tracked.add(milestone);
      }
    });
  }, [scrollDepth, article, slug, timeOnPage]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareArticle = (platform: 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const title = article?.title || '';

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Article link copied to clipboard",
        });
        break;
    }
  };

  if (!article && notFound) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-32">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Button onClick={() => navigate('/articles')}>
            Back to Articles
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-32">
          <p className="text-muted-foreground">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <SEO
        title={article?.seo?.metaTitle || article?.title || 'Article'}
        description={article?.seo?.metaDescription || article?.description || 'Read this article on Technical Leaders'}
        keywords={article?.seo?.keywords || article?.tags || []}
        author={article?.author?.name}
        url={`https://technical-leaders.com/post/${article.slug}`}
        type="article"
        publishedTime={article?.publishedAt}
        modifiedTime={article?.updatedAt}
        section={article?.category}
        tags={article?.tags || []}
        image={article?.featuredImage}
        structuredData={article ? (() => {
          const schemas = [];
          const articleUrl = `https://technical-leaders.com/post/${article.slug}`;

          // BlogPosting schema
          schemas.push({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${articleUrl}#article`,
            "headline": article.title,
            "description": article.description,
            "image": article.featuredImage,
            "datePublished": toISODateTime(article.publishedAt),
            "dateModified": toISODateTime(article.updatedAt || article.publishedAt),
            "author": {
              "@type": "Person",
              "name": article.author.name,
              "jobTitle": article.author.role,
              ...(article.author.profile && { "url": article.author.profile })
            },
            "publisher": {
              "@type": "Organization",
              "name": "Technical Leaders",
              "url": "https://technical-leaders.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://technical-leaders.com/favicon.webp"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleUrl
            },
            "url": articleUrl,
            "inLanguage": "en-US",
            "keywords": article.tags.join(', '),
            "articleSection": article.category,
            "wordCount": article.content.replace(/<[^>]*>/g, '').trim().split(/\s+/).length,
            "timeRequired": `PT${article.readingTime}M`
          });

          // Extract and add FAQ schema if FAQs exist
          const faqs = articleUtils.extractFAQs(article.content);
          if (faqs.length > 0) {
            schemas.push({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${articleUrl}#faq`,
              "inLanguage": "en-US",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "@id": `${articleUrl}#faq-question-${index + 1}`,
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "@id": `${articleUrl}#faq-answer-${index + 1}`,
                  "text": faq.answer
                }
              }))
            });
          }

          // Add HowTo schema for tutorial/guide articles
          const tutorialKeywords = ['guide', 'step', 'how to', 'tutorial', 'framework'];
          const isTutorial = tutorialKeywords.some(keyword =>
            article.title.toLowerCase().includes(keyword) ||
            article.slug.includes(keyword)
          );

          if (isTutorial) {
            const howToSteps = articleUtils.extractHowToSteps(article.content, article.title);
            if (howToSteps.length > 0) {
              schemas.push({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "@id": `${articleUrl}#howto`,
                "inLanguage": "en-US",
                "name": article.title,
                "description": article.description,
                "image": article.featuredImage,
                "totalTime": `PT${article.readingTime}M`,
                "step": howToSteps.map((step, index) => ({
                  "@type": "HowToStep",
                  "@id": `${articleUrl}${step.url}`,
                  "position": index + 1,
                  "name": step.name,
                  "text": step.text,
                  "url": `${articleUrl}${step.url}`
                }))
              });
            }
          }

          // Add BreadcrumbList schema for navigation
          schemas.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${articleUrl}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://technical-leaders.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://technical-leaders.com/articles"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.category,
                "item": `https://technical-leaders.com/articles?category=${article.category.toLowerCase().replace(/\s+/g, '-')}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": article.title,
                "item": articleUrl
              }
            ]
          });

          return schemas;
        })() : undefined}
      />
      <Navigation />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <a href="/articles" className="hover:text-foreground transition-colors">Blog</a>
            <span>/</span>
            <span className="text-foreground font-medium">{article?.category}</span>
          </nav>

          {/* Back button */}
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/articles')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>

          {/* Article meta */}
          <div className="max-w-4xl mb-8">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <Badge>{article.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Published {formatDate(article.publishedAt)}</span>
              </div>
              {article.updatedAt && article.updatedAt !== article.publishedAt && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {formatDate(article.updatedAt)}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {article.description}
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
{article.author.profile ? (
                  <a
                    href={article.author.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all"
                  >
                    {article.author.avatar && article.author.avatar.startsWith('http') ? (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                        <span className="font-semibold">{article.author.avatar}</span>
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {article.author.avatar && article.author.avatar.startsWith('http') ? (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                        <span className="font-semibold">{article.author.avatar}</span>
                      </div>
                    )}
                  </div>
                )}
                <div>
                  {article.author.profile ? (
                    <a
                      href={article.author.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {article.author.name}
                    </a>
                  ) : (
                    <p className="font-semibold">{article.author.name}</p>
                  )}
                  {article.author.role && (
                    <p className="text-sm text-muted-foreground">{article.author.role}</p>
                  )}
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => shareArticle('twitter')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => shareArticle('linkedin')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => shareArticle('copy')}
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="mb-8 max-w-4xl" />

          {/* Featured image */}
          {article.featuredImage && (
            <div className="aspect-video relative overflow-hidden rounded-lg mb-12 bg-secondary max-w-4xl">
              <img
                src={article.featuredImage}
                alt={article.featuredImageAlt || `Featured image for article: ${article.title}`}
                width="1200"
                height="675"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article layout with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <ArticleContent
                content={article.content}
                articleTitle={article.title}
                articleKeywords={article.seo?.keywords || article.tags}
                articleCategory={article.category}
              />

              {/* Inline CTA - appears after content, contextual to article category */}
              <InlineArticleCTA
                headline="Get Help Applying This Strategy"
                description="See exactly how 300+ technical leaders use strategies like this to build consulting practices"
                primaryCTA={{
                  text: "See How It Works",
                  url: "/how-it-works",
                  label: "How It Works - Inline Article CTA"
                }}
                secondaryCTA={{
                  text: "Get Free Playbook",
                  url: "https://techleaders.kit.com/playbook?utm_source=technical-leaders-blog-inline",
                  label: "Free Playbook - Inline Article CTA"
                }}
                socialProof="Join 300+ CTOs using proven frameworks"
                variant="emphasis"
                articleSlug={slug}
              />
            </div>

            {/* Sidebar with Table of Contents and Dynamic CTA */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="space-y-6">
                {/* Show TOC early, then transition to sticky CTA */}
                {scrollProgress < 0.3 ? (
                  <TableOfContents content={article.content} />
                ) : (
                  <>
                    <TableOfContents content={article.content} />
                    <StickySidebarCTA
                      scrollProgress={scrollProgress}
                      articleSlug={slug}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Tags and Share CTA - within main content area */}
          <div className="lg:col-span-3">
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold">Tags:</span>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share CTA */}
            <Card className="mt-8 bg-secondary/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Found this helpful?</h3>
                <p className="text-muted-foreground mb-4">Share it with your network</p>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => shareArticle('twitter')}
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Share on Twitter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => shareArticle('linkedin')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Share on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Card
                key={related.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/post/${related.slug}`)}
              >
                <CardContent className="p-6">
                  <Badge className="mb-3">{related.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {related.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{formatDate(related.publishedAt)}</span>
                    <span>{related.readingTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Turn Your Expertise Into Revenue?
              </h2>
              <p className="text-xl mb-6 text-muted-foreground">
                See exactly how we help technical leaders like you launch and scale consulting businesses using proven systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  onClick={() => {
                    // Track the click
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'How It Works - Article Page',
                        page_location: window.location.href
                      });
                    }
                    window.location.href = '/how-it-works'
                  }}
                >
                  See How It Works
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    // Track the click
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'Free Playbook - Article Page',
                        page_location: window.location.href
                      });
                    }
                    window.location.href = 'https://techleaders.kit.com/playbook?utm_source=technical-leaders-blog'
                  }}
                >
                  Get Free Playbook
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 300+ technical leaders who've successfully launched consulting practices
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FloatingLibraryCTA />
      <Footer />
    </div>
  );
}