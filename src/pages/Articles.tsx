import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');
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
          search: searchQuery || undefined,
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

  // Handle search with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentPage === 0) {
        const fetchArticles = async () => {
          setLoading(true);
          try {
            const params = {
              page: 0,
              pageSize: 12,
              category: selectedCategory === 'all' ? undefined : selectedCategory,
              search: searchQuery || undefined,
            };
            
            const response = await seobotClient.getArticles(params);
            setArticles(response.articles);
            setHasMore(response.hasMore);
          } catch (error) {
            console.error('Error searching articles:', error);
          } finally {
            setLoading(false);
          }
        };

        fetchArticles();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

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
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.slug)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <span className="text-xs font-semibold">{String(article.author?.avatar || 'A')}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{String(article.author?.name || 'Unknown Author')}</p>
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

      {/* CTA Section */}
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