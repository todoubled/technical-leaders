import Navigation from "@/components/Navigation";
import DecisionFooter from "@/components/footers/DecisionFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Quote } from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

const HowItWorks = () => {
  const youtubeVideoId = "8aVvZ9NwiN8";

  const testimonials = [
    {
      name: "P.O.",
      role: "DevOps Lead",
      location: "Poland",
      avatar: "PO",
      content: "I didn't even use all of tools that you provide guys, so far all is exceeding my expectations. Basically thats the first mastermind group that gives a real value that I know! Stress levels overall in my life almost went to 0, in all cases, private, work etc"
    },
    {
      name: "C.F.",
      role: "Fractional CTO",
      location: "Ireland",
      avatar: "CF",
      content: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win."
    },
    {
      name: "K.D.",
      role: "Director of Customer Success",
      location: "Colorado",
      avatar: "KD",
      content: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion"
    },
    {
      name: "Tech Leader",
      role: "Senior Leadership",
      location: "",
      avatar: "TL",
      content: "The 'win seeds' I've been planting the last ~1-2 months have started blooming at work! My squad was recognized by senior leadership across two orgs for the work we've been doing."
    },
    {
      name: "M.W.",
      role: "CTO",
      location: "Poland",
      avatar: "MW",
      content: "I feel I'm a strong IC and have quite good managing skills, but I felt lacking in strategy tools. I wanted to increase my leverage by doing a higher level of work."
    },
    {
      name: "F.C.",
      role: "Fractional CTO",
      location: "Ann Arbor",
      avatar: "FC",
      content: "It is harder than I thought, specifically talking about yourself as a product or service offering is not something I really ever had to do working in a large corporation for the majority of the last three decades."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How It Works | Technical Leaders"
        description="Discover how Technical Leaders helps founders and executives launch and scale their businesses with proven strategies and systems."
        keywords={["how it works", "technical leaders process", "founder resources", "business scaling"]}
      />

      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="h-4 w-4" />
            Watch How It Works
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            See exactly how we help experts and consultants launch and scale their businesses with proven systems and strategies
          </p>

          {/* YouTube Video Embed */}
          <div className="w-full max-w-5xl mx-auto mb-12">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="How Technical Leaders Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6"
            onClick={() => {
              trackEvent('Get Started - How It Works CTA', {
                location: 'hero_section'
              });
              window.location.href = "/launch";
            }}
          >
            Get Started with Launch Kit
          </Button>

          <p className="text-sm text-muted-foreground mt-4 font-semibold">
            Join 300+ founders already scaling their businesses
          </p>

          <p className="text-sm text-muted-foreground mt-6">
            Not sure if it's a fit yet?{" "}
            <a
              href="/benchmark"
              className="text-primary underline hover:text-primary/80"
              onClick={() => trackEvent('Book Strategy Session - Hero Section', { location: 'hero_section' })}
            >
              Book a Strategy Session here
            </a>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Members Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real results from tech leaders who've transformed their careers with our proven playbooks and community support
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
      </section>

      {/* Value Stacking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Here's What You Get with Launch Kit
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Client Acquisition System</h3>
                <p className="text-muted-foreground">Get your first paying client in 30 days using our battle-tested outreach templates and conversion strategies</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Done-For-You Templates & Scripts</h3>
                <p className="text-muted-foreground">Skip months of trial and error with our proven case study templates, outreach scripts, and proposal frameworks</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Weekly Group Coaching Calls</h3>
                <p className="text-muted-foreground">Get direct access to successful founders who've built 6-figure consulting businesses</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Private Community of 300+ Technical Leaders</h3>
                <p className="text-muted-foreground">Network with CTOs, VPs, and technical founders who are building consulting practices alongside you</p>
              </div>
            </div>
          </div>

          {/* Multiple CTA Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Get Launch Kit Now - How It Works CTA', {
                  location: 'value_section'
                });
                window.location.href = "/launch";
              }}
            >
              Get Launch Kit Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => {
                trackEvent('Book Strategy Session - How It Works CTA', {
                  location: 'value_section'
                });
                window.location.href = "/benchmark";
              }}
            >
              Book Strategy Session
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Not ready yet? <a href="/10-before-10" className="text-primary underline" onClick={() => trackEvent('10 Before 10 Link - How It Works', { location: 'value_section' })}>Get our free 10 Before 10 playbook</a>
          </p>
        </div>
      </section>

      <DecisionFooter
        headline="Choose Your Path"
        subheadline="Every journey is different. Find the right starting point for you."
        options={[
          {
            title: "Start Free",
            description: "Test the waters with our proven 10 Before 10 playbook",
            benefits: [
              "Free case study builder",
              "ICP targeting system",
              "Daily outreach scripts",
              "Get your first lead fast"
            ],
            cta: {
              text: "Get Free Playbook",
              url: "/10-before-10",
              variant: "secondary"
            }
          },
          {
            title: "Launch Kit",
            description: "Full client acquisition system to land your first $25K+ opportunity",
            benefits: [
              "Proven templates & scripts",
              "Weekly coaching calls",
              "Community of 300+ leaders",
              "$25K+ opportunity guarantee"
            ],
            badge: "MOST POPULAR",
            cta: {
              text: "Get Launch Kit - $2,950",
              url: "https://buy.stripe.com/dRmeVd26Z2of5vI2wYaMU0A",
              variant: "primary"
            }
          },
          {
            title: "Book Strategy Call",
            description: "Not sure which is right? Let's figure it out together",
            benefits: [
              "30-minute consultation",
              "Custom recommendation",
              "No pressure, no obligation",
              "Get clarity on your path"
            ],
            cta: {
              text: "Book Free Call",
              url: "/benchmark",
              variant: "secondary"
            }
          }
        ]}
        helpText="Still deciding?"
        helpCTA={{
          text: "Book a Strategy Session",
          url: "/benchmark"
        }}
        trackingContext="How It Works"
      />
    </div>
  );
};

export default HowItWorks;