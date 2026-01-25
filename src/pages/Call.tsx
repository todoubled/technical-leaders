import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const Call = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Strategy Call - Technical Leaders"
        description="Schedule a free strategy call to discuss how to advance your technical leadership career. Get personalized guidance from experienced CTOs and tech executives."
        keywords={['technical leadership coaching', 'CTO mentorship', 'career strategy call', 'tech executive coaching']}
      />
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
          {/* Left Column - Video */}
          <div>
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Learn How Tech Leaders Works
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VKetl72iSlk?si=xxlfHLSsP6kmVd1Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this 1-minute overview to understand how we help.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                On This Intro Call, We'll:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Discuss your current situation and identify opportunities
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Uncover your "#1 blocker" that's limiting your opportunities
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Create a 3-step Action Plan to achieve your goals
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

              {/* Google Calendar Appointment Scheduling */}
              <div className="rounded-lg text-center min-h-[400px] flex flex-col items-center justify-center">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2WhZUa4eY8D6q3di1uRO82dr4HKHl3KuJCNXbU8jo9C0AjnX6n5PPESW2ITg3p189RC5iNScT1?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                />
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