
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=TYCqWRjIm4s"; // Replace with your actual video URL

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get Promoted or
            <span className="text-primary block mt-2">Promote Yourself</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Leverage the <b>tools</b>, <b>playbooks</b>, and <b>coaching</b> to position your skills for premium pay (<i>without</i> burning out).<br /> <br />
            Join hundreds of tech leaders from companies like <b>Calendly</b>, <b>Red Hat</b>, <b>Vercel</b>, <b>and more</b> who are diversifying their income, monetizing their expertise, and making a positive impact with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-3 group" onClick={() => { window.location.href = "https://technical-leaders.com/call" }}>
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
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </section>
  );
};

export default Hero;
