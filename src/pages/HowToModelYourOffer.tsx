import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const HowToModelYourOffer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How to Design Your Offer Model | Technical Leaders"
        description="Workshop Training to learn how to assess your skillset, position your value, and design your offer model. More influence, impact, and income without burning out."
        keywords={["offer design", "technical leadership", "premium pricing", "consultant offers", "expert positioning"]}
      />

      <Navigation />

      {/* Main Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            How to Design Your Offer Model
          </h1>

          <p className="text-xl mb-8">
            Watch this <strong>Workshop Training</strong> to learn:
          </p>

          {/* YouTube Video Embed */}
          <div className="mb-12 aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/EK7gJ-FFcHE"
              title="How to Design Your Offer Model Workshop"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg">
                How to <strong>assess your current skillset</strong> and <strong>past experiences</strong> to identify ideal opportunities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg">
                How to <strong>position the full value you bring to the table</strong> so you can package it up as an irresistible offer at a premium price
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg">
                A <strong>3-step Action Plan</strong> to help you design your own offer model
              </span>
            </li>
          </ul>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => {
                window.location.href = '/call';
              }}
            >
              Want feedback or help with your offer? Book a Call with Todd
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToModelYourOffer;