
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technical Leaders - Transform Your Tech Career into Strategic Leadership"
        description="Join CTOs, VPs of Engineering, and technical executives advancing their careers. Access exclusive programs, AI strategies, and a community of 500+ senior tech leaders."
        keywords={['technical leadership', 'CTO coaching', 'VP Engineering', 'tech executive', 'career growth', 'leadership development', 'AI strategy']}
      />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
