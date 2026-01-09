import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";
import { ArrowRight } from "lucide-react";

const AIWaitlist = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Join the Waitlist | Technical Leaders"
        description="We're closed on purpose. Join the waitlist to be the first to know when we open enrollment for our programs."
        keywords={["waitlist", "technical leaders", "coaching", "consulting", "enrollment"]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            <span className="text-amber-400">
              We're Closed — On Purpose.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-foreground mb-12">
            We've stopped taking on new clients right now.
          </p>

          <img
            src="/ai-program-product-shot.jpg"
            alt="AI Program"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-12"
          />

          <p className="text-lg sm:text-xl text-foreground mb-12">
            The <span className="font-bold">AI SOS</span> program reopens later this month.
          </p>

          <p className="text-lg sm:text-xl text-foreground mb-10 max-w-3xl mx-auto">
            If you're thinking about working with us this year, the waitlist is the only place to raise your hand.
          </p>

          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6"
            onClick={() => {
              trackEvent('Join Waitlist Clicked', {
                location: 'hero_section'
              });
            }}
          >
            Join The Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWaitlist;
