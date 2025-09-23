
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackEvent } from "@/utils/posthog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technical Leaders - Get Promoted or Promote Yourself"
        description="Stop waiting for promotions. Join 300+ CTOs, VPs of Engineering, and tech executives who took control of their careers and built their own opportunities."
        keywords={['get promoted', 'tech promotion', 'technical leadership', 'CTO coaching', 'VP Engineering', 'career advancement', 'promote yourself']}
      />
      <Navigation />
      <Hero />

      {/* How It Works CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                See Exactly How We Help
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Watch our step-by-step process for launching and scaling consulting businesses using proven systems.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
                  onClick={() => {
                    trackEvent('See How It Works - Homepage CTA', {
                      location: 'homepage_after_hero'
                    });
                    window.location.href = '/how-it-works'
                  }}
                >
                  See How It Works
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 300+ technical leaders who've successfully launched consulting practices
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
