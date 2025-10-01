import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MessageSquare, Zap } from "lucide-react";
import { trackClick } from "@/utils/posthog";

interface DecisionOption {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
    variant?: "primary" | "secondary" | "outline";
  };
  benefits: string[];
  badge?: string;
}

interface DecisionFooterProps {
  // Main headline
  headline: string;
  subheadline?: string;

  // Decision paths
  options: DecisionOption[];

  // Help text
  helpText?: string;
  helpCTA?: {
    text: string;
    url: string;
  };

  // Tracking
  trackingContext: string;
}

const DecisionFooter = ({
  headline,
  subheadline,
  options,
  helpText,
  helpCTA,
  trackingContext
}: DecisionFooterProps) => {
  const getButtonClasses = (variant?: string) => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white";
      case "secondary":
        return "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white";
      case "outline":
        return "border-2 border-primary text-primary hover:bg-primary/10";
      default:
        return "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white";
    }
  };

  return (
    <footer className="bg-gradient-to-br from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-xl text-muted-foreground">
              {subheadline}
            </p>
          )}
        </div>

        {/* Decision Options Grid */}
        <div className={`grid md:grid-cols-${Math.min(options.length, 3)} gap-8 max-w-6xl mx-auto mb-12`}>
          {options.map((option, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col border-2 bg-gradient-to-br from-card to-secondary/5">
              {/* Badge */}
              {option.badge && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                  ⭐ {option.badge}
                </div>
              )}

              {/* Title & Description */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {option.description}
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-4 mb-8 flex-grow">
                {option.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full font-bold py-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${getButtonClasses(option.cta.variant)}`}
                onClick={() => {
                  trackClick(`${trackingContext} - ${option.title}`, {
                    location: 'decision_footer',
                    destination: option.cta.url
                  });
                  window.location.href = option.cta.url;
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {option.cta.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        {(helpText || helpCTA) && (
          <div className="text-center max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-lg text-background font-bold">
                    {helpText || "Still deciding?"}
                  </p>
                </div>
                {helpCTA && (
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => {
                      trackClick(`${trackingContext} - Help CTA`, {
                        location: 'decision_footer_help',
                        destination: helpCTA.url
                      });
                      window.location.href = helpCTA.url;
                    }}
                  >
                    {helpCTA.text}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Navigation Links */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-6 w-auto" />
              <p className="text-sm text-muted-foreground">
                © 2025 Tech Leaders. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/alternative-to-mba" className="text-muted-foreground hover:text-primary transition-colors">
                Compare Options
              </a>
              <a href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                Resources
              </a>
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="mailto:todd@technical-leaders.com" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DecisionFooter;
