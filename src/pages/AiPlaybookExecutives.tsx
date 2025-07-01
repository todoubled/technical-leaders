import React, { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download } from "lucide-react";

const AiPlaybookExecutives = () => {
  useEffect(() => {
    const formContainer = document.getElementById('ck-form-ffe044c783');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', 'ffe044c783');
      script.src = 'https://techleaders.ck.page/ffe044c783/index.js';
      formContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Maximize Business Impact with AI: The 5-Step Playbook for Executives"
        description="87% of all AI projects never make it into production. Download our free executive playbook to accelerate revenue growth, reduce operational costs, and scale AI projects effectively."
        keywords={['AI playbook', 'executive strategy', 'AI implementation', 'business impact', 'AI projects', 'operational efficiency']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          {/* Partnership Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <span>In Partnership with</span>
              <a
                href="https://bottega8.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/bottega8-logo.png"
                  alt="Bottega8 Logo"
                  className="h-6 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-destructive/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-destructive rounded-full mr-2"></span>
                  87% of all AI projects never make it into production
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                  Maximize Business Impact with AI: The <span className="text-primary relative">
                    5-Step Playbook
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl lg:max-w-none">
                  Download our free executive playbook and discover how to successfully integrate AI into your business strategy and ship to production.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium">Accelerating revenue growth and achieving 2-3x ROI with strategic AI initiatives tied to business goals</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium">Reducing operational costs and increasing organizational efficiency through AI-powered automation</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium">Effectively scaling AI projects by identifying and optimizing key metrics for continuous growth</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get the Playbook
                </Button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"></div>
                  <img
                    src="/ai-playbook-executives.png"
                    alt="AI Playbook for Executives"
                    className="relative max-w-lg w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Contributors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert Contributors</h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry leaders with decades of AI/ML experience
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* Nick Talwar */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5cdd09b8993855c88cf_1685473230400.jpeg"
                    alt="Nick Talwar"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Nick Talwar</h3>
                  <p className="text-sm text-primary font-medium mb-3">Ex-Microsoft Technical Leader, CTO & Partner at Bottega8, Startup & VC Advisor</p>
                  <p className="text-muted-foreground">
                    Nick is an AI and Machine Learning leader with 14+ years of experience as a product and engineering executive. His foundation in AI comes from studying Neural Networks through a Boeing and DARPA joint research grant, which received an engineering capstone award from his alma mater, Duke University.
                    <br /><br />
                    Starting at Microsoft in Search and Recommendations, he went on to serve as CTO at Bottega, building zero-to-one solutions for leading enterprises like Square and Disney, and NIH-funded, TED-supported SleepSpace. In these leadership roles, Nick helped build and lead the implementation of novel ML and data-driven engineering solutions.
                    <br /><br />
                    He now guides VCs and Boards on AI strategy and implementation for their late-stage portfolio companies. His 5-Step AI Playbook for Executives forms the foundation of this program.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Matt Kirk */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5b0e4d18693800c1108_1673984243092.jpeg"
                    alt="Matt Kirk"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Matt Kirk</h3>
                  <p className="text-sm text-primary font-medium mb-3">Head of AI at AugmentAI, Head of AI at Zeitworks, O'Reilly author of Thoughtful Machine Learning</p>
                  <p className="text-muted-foreground">
                    Matt is a hands-on engineering leader in AI and Machine Learning. His experience includes leading AI teams at AugmentAI and Zeitworks, founding his own venture (Modulus7), and authoring the acclaimed O'Reilly book Thoughtful Machine Learning.
                    <br /><br />
                    Matt has a 15+ year track record of success in AI and Machine Learning. From building data models and ML systems to leading projects that unlock data potential with AI, he consistently drives business impact as a seasoned engineering executive. As a hands-on software engineer, he keeps abreast with the latest in AI through building at AugmentAI as well as leading and mentoring software engineering teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Todd Larsen */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                    alt="Todd Larsen"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Todd Larsen</h3>
                  <p className="text-sm text-primary font-medium mb-3">CEO at TechLeaders, CTO at Serve2Perform, former Groupon, founder at Digit.co</p>
                  <p className="text-muted-foreground">
                    As a former Global Platform Engineer at Groupon, Founding Engineer at Digit, and current CEO of Technical Leaders, Todd has 15+ years of experience building and scaling products in startup mode and at-scale.
                    <br /><br />
                    From managing high performance teams to shipping solutions that customers love, Todd focuses on moving fast to create a positive impact on the world with technology. His expertise on change management and building strong technical teams has been instrumental for executives navigating AI transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of executives who are already implementing AI successfully
            </p>
            <div id="ck-form-ffe044c783" className="mt-8"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiPlaybookExecutives;