import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Download } from 'lucide-react';
import { trackEvent } from '../utils/posthog';

interface InlineArticleCTAProps {
  headline: string;
  description: string;
  primaryCTA: {
    text: string;
    url: string;
    label: string; // For analytics
  };
  secondaryCTA?: {
    text: string;
    url: string;
    label: string;
  };
  socialProof?: string;
  variant?: 'default' | 'subtle' | 'emphasis';
  articleSlug?: string;
}

export default function InlineArticleCTA({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  socialProof,
  variant = 'default',
  articleSlug
}: InlineArticleCTAProps) {

  const handleCTAClick = (ctaLabel: string, ctaUrl: string) => {
    trackEvent('article_inline_cta_clicked', {
      cta_label: ctaLabel,
      article_slug: articleSlug,
      cta_position: 'inline',
      cta_url: ctaUrl
    });
    window.location.href = ctaUrl;
  };

  const variantStyles = {
    default: 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20',
    subtle: 'bg-secondary/30 border-secondary',
    emphasis: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800'
  };

  return (
    <Card className={`my-8 border-2 ${variantStyles[variant]}`}>
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-background">
              {headline}
            </h3>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              onClick={() => handleCTAClick(primaryCTA.label, primaryCTA.url)}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {secondaryCTA && (
              <Button
                size="lg"
                variant="secondary"
                className="border-2 border-primary text-primary hover:bg-primary/10"
                onClick={() => handleCTAClick(secondaryCTA.label, secondaryCTA.url)}
              >
                {secondaryCTA.text}
                <Download className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {socialProof && (
            <p className="text-sm text-muted-foreground">
              {socialProof}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
