import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Share2, Sparkles, ArrowRight } from "lucide-react";
import { trackClick } from "@/utils/posthog";

interface ConfirmationFooterProps {
  // Confirmation message
  headline: string;
  description: string;

  // Primary next action
  primaryAction: {
    text: string;
    url: string;
    icon?: "users" | "gift" | "sparkles";
  };

  // Upsell/Cross-sell (optional)
  upsell?: {
    title: string;
    description: string;
    discount?: string;
    cta: {
      text: string;
      url: string;
    };
  };

  // Referral incentive (optional)
  referral?: {
    headline: string;
    description: string;
    incentive: string;
    cta: {
      text: string;
      url: string;
    };
  };

  // Additional resources
  resources?: Array<{
    title: string;
    url: string;
  }>;

  // Tracking
  trackingContext: string;
}

const ConfirmationFooter = ({
  headline,
  description,
  primaryAction,
  upsell,
  referral,
  resources,
  trackingContext
}: ConfirmationFooterProps) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "users":
        return Users;
      case "gift":
        return Gift;
      case "sparkles":
        return Sparkles;
      default:
        return Users;
    }
  };

  const PrimaryIcon = getIcon(primaryAction.icon);

  return (
    <footer className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-t border-green-200 dark:border-green-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Primary Action */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-purple-500/5 border-2 border-primary/20">
            <PrimaryIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Next Step
            </h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg sm:text-xl font-bold px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => {
                trackClick(`${trackingContext} - Primary Action`, {
                  location: 'confirmation_footer',
                  destination: primaryAction.url
                });
                window.location.href = primaryAction.url;
              }}
            >
              <span className="flex items-center gap-3">
                {primaryAction.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-${upsell && referral ? '2' : '1'} gap-8 mb-12`}>
            {/* Upsell Section */}
            {upsell && (
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-xl font-bold text-foreground">
                    {upsell.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {upsell.description}
                </p>
                {upsell.discount && (
                  <div className="bg-orange-100 dark:bg-orange-900/40 rounded-lg px-4 py-2 mb-4 inline-block">
                    <p className="text-sm font-bold text-orange-700 dark:text-orange-300">
                      🎁 {upsell.discount}
                    </p>
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full border-orange-300 dark:border-orange-700 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40"
                  onClick={() => {
                    trackClick(`${trackingContext} - Upsell`, {
                      location: 'confirmation_footer_upsell',
                      destination: upsell.cta.url
                    });
                    window.location.href = upsell.cta.url;
                  }}
                >
                  {upsell.cta.text}
                </Button>
              </Card>
            )}

            {/* Referral Section */}
            {referral && (
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-4">
                  <Share2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-foreground">
                    {referral.headline}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {referral.description}
                </p>
                <div className="bg-purple-100 dark:bg-purple-900/40 rounded-lg px-4 py-2 mb-4">
                  <p className="text-sm font-bold text-purple-700 dark:text-purple-300">
                    💰 {referral.incentive}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                  onClick={() => {
                    trackClick(`${trackingContext} - Referral`, {
                      location: 'confirmation_footer_referral',
                      destination: referral.cta.url
                    });
                    window.location.href = referral.cta.url;
                  }}
                >
                  {referral.cta.text}
                </Button>
              </Card>
            )}
          </div>

          {/* Additional Resources */}
          {resources && resources.length > 0 && (
            <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                📚 Helpful Resources While You Wait
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    onClick={() => {
                      trackClick(`${trackingContext} - Resource: ${resource.title}`, {
                        location: 'confirmation_footer_resources',
                        destination: resource.url
                      });
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    {resource.title} →
                  </a>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Minimal Footer */}
        <div className="border-t border-border pt-8 mt-12 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <img src="/orange-logo.png" alt="Tech Leaders" className="h-6 w-auto" />
            <span>© 2026 Tech Leaders. All rights reserved.</span>
            <span>•</span>
            <a href="mailto:todd@technical-leaders.com" className="hover:text-primary transition-colors">
              Questions? Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConfirmationFooter;
