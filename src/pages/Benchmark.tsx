import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users, ArrowRight, Award, Zap, BarChart3 } from "lucide-react";
import SEO from "@/components/SEO";

const Benchmark = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Benchmark Your Leadership - Technical Leaders"
        description="Discover how your technical leadership skills compare to top executives and get a personalized action plan to accelerate your career growth."
        keywords={['technical leadership assessment', 'CTO benchmark', 'tech executive skills', 'leadership evaluation']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Convincer Copy */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  Free Launch Strategy Session
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Ready to <span className="text-orange-500">Productize Your Expertise?</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Join 300+ technical experts who've turned their knowledge into scalable businesses generating $10K-$50K/month in additional income.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">In Your Strategy Session, You'll Discover:</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Your Ideal Client Profile</h4>
                      <p className="text-muted-foreground">
                        Identify the exact companies and decision-makers who need your expertise and will pay premium rates for it
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Your $10K+ Offer Framework</h4>
                      <p className="text-muted-foreground">
                        Package your years of experience into a high-value service that practically sells itself
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Your 30-Day Launch Plan</h4>
                      <p className="text-muted-foreground">
                        Get a step-by-step roadmap to land your first high-paying client within 30 days
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">See If Launch Kit Is Right For You</h4>
                      <p className="text-muted-foreground">
                        Learn how our done-for-you systems can help you build a scalable business (without the usual headaches)
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Social Proof */}
              <div className="pt-8 -mx-8">
                <div className="bg-white dark:bg-gray-100 py-12 px-8">
                  <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
                    Trusted by Tech Leaders at
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    <img src="/netflix.png" alt="Netflix" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Book Your Launch Strategy Session
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out this quick form to see if you're a good fit for Launch Kit.
                </p>

                <iframe
                  className="airtable-embed"
                  src="https://airtable.com/embed/appISrtODYeSTN5Lb/pagLNelw4FGEwXZxu/form"
                  frameBorder="0"
                  width="100%"
                  height="533"
                  style={{ background: "transparent", border: "1px solid #ccc" }}
                />

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>100% Free Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Get your custom launch plan in 45 minutes</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Social Proof - Below the fold */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">300+</p>
              <p className="text-lg font-semibold">Technical Experts</p>
              <p className="text-muted-foreground">Launched with us</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">6 Days</p>
              <p className="text-lg font-semibold">Fastest First Client</p>
              <p className="text-muted-foreground">Average 30-60 days</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">$15K</p>
              <p className="text-lg font-semibold">Average Deal Size</p>
              <p className="text-muted-foreground">Per client engagement</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benchmark;