import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { trackEvent } from "@/utils/posthog";
import { ArrowRight } from "lucide-react";

const AIWaitlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Small delay to ensure the modal DOM is fully rendered
      const timer = setTimeout(() => {
        const formContainer = document.getElementById('waitlist-modal-form');
        if (formContainer && !formContainer.querySelector('script')) {
          const script = document.createElement('script');
          script.async = true;
          script.setAttribute('data-uid', 'b00140dfe6');
          script.src = 'https://techleaders.kit.com/b00140dfe6/index.js';
          formContainer.appendChild(script);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text and Button */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                <span className="text-amber-400">
                  We're Closed — On Purpose.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                We've stopped taking on new clients right now.
              </p>

              <p className="text-lg sm:text-xl text-foreground mb-6">
                The <span className="font-bold">AI SOS</span> program reopens later this month.
              </p>

              <p className="text-lg sm:text-xl text-foreground mb-10">
                If you're thinking about working with us this year, the waitlist is the only place to raise your hand.
              </p>

              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6"
                onClick={() => {
                  trackEvent('Join Waitlist Clicked', {
                    location: 'hero_section'
                  });
                  setIsModalOpen(true);
                }}
              >
                Join The Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="order-first lg:order-last">
              <img
                src="/ai-program-product-shot.jpg"
                alt="AI Program"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join The Waitlist</DialogTitle>
          </DialogHeader>
          <div id="waitlist-modal-form" className="min-h-[200px]">
            {/* ConvertKit form will be injected here */}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AIWaitlist;
