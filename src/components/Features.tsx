import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Bot, Users, TrendingUp, Briefcase, Rocket, Check, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const programs = [
    {
      title: "Get Promoted",
      subtitle: "Climb Your Career Ladder Faster",
      description: "Navigate the corporate ladder with proven strategies and playbooks",
      cta: "For Tech Leaders",
      features: [
        {
          icon: Briefcase,
          title: "Executive Presence",
          description: "Build the leadership presence and communication skills that get you noticed by senior leadership"
        },
        {
          icon: TrendingUp,
          title: "Promotion Strategies",
          description: "Navigate promotion cycles, comp negotiations, and political dynamics with insider strategies"
        },
        {
          icon: Bot,
          title: "AI-Enhanced Productivity",
          description: "Leverage AI tools to 10x your output while maintaining quality and avoiding AI slop"
        },
        {
          icon: Brain,
          title: "Mental Fitness",
          description: "Build resilience and prevent burnout with proven mental performance techniques for high-pressure environments"
        }
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Promote Yourself",
      subtitle: "Your Entrepreneurial Path",
      description: "Build your personal brand, monetize your expertise, and diversify your income streams",
      cta: "For Founders & Consultants",
      features: [
        {
          icon: Megaphone,
          title: "Personal Brand Mastery",
          description: "Position yourself as the go-to expert in your niche and attract premium opportunities"
        },
        {
          icon: Rocket,
          title: "Income Diversification",
          description: "Create consulting, coaching, and product revenue streams beyond your 9-5"
        },
        {
          icon: Users,
          title: "Mastermind Network",
          description: "Connect with tech leaders building their own paths and accelerate together"
        },
        {
          icon: Brain,
          title: "Mental Fitness",
          description: "Maintain peak performance and creative flow while juggling multiple ventures without burning out"
        }
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Two Proven Paths to Accelerate Your Tech Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're aiming for promotion or building your own business, we've got the tools, playbooks, and coaching to get you there faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, programIndex) => (
            <Card key={programIndex} className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${program.gradient}`} />
              <CardHeader className="text-center pb-8">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {program.subtitle}
                  </span>
                </div>
                <CardTitle className="text-3xl font-bold mb-3">{program.title}</CardTitle>
                <CardDescription className="text-lg">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${program.gradient} bg-opacity-10 flex items-center justify-center`}>
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which path is right for you?
          </p>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80"
            onClick={() => { window.location.href = "https://technical-leaders.com/call" }}
          >
            Book a free intro call and we'll help you figure it out →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;