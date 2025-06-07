
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, BarChart3, Target, Lightbulb, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborative Workshops",
      description: "Engage teams with interactive exercises, breakouts, and real-time collaboration tools designed by expert facilitators."
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations for workshop structure, timing, and activities based on your team's goals and dynamics."
    },
    {
      icon: BarChart3,
      title: "Analytics & Outcomes",
      description: "Track participation, measure engagement, and analyze results to continuously improve your facilitation effectiveness."
    },
    {
      icon: Target,
      title: "Goal-Driven Templates",
      description: "Access proven workshop templates for strategy sessions, retrospectives, ideation, and team building activities."
    },
    {
      icon: Lightbulb,
      title: "Innovation Tools",
      description: "Facilitate breakthrough thinking with structured brainstorming, idea evaluation, and decision-making frameworks."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Keep workshops on track with built-in timers, automated transitions, and smart pacing recommendations."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to facilitate success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to execution to analysis, our comprehensive platform supports every stage of your workshop journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
