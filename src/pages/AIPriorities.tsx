import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Clock, Sparkles, Handshake, PenTool, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useTrackScrollDepth } from "@/hooks/use-posthog";

const AIPriorities = () => {
  useTrackScrollDepth('AI Priorities Page');

  const riceFactors = [
    {
      letter: "R",
      name: "Reach",
      description: "How often is this skill executed?",
      note: "Higher is better",
      icon: Clock,
      color: "from-blue-500 to-blue-600"
    },
    {
      letter: "I",
      name: "Impact",
      description: "How valuable is improving this skill?",
      note: "Higher is better",
      icon: Sparkles,
      color: "from-amber-500 to-amber-600"
    },
    {
      letter: "C",
      name: "Confidence",
      description: "How certain are we that we can improve it?",
      note: "Higher is better",
      icon: Handshake,
      color: "from-green-500 to-green-600"
    },
    {
      letter: "E",
      name: "Effort",
      description: "How much work will it take to create the Skill Spec and automate?",
      note: "Lower is better",
      icon: PenTool,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Priorities - Use the RICE Framework for Skills"
        description="Stop chasing random AI use cases. Start with strategic capability building using the RICE prioritization framework."
        keywords={['AI prioritization', 'RICE framework', 'AI skills', 'strategic capability building', 'AI use cases']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              How to Prioritize: Use the RICE Framework for Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop chasing random AI use cases. Start with strategic capability building.
            </p>
          </div>
        </div>
      </section>

      {/* Formula Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800 border-2">
            <div className="flex flex-col items-center justify-center">
              {/* Formula Display */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                <div className="flex flex-col items-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                    <span className="italic">(Reach</span>
                    <span className="mx-2 text-muted-foreground">×</span>
                    <span className="italic">Impact</span>
                    <span className="mx-2 text-muted-foreground">×</span>
                    <span className="italic">Confidence)</span>
                  </div>
                  <div className="w-full h-1 bg-foreground my-4"></div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground italic">
                    (Effort)
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span className="text-3xl sm:text-4xl text-muted-foreground">=</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 underline decoration-2 underline-offset-4">
                    Priority Score
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* RICE Factors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {riceFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${factor.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl font-bold text-white">{factor.letter}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-foreground">{factor.letter} - {factor.name}:</span>
                        <span className="text-lg text-muted-foreground">{factor.description}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={`font-semibold ${factor.letter === 'E' ? 'text-red-500' : 'text-green-500'}`}>
                          ({factor.note})
                        </span>
                        <IconComponent className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${factor.letter === 'E' ? 'rotate-90' : '-rotate-45'} text-muted-foreground`} />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 sm:p-12 border-2 border-orange-500/20">
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
              This gives you a <span className="font-bold text-orange-500">ranked list</span>. Start with the highest-scoring skills to get the <span className="font-bold text-orange-500">biggest wins first</span>.
            </p>
            <div className="mt-6 flex justify-center">
              <ArrowRight className="w-8 h-8 text-orange-500 animate-pulse" />
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPriorities;
