
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);

  const featuredArticles = [
    {
      title: "Scaling Engineering Teams: Lessons from 10x Growth",
      slug: "scaling-engineering-teams-lessons-learned",
      description: "How to grow your engineering team from 5 to 50 people while maintaining culture and productivity.",
      category: "Leadership",
      readingTime: 8,
      author: "Todd Kerpelman",
      image: "/placeholder.svg"
    },
    {
      title: "AI Tools Every Technical Leader Should Know in 2024",
      slug: "ai-tools-technical-leaders-2024", 
      description: "The essential AI productivity tools that can 10x your team's output without getting technical.",
      category: "AI & Tools",
      readingTime: 10,
      author: "Sara Mazer",
      image: "/ai-playbook-executives.png"
    },
    {
      title: "The Complete Guide to Tech Leadership Compensation",
      slug: "negotiating-tech-leadership-compensation",
      description: "Everything you need to know about negotiating salary, equity, and benefits as a technical leader.",
      category: "Career Growth",
      readingTime: 12,
      author: "Miguel Suárez",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { name: "Leadership", count: 12, description: "Team building, management, culture" },
    { name: "AI & Tools", count: 8, description: "AI productivity, technical tools" },
    { name: "Career Growth", count: 15, description: "Compensation, career advancement" },
    { name: "Technical Strategy", count: 10, description: "Architecture, technical decisions" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/"><img src="/orange-logo.png" alt="Tech Leaders" className="h-10 w-auto" /></a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors flex items-center">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => window.location.href = "/launch-with-us"}>
                    Launch Kit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = "/ship-ai"}>
                    Ship AI
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.location.href = "/ai-for-vc"}>
                    AI for VCs
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsArticlesOpen(true)}
                onMouseLeave={() => setIsArticlesOpen(false)}
              >
                <button
                  className="text-foreground hover:text-primary transition-colors flex items-center py-2"
                  onClick={() => window.location.href = "/articles"}
                >
                  Articles <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isArticlesOpen && (
                  <>
                    {/* Invisible bridge to maintain hover state */}
                    <div className="absolute top-full left-0 right-0 h-2" />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                      <div className="bg-background border border-border rounded-lg shadow-lg p-6 w-[900px] z-50">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Left Column - Categories */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Browse by Category</h3>
                        <div className="space-y-3">
                          {categories.map((category, index) => (
                            <div key={index} className="group cursor-pointer" onClick={() => window.location.href = `/articles?category=${encodeURIComponent(category.name)}`}>
                              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                                <div>
                                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                    {category.name}
                                    <span className="ml-2 text-sm text-muted-foreground">({category.count})</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground">{category.description}</div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Column - Featured Articles */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Featured Articles</h3>
                        <div className="space-y-4">
                          {featuredArticles.map((article, index) => (
                            <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => window.location.href = `/post/${article.slug}`}>
                              <div className="flex gap-4">
                                <img 
                                  src={article.image} 
                                  alt={article.title}
                                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                />
                                <div className="space-y-2 flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                      {article.category}
                                    </span>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {article.readingTime} min read
                                    </div>
                                  </div>
                                  <h4 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 text-sm">
                                    {article.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {article.description}
                                  </p>
                                  <div className="text-xs text-muted-foreground">
                                    by {article.author}
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border">
                          <button 
                            className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm font-medium"
                            onClick={() => window.location.href = "/articles"}
                          >
                            View All Articles <ArrowRight className="ml-1 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  </>
                )}
              </div>
              
              <a href="https://techleaders.kit.com/playbook?utm_source=technical-leaders" target="_blank" className="text-foreground hover:text-primary transition-colors">Get the Playbook</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => { window.location.href = "https://skool.com/tech-leaders" }}>Sign In</Button>
            <Button onClick={() => { window.location.href = "/call" }}>Book Intro Call</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-foreground">
              <div className="font-medium mb-2">Programs</div>
              <div className="ml-4 space-y-1">
                <a href="/launch-with-us" className="block py-1 text-sm text-muted-foreground hover:text-primary">Launch Kit</a>
                <a href="/ship-ai" className="block py-1 text-sm text-muted-foreground hover:text-primary">Ship AI</a>
                <a href="/ai-for-vc" className="block py-1 text-sm text-muted-foreground hover:text-primary">AI for VCs</a>
              </div>
            </div>
            <a href="/articles" className="block px-3 py-2 text-foreground hover:text-primary">Articles</a>
            <a href="https://techleaders.kit.com/playbook?utm_source=technical-leaders" target="_blank" className="block px-3 py-2 text-foreground hover:text-primary">Get the Playbook</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full" onClick={() => { window.location.href = "https://skool.com/tech-leaders" }}>Sign In</Button>
              <Button className="w-full" onClick={() => { window.location.href = "/call" }}>Book Intro Call</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
