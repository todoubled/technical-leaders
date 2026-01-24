import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Users, Zap, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { trackClick } from "@/utils/posthog";

interface ContentFooterProps {
  // Nurture Zone Configuration
  headline: string;
  description: string;

  // Next Step CTA
  primaryCTA: {
    text: string;
    url?: string;
    description?: string;
    onClick?: () => void;
  };

  // Value Props
  benefits?: string[];

  // Social Proof
  socialProof?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  testimonials?: Array<{
    name: string;
    role: string;
    location: string;
    avatar: string;
    content: string;
  }>;

  // Secondary Options
  secondaryCTA?: {
    text: string;
    url: string;
  };

  // Tracking
  trackingContext: string;
}

const ContentFooter = ({
  headline,
  description,
  primaryCTA,
  benefits,
  socialProof,
  testimonial,
  testimonials,
  secondaryCTA,
  trackingContext
}: ContentFooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Nurture Zone */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Main Offer Card */}
          <Card className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4 text-background">
                {primaryCTA.description || "Get Everything You Need to Succeed"}
              </h3>

              {/* Benefits Grid */}
              {benefits && benefits.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-background font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg sm:text-xl font-bold px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => {
                  trackClick(`${trackingContext} - Content Footer CTA`, {
                    location: 'content_footer',
                    destination: primaryCTA.url || 'custom_action'
                  });
                  if (primaryCTA.onClick) {
                    primaryCTA.onClick();
                  } else if (primaryCTA.url) {
                    window.location.href = primaryCTA.url;
                  }
                }}
              >
                <span className="flex items-center gap-3">
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Social Proof */}
            {socialProof && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <Users className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground font-semibold">
                  {socialProof}
                </p>
              </div>
            )}
          </Card>

          {/* Testimonials (if provided) */}
          {testimonials && testimonials.length > 0 && (
            <div className="mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  What Our Members Say
                </h3>
                <p className="text-muted-foreground">
                  Real results from tech leaders who've transformed their careers
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="relative bg-card border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="absolute top-4 left-4 opacity-10">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>

                      <div className="relative z-10">
                        <p className="text-foreground mb-8 leading-relaxed text-lg italic pt-4">
                          {testimonial.content}
                        </p>

                        <div className="flex items-center pt-4 border-t border-border">
                          <Avatar className="h-14 w-14 mr-4 ring-2 ring-primary/20">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-primary font-semibold text-lg">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                            <div className="text-muted-foreground text-sm font-medium">
                              {testimonial.role}{testimonial.location && ` • ${testimonial.location}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Single Testimonial (legacy support) */}
          {testimonial && !testimonials && (
            <Card className="p-6 bg-secondary/20 border-l-4 border-primary mb-8 max-w-3xl mx-auto">
              <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          )}

          {/* Secondary CTA / Contact */}
          <div className="text-center">
            {secondaryCTA ? (
              <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 border-2 border-gray-700 dark:border-gray-800 max-w-2xl mx-auto shadow-2xl">
                <p className="text-gray-300 dark:text-gray-400 mb-6 font-semibold text-lg">Want help?</p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    trackClick(`${trackingContext} - Secondary CTA`, {
                      location: 'content_footer',
                      destination: secondaryCTA.url
                    });
                    window.location.href = secondaryCTA.url;
                  }}
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-12 py-7 transition-all duration-300 transform hover:scale-105 group shadow-lg"
                >
                  <span className="flex items-center gap-3">
                    {secondaryCTA.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Card>
            ) : (
              <p className="text-muted-foreground text-lg">
                Questions? Email{" "}
                <a href="mailto:todd@technical-leaders.com" className="text-primary hover:underline font-semibold">
                  todd@technical-leaders.com
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Full Navigation Links */}
        <div className="border-t border-border pt-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo and Copyright */}
            <div className="md:col-span-2">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                © 2026 Tech Leaders. All rights reserved.
              </p>
            </div>

            {/* Programs Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/launch" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Launch Kit
                  </a>
                </li>
                <li>
                  <a href="/scale" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Scale Program
                  </a>
                </li>
                <li>
                  <a href="/ai-for-leaders" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    AI Executive Training
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/10-before-10" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    10 Before 10 Playbook
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Account</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://billing.stripe.com/p/login/28oaFm1om8Za4XC000"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    My Membership
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;
