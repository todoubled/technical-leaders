import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react';
import { Article } from '../types/article';
import { useToast } from '../components/ui/use-toast';
import { seobotClient } from '../lib/seobot';
import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';
import TableOfContents from '../components/TableOfContents';
import ReadingProgress from '../components/ReadingProgress';

// Mock data - replace with SEObot API call
const mockArticle: Article = {
  id: '1',
  slug: 'scaling-engineering-teams-lessons-learned',
  title: 'Scaling Engineering Teams: Lessons Learned from 10x Growth',
  description: 'Practical insights on building and scaling high-performing engineering teams from seed to series C.',
  content: `
# Scaling Engineering Teams: Lessons Learned from 10x Growth

When I joined my last startup as VP of Engineering, we had 8 engineers. Two years later, we had 85. Here's what I learned about scaling engineering teams effectively while maintaining culture and velocity.

## The Challenge of Hypergrowth

Scaling an engineering team isn't just about hiring more people. It's about evolving your processes, culture, and technology choices to support a larger organization while maintaining the agility that made you successful in the first place.

### Key Challenges We Faced:
- **Communication overhead** increased exponentially
- **Decision-making** became slower and more complex
- **Technical debt** accumulated faster than we could address it
- **Culture dilution** threatened our core values
- **Onboarding efficiency** became critical to productivity

## Lessons Learned

### 1. Hire for Culture Add, Not Culture Fit

Instead of looking for people who fit our existing culture, we looked for those who could add to it. This approach brought diverse perspectives and helped us avoid groupthink.

**What worked:**
- Defined core values but left room for interpretation
- Celebrated different working styles and backgrounds
- Created inclusive interview processes

### 2. Invest in Developer Experience Early

As the team grew, small friction points became major productivity killers. We invested heavily in:
- **CI/CD pipelines** that could handle increased load
- **Development environments** that could be spun up in minutes
- **Documentation** that was searchable and up-to-date
- **Internal tools** that automated repetitive tasks

### 3. Structure Teams Around Business Domains

We moved from functional teams (frontend, backend, etc.) to cross-functional teams organized around business domains. This:
- Increased ownership and accountability
- Reduced dependencies between teams
- Improved time-to-market for features
- Made it easier to scale horizontally

### 4. Over-Communicate Everything

What felt like over-communication at 8 people was barely adequate at 85. We implemented:
- **Weekly all-hands** for engineering updates
- **Written culture** for important decisions
- **Public roadmaps** visible to everyone
- **Regular 1-on-1s** at all levels

### 5. Build Leadership from Within

Promoting from within helped maintain culture and provided growth paths for engineers. We:
- Created clear career ladders for both IC and management tracks
- Invested in leadership training and coaching
- Gave people stretch opportunities before formal promotions
- Celebrated both technical and people leadership

## The Results

After two years of hypergrowth:
- **Deployment frequency** increased 3x despite team size increasing 10x
- **Employee satisfaction** remained above 85%
- **Time to productivity** for new hires decreased from 3 months to 6 weeks
- **Technical debt** remained manageable through dedicated allocation

## Key Takeaways

1. **Culture is not static** - it should evolve with your team
2. **Process is necessary** but should enable, not constrain
3. **Communication can't be an afterthought** - it needs intentional design
4. **Leadership development** is as important as technical skills
5. **Measure what matters** - both output and team health

Scaling engineering teams is one of the hardest challenges in tech leadership. But with the right approach, you can grow rapidly while building something even better than what you started with.

*What's your experience with scaling engineering teams? I'd love to hear your stories and lessons learned.*
  `,
  author: {
    name: 'Todd Kerpelman',
    role: 'CTO Coach',
    avatar: 'TK'
  },
  publishedAt: '2024-01-15',
  updatedAt: '2024-01-16',
  category: 'Leadership',
  tags: ['Team Building', 'Scaling', 'Management', 'Engineering Culture'],
  featuredImage: '/placeholder.svg',
  readingTime: 8,
  seo: {
    metaTitle: 'Scaling Engineering Teams: Lessons from 10x Growth | Technical Leaders',
    metaDescription: 'Learn practical strategies for scaling engineering teams from 8 to 85 engineers while maintaining culture and velocity.',
    keywords: ['engineering team scaling', 'tech leadership', 'team growth', 'engineering management']
  }
};

// Related articles mock data
const relatedArticles: Article[] = [
  {
    id: '2',
    slug: 'building-high-performance-engineering-culture',
    title: 'Building a High-Performance Engineering Culture',
    description: 'How to create and maintain a culture of excellence in your engineering organization.',
    content: '',
    author: { name: 'Sara Mazer', role: 'Field CTO', avatar: 'SM' },
    publishedAt: '2024-01-12',
    category: 'Leadership',
    tags: ['Culture', 'Team Building'],
    readingTime: 10
  },
  {
    id: '3',
    slug: 'technical-debt-strategies-growing-teams',
    title: 'Managing Technical Debt in Growing Teams',
    description: 'Strategies for addressing technical debt while maintaining feature velocity.',
    content: '',
    author: { name: 'Miguel Suárez', role: 'Technical Director', avatar: 'MS' },
    publishedAt: '2024-01-08',
    category: 'Technical Strategy',
    tags: ['Technical Debt', 'Architecture'],
    readingTime: 12
  }
];

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        if (slug) {
          const articleData = await seobotClient.getArticle(slug);
          setArticle(articleData);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticle();
  }, [slug]);

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

  if (loading) {
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

  if (!article) {
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

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <SEO 
        title={article?.seo?.metaTitle || article?.title || 'Article'}
        description={article?.seo?.metaDescription || article?.description || 'Read this article on Technical Leaders'}
        keywords={article?.seo?.keywords || article?.tags || []}
        author={article?.author?.name}
        type="article"
        publishedTime={article?.publishedAt}
        modifiedTime={article?.updatedAt}
        section={article?.category}
        tags={article?.tags || []}
        image={article?.featuredImage}
        structuredData={article ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.description,
          "image": article.featuredImage,
          "datePublished": article.publishedAt,
          "dateModified": article.updatedAt || article.publishedAt,
          "author": {
            "@type": "Person",
            "name": article.author.name,
            "jobTitle": article.author.role
          },
          "publisher": {
            "@type": "Organization",
            "name": "Technical Leaders",
            "logo": {
              "@type": "ImageObject",
              "url": "https://technical-leaders.com/favicon.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://technical-leaders.com/post/${article.slug}`
          }
        } : undefined}
      />
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate('/articles')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>

          {/* Article meta */}
          <div className="max-w-4xl mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge>{article.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="font-semibold">{article.author.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold">{article.author.name}</p>
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
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article layout with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3">
              <ArticleContent content={article.content} />
            </div>
            
            {/* Sidebar with Table of Contents */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <TableOfContents content={article.content} />
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

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Get Technical Leadership Insights
              </h2>
              <p className="text-xl mb-6 text-white/90">
                Join thousands of technical leaders getting weekly insights on scaling teams, career growth, and building better products.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = 'https://techleaders.kit.com/playbook'}
              >
                Get the Playbook
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}