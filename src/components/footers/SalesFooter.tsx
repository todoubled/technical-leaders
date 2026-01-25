import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Star, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { trackClick } from "@/utils/posthog";

interface SalesFooterProps {
  // Main CTA Configuration
  headline: string;
  subheadline?: string;
  primaryCTA: {
    text: string;
    url: string;
    price?: string;
  };

  // Urgency & Social Proof
  urgency?: {
    text: string;
    icon?: "alert" | "clock";
  };
  socialProof?: string;
  guarantee?: {
    text: string;
    description?: string;
  };

  // Secondary Options
  secondaryCTA?: {
    text: string;
    url: string;
  };

  // Stats/Metrics
  stats?: Array<{
    number: string;
    label: string;
  }>;

  // Tracking
  trackingContext: string;
}

const SalesFooter = ({
  headline,
  subheadline,
  primaryCTA,
  urgency,
  socialProof,
  guarantee,
  secondaryCTA,
  stats,
  trackingContext
}: SalesFooterProps) => {
  const UrgencyIcon = urgency?.icon === "clock" ? Clock : AlertTriangle;

  return (
    <footer className="bg-gradient-to-br from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Conversion Zone */}
        <div className="max-w-4xl mx-auto">
          {/* Stats Row (if provided) */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 bg-gradient-to-br from-card to-primary/5">
                  <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          )}

          {/* Main CTA Card */}
          <Card className="p-8 sm:p-12 mb-8 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 shadow-xl">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {headline}
              </h3>
              {subheadline && (
                <p className="text-xl text-muted-foreground mb-8">
                  {subheadline}
                </p>
              )}

              {/* Primary CTA */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-12 py-7 mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => {
                  trackClick(`${trackingContext} - Primary CTA`, {
                    location: 'sales_footer',
                    destination: primaryCTA.url
                  });
                  window.location.href = primaryCTA.url;
                }}
              >
                <span className="flex items-center gap-3">
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Trust Elements Row */}
              <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                {urgency && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-full">
                    <UrgencyIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm">{urgency.text}</span>
                  </div>
                )}
                {socialProof && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
                    <Star className="w-5 h-5 text-green-600 dark:text-green-400 fill-green-600 dark:fill-green-400" />
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">{socialProof}</span>
                  </div>
                )}
                {guarantee && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{guarantee.text}</span>
                  </div>
                )}
              </div>

              {/* Guarantee Description */}
              {guarantee?.description && (
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {guarantee.description}
                </p>
              )}
            </div>
          </Card>

          {/* Secondary CTA */}
          {secondaryCTA && (
            <div className="text-center">
              <Card className="p-6 bg-secondary/30 border border-border">
                <p className="text-muted-foreground mb-3 font-medium">Not ready yet?</p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    trackClick(`${trackingContext} - Secondary CTA`, {
                      location: 'sales_footer',
                      destination: secondaryCTA.url
                    });
                    window.location.href = secondaryCTA.url;
                  }}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 transition-all duration-300 group"
                >
                  {secondaryCTA.text}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </div>
          )}
        </div>

        {/* Minimal Navigation Links */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-6 w-auto" />
              <p className="text-sm text-muted-foreground">
                © 2026 Tech Leaders. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="https://billing.stripe.com/p/login/28oaFm1om8Za4XC000" className="text-muted-foreground hover:text-primary transition-colors">
                My Membership
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

export default SalesFooter;
