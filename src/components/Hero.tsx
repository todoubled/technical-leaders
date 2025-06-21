
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/bvTN0qP1MO4"; // Replace with your actual video URL

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/ai-in-ar.png"
          alt="AI background"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get Promoted or
            <span className="text-primary block mt-2">Promote Yourself</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Leverage the <b>tools</b>, <b>playbooks</b>, and <b>coaching</b> to position your skills and experience for premium pay (<i>without</i> burning out).<br /> <br />
            Join hundreds of tech leaders from companies like <b>Calendly</b>, <b>Red Hat</b>, <b>Vercel</b>, <b>and more</b> who are <b>diversifying their income</b>, <b>monetizing their expertise</b>, and <b>making a positive impact</b> with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-3 group" onClick={() => { window.location.href = "/call" }}>
              Book Intro Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={() => setIsVideoModalOpen(true)}>
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto cursor-pointer group" onClick={() => setIsVideoModalOpen(true)}>
            <div className="bg-card rounded-lg shadow-2xl p-8 border border-border animate-scale-in relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Tech professionals advancing their careers"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-12 w-12 text-primary fill-black" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8 relative z-10">
        <div className="bg-white dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by Tech Leaders at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <img src="/nike.png" alt="Nike" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/peleton.webp" alt="Peloton" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/cashapp.svg" alt="Cash App" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/redhat.webp" alt="Red Hat" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/calendly.webp" alt="Calendly" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/gitlab.png" alt="GitLab" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </section>
  );
};

export default Hero;
