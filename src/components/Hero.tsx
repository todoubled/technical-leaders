
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Transform your team workshops with
            <span className="text-primary block mt-2">intelligent facilitation</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Design, run, and analyze impactful workshops that drive real results. 
            Our platform combines expert facilitation methods with powerful collaboration tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-3 group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-2xl p-8 border border-border animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Team collaboration dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
