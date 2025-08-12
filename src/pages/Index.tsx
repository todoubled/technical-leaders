
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
        title="Technical Leaders - Get Promoted or Promote Yourself"
        description="Stop waiting for promotions. Join 300+ CTOs, VPs of Engineering, and tech executives who took control of their careers and built their own opportunities."
        keywords={['get promoted', 'tech promotion', 'technical leadership', 'CTO coaching', 'VP Engineering', 'career advancement', 'promote yourself']}
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
