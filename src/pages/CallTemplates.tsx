import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Download, Clock, FileText } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

declare global {
  interface Window {
    Calendly: any;
  }
}

const CallTemplates = () => {
  useEffect(() => {
    // Check if Calendly is already loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/d/cqqn-58s-rqc/tech-leaders-intro-call?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Consulting Call Templates - Technical Leaders"
        description="Get free consulting call templates and book a strategy session to boost your consulting income and impact. Templates for discovery calls, proposals, and more."
        keywords={['consulting call templates', 'technical consulting', 'CTO consulting', 'tech leadership consulting', 'strategy call']}
      />
      <Navigation />

      {/* Success Banner */}
      <section className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-green-800 dark:text-green-200 font-medium">
              <span className="font-bold">Success!</span> But wait, before you check your email inbox for the templates and bonus playbook...{" "}
              <a
                href="https://technical-leaders.notion.site/The-Consulting-Income-Templates-1e5e729757d980ca848bf644d344f25f"
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get instant access here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Your Next Step
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
          Book a 15-minute brainstorm to create your personalized action plan
          </p>
        </div>
      </section>

      {/* Main Content - Brainstorm Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Benefits */}
            <div>
              <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    15-Minute Brainstorm Session
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Get personalized strategies to unlock your consulting potential without burning out.
                </p>

                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  In This Session, We'll:
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Discuss your current situation and past consulting experiences
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Uncover your primary blocker to achieving your consulting goals
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Develop a 3-step Action Plan for your ideal consulting opportunities
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Identify what's working and what isn't in your current approach
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Calendar */}
            <div>
              <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Select a Time That Works for You
                </h3>

                {/* Calendar Widget Placeholder */}
                <div className="rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <div className="calendly-inline-widget" data-url="https://calendly.com/d/cqqn-58s-rqc/tech-leaders-intro-call?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: "320px", height: "700px" }}></div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can't find a time that works?
                    <a href="mailto:todd@technical-leaders.com" className="text-orange-500 hover:underline ml-1">
                      Email us
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallTemplates;