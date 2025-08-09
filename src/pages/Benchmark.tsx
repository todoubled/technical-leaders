import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import SEO from "@/components/SEO";

const Benchmark = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Benchmark Your Leadership - Technical Leaders"
        description="Discover how your technical leadership skills compare to top executives and get a personalized action plan to accelerate your career growth."
        keywords={['technical leadership assessment', 'CTO benchmark', 'tech executive skills', 'leadership evaluation']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai-in-ar.png"
            alt="AI background"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center py-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Complimentary 45-Minute Strategy Session
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Complete Your <span className="text-orange-500">Benchmark</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Fill out the form below as much as you can to make our Strategy Session as productive as possible.
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            After you submit this benchmark form, you can pick a time to schedule our Strategy Session to review your benchmark and make a plan.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What We'll Cover In Your Strategy Session
            </h2>
            <p className="text-lg text-muted-foreground">
              This benchmark will show us exactly where you stand and what your growth priorities should be
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Create Your Action Plan</h3>
              <p className="text-muted-foreground">
                Create a 3-step Action Plan to achieve your goals
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Uncover Your #1 Priority</h3>
              <p className="text-muted-foreground">
                Identify your "#1 priority" to accelerate your career growth
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discuss How We Can Help You</h3>
              <p className="text-muted-foreground">
                We'll go over the options for all budgets to get started and scale
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Schedule Your Strategy Session
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Complete the form below to schedule your complimentary ~45-minute Strategy Session
            </p>
          </div>

          <Card className="p-8">
            <iframe 
              className="airtable-embed" 
              src="https://airtable.com/embed/appISrtODYeSTN5Lb/pagLNelw4FGEwXZxu/form" 
              frameBorder="0" 
              width="100%" 
              height="533" 
              style={{ background: "transparent", border: "1px solid #ccc" }}
            />
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
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
      </section>

      <Footer />
    </div>
  );
};

export default Benchmark;