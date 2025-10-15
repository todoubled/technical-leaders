import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Mail } from 'lucide-react';
import { trackEvent } from '../utils/posthog';

interface StickySidebarCTAProps {
  scrollProgress: number;
  articleSlug?: string;
}

export default function StickySidebarCTA({ scrollProgress, articleSlug }: StickySidebarCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show CTA after 30% scroll
    setIsVisible(scrollProgress >= 0.3);
  }, [scrollProgress]);

  const handleCTAClick = (ctaType: string, url: string) => {
    trackEvent('article_sidebar_cta_clicked', {
      cta_type: ctaType,
      article_slug: articleSlug,
      scroll_progress: Math.round(scrollProgress * 100),
      cta_position: 'sticky-sidebar'
    });
    window.location.href = url;
  };

  // Determine which CTA to show based on scroll progress
  const getCTAContent = () => {
    if (scrollProgress < 0.5) {
      return {
        type: 'soft',
        headline: 'Loving this content?',
        description: 'Get proven strategies in your inbox weekly',
        ctaText: 'Subscribe for Free',
        ctaUrl: 'https://techleaders.kit.com/playbook?utm_source=technical-leaders-blog-sidebar',
        icon: Mail
      };
    } else if (scrollProgress < 0.9) {
      return {
        type: 'medium',
        headline: 'Found this valuable?',
        description: 'See how we help leaders like you monetize expertise',
        ctaText: 'See How It Works',
        ctaUrl: '/how-it-works',
        icon: ArrowRight
      };
    } else {
      return {
        type: 'strong',
        headline: 'Ready to take action?',
        description: 'Turn your technical expertise into revenue',
        ctaText: 'Get Started',
        ctaUrl: '/how-it-works',
        icon: ArrowRight
      };
    }
  };

  const content = getCTAContent();
  const Icon = content.icon;

  if (!isVisible) return null;

  return (
    <div
      className={`
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <Card className="sticky top-24 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
        <CardContent className="p-5">
          <div className="space-y-3">
            <h4 className="font-bold text-lg">
              {content.headline}
            </h4>
            <p className="text-sm text-muted-foreground">
              {content.description}
            </p>
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              onClick={() => handleCTAClick(content.type, content.ctaUrl)}
            >
              {content.ctaText}
              <Icon className="ml-2 h-4 w-4" />
            </Button>
            {content.type === 'soft' && (
              <p className="text-xs text-muted-foreground text-center">
                Join 300+ technical leaders
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
