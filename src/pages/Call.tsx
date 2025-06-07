import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Call = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Book a 15-Minute Intro Call with Todd
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                On This Intro Call, We'll:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Discuss your current situation and past experiences to understand where you are now
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Uncover your "#1 blocker" that's getting in the way of your goals
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Develop a 3-step Action Plan to move forward with clarity and confidence
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "This call helped me identify exactly what was holding me back. The action plan we created was clear and achievable."
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  - Senior Engineer at Fortune 500
                </p>
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
                <div className="calendly-inline-widget" data-url="https://calendly.com/tech-leaders/intro?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: "320px", height: "500px" }}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Can't find a time that works?
                  <a href="mailto:support@technical-leaders.com" className="text-orange-500 hover:underline ml-1">
                    Email us
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Not Ready for a Call?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Get our free Tech Leadership Playbook and start implementing proven strategies today
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            Get the Playbook
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Call;