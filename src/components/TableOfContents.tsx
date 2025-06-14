import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { List, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Extract headings from content
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const items: TOCItem[] = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      const id = text.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .trim() || `heading-${index}`;
      
      return { id, text, level };
    });
    
    setTocItems(items);
  }, [content]);

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      
      let current = '';
      
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.id;
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <Card className="sticky top-24 mb-8">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <List className="h-5 w-5" />
            Table of Contents
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden"
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${isCollapsed ? '' : 'rotate-90'}`} />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className={`pt-0 ${isCollapsed ? 'hidden lg:block' : ''}`}>
        <nav className="space-y-1">
          {tocItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full justify-start text-left h-auto py-2 px-3 rounded-md
                text-sm transition-all hover:bg-secondary/80
                ${activeSection === item.id 
                  ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
                }
                ${item.level === 1 ? 'font-semibold' : ''}
                ${item.level === 2 ? 'ml-3' : ''}
                ${item.level === 3 ? 'ml-6' : ''}
                ${item.level === 4 ? 'ml-9' : ''}
                ${item.level >= 5 ? 'ml-12' : ''}
              `}
            >
              <span className="truncate leading-relaxed">
                {item.text}
              </span>
            </Button>
          ))}
        </nav>
        
        {/* Reading progress indicator */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground mb-2">Reading Progress</div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TableOfContents;