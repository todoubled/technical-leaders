import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Article, ArticleCategory } from '../types/article';
import { seobotClient } from '../lib/seobot';
import SEO from '../components/SEO';

const categories: ArticleCategory[] = [
  { id: '1', name: 'All Articles', slug: 'all' },
  { id: '2', name: 'Leadership', slug: 'leadership' },
  { id: '3', name: 'AI & Tools', slug: 'ai-tools' },
  { id: '4', name: 'Career Growth', slug: 'career-growth' },
  { id: '5', name: 'Technical Strategy', slug: 'technical-strategy' }
];

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Fetch articles from SEObot
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const params = {
          page: currentPage,
          pageSize: 12,
          category: selectedCategory === 'all' ? undefined : selectedCategory,
        };
        
        const response = await seobotClient.getArticles(params);
        
        if (currentPage === 0) {
          setArticles(response.articles);
        } else {
          setArticles(prev => [...prev, ...response.articles]);
        }
        
        setHasMore(response.hasMore);
      } catch (error) {
        console.error('Error fetching articles:', error);
        // Articles will remain empty array and show no results
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setArticles([]);
  };

  const loadMoreArticles = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Articles are already filtered by the API calls, so just use them directly
  const filteredArticles = articles;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technical Leadership Articles - Proven Strategies from 300+ CTOs"
        description="Practical insights from CTOs, VPs of Engineering, and tech executives. Real-world strategies for scaling teams, advancing careers, and building authority in 2024."
        keywords={['technical leadership articles', 'CTO insights', 'engineering management', 'tech leadership blog', 'career development', 'scaling engineering teams']}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">Technical Leadership Insights</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Articles & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Practical insights, strategies, and tools for technical leaders looking to scale their impact and income.
          </p>

          {/* CTA Section - Moved to top */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Turn Your Expertise Into Revenue?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              See exactly how we help technical leaders launch consulting businesses using proven systems.
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
                      event_label: 'How It Works - Articles Hero',
                      page_location: window.location.href
                    });
                  }
                  window.location.href = "/how-it-works"
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
                      event_label: 'Free Playbook - Articles Hero',
                      page_location: window.location.href
                    });
                  }
                  window.location.href = "https://techleaders.kit.com/playbook?utm_source=technical-leaders-articles-hero"
                }}
              >
                Get Free Playbook
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 300+ technical leaders who've successfully launched consulting practices
            </p>
          </div>
        </div>
      </section>


      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden"
                  onClick={() => window.location.href = `/post/${article.slug}`}>
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/30">
                    {article.featuredImage && (
                      <img 
                        src={article.featuredImage} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <Badge className="absolute top-4 left-4">{String(article.category || 'General')}</Badge>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {String(article.title || 'Untitled')}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mt-2">
                      {String(article.description || '')}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readingTime} min</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
{article.author?.profile ? (
                          <a 
                            href={String(article.author.profile)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {article.author?.avatar && String(article.author.avatar).startsWith('http') ? (
                              <img 
                                src={String(article.author.avatar)} 
                                alt={String(article.author?.name || 'Author')}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                <span className="text-xs font-semibold">{String(article.author?.avatar || 'A')}</span>
                              </div>
                            )}
                          </a>
                        ) : (
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            {article.author?.avatar && String(article.author.avatar).startsWith('http') ? (
                              <img 
                                src={String(article.author.avatar)} 
                                alt={String(article.author?.name || 'Author')}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                <span className="text-xs font-semibold">{String(article.author?.avatar || 'A')}</span>
                              </div>
                            )}
                          </div>
                        )}
                        <div>
                          {article.author?.profile ? (
                            <a 
                              href={String(article.author.profile)} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-medium hover:text-primary transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {String(article.author?.name || 'Unknown Author')}
                            </a>
                          ) : (
                            <p className="text-sm font-medium">{String(article.author?.name || 'Unknown Author')}</p>
                          )}
                          {article.author?.role && (
                            <p className="text-xs text-muted-foreground">{String(article.author.role)}</p>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {/* Load More */}
          {hasMore && filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline"
                onClick={loadMoreArticles}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More Articles'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contributors CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Contribute?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Share your technical leadership insights with our community of senior tech leaders.
          </p>
          <Button size="lg" onClick={() => window.location.href = "/call"}>
            Become a Contributor
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}