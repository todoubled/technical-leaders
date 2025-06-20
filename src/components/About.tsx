import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Rocket, Linkedin, Quote, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Support technical experts in transitioning into leadership roles and independent consulting by building essential non-technical capabilities.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Who We Help",
      description: "Technical professionals ready to advance from developer to engineering manager, CTO, or successful consultant.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Rocket,
      title: "Our Approach",
      description: "Practical leadership and business skill training through our Tech Leaders Mastermind, designed to fill the skills gap most developers face.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Built By Tech Leaders,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              For Tech Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We believe the world needs technical experts with strong leadership and business skills. Our programs bridge the gap between technical expertise and business outcomes.
          </p>
        </div>

        {/* Story & Values Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-20">
          {/* Our Story */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-600 rounded-full" />
              <h3 className="text-3xl font-bold text-foreground mb-6 pl-8">Our Story</h3>
            </div>

            <div className="pl-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tech Leaders was founded by Todd Larsen and Stephen Bates to solve a critical gap in the tech industry. After years of watching talented individual contributors struggle with the transition to leadership, we built the program we wished we had when we were growing our careers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todd brings 15+ years of experience as a Global Platform Engineer at Groupon and Founding Engineer at Digit.co, building engineering teams and scalable products. Stephen has over 25 years of corporate training and leadership coaching expertise across many industries across the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, we created Tech Leaders to help technical professionals excel in leadership and entrepreneurship without burning out, providing the practical skills and playbooks needed to increase your influence, impact, and income.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section - Integrated */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Meet The Founders</h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Todd Larsen */}
            <Card className="group border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                      alt="Todd Larsen"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg mb-1">Todd Larsen</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Startup advisor, Fractional CTO, former Global Platform Engineer at Groupon.com and Founding Engineer at Digit.co with 15 years of experience.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={() => { window.location.href = "https://www.linkedin.com/in/remotebranch/" }}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stephen Bates */}
            <Card className="group border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef1944d79396cb11126_stephen.png"
                      alt="Stephen Bates"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg mb-1">Stephen Bates</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Practical and pragmatic approach to leadership coaching and corporate training for over 25 years.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      onClick={() => { window.location.href = "https://www.linkedin.com/in/stephenbatesuk/" }}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;