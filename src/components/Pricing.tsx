import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "AI Trade School",
      price: "$1000",
      period: " 12 weeks",
      description: "Master the latest AI tools to deliver better work faster",
      icon: Sparkles,
      features: [
        "Weekly AI workflow training",
        "Hands-on tool tutorials",
        "Real-world implementation guides",
        "Techniques to Avoid 'AI Slop'",
        "Lifetime Community Access",
        "Demo Day to Launch Your Project"
      ],
      popular: false,
      badge: "New",
      gradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500"
    },
    {
      name: "Launch Kit",
      price: "$2950",
      period: " lifetime access",
      description: "Complete program to get ideal opportunities even if you hate selling yourself",
      icon: Zap,
      features: [
        "Marketing System",
        "Sales Playbook",
        "3 Months of Content",
        "Weekly Workshops",
        "Mastermind Access"
      ],
      popular: true,
      gradient: "from-blue-500 to-purple-600",
      badgeColor: "bg-primary"
    },
    {
      name: "Scale Program",
      price: "$850+",
      period: "/month",
      description: "For senior leaders targeting C-suite and board positions",
      icon: Crown,
      features: [
        "Everything in Launch Kit",
        "Private 1-on-1 coaching",
        "Content ghostwriting",
        "Done-for-you marketing",
        "Media training",
        "Strategic introductions",
        "Concierge support"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-500"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Choose Your Program For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Premium Pay
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join hundreds of tech leaders advancing faster than going it alone. Each program is designed to accelerate your growth and maximize your impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group overflow-hidden border-2 transition-all duration-500 overflow-visible hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105 bg-gradient-to-br from-card to-primary/5'
                  : 'border-border hover:border-primary/50 bg-card'
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient}`} />

              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`${plan.badgeColor} text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    Most Popular
                  </span>
                </div>
              )}

              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold mb-3">{plan.name}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  {plan.description}
                </CardDescription>

                {/* Pricing */}
                {/* <div className="mt-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div> */}
              </CardHeader>

              <CardContent className="px-8 pb-8">
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                        <Check className="h-3 w-3 text-white font-bold" />
                      </div>
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:scale-105 text-white border-0`
                      : `border-2 border-primary/20 hover:border-primary bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:scale-105 text-white`
                  }`}
                  onClick={() => {
                    if (plan.name === "AI Trade School") {
                      window.location.href = "/ai-trade-school";
                    // } else if (plan.name === "Launch Kit") {
                    //   window.location.href = "/launch";
                    // } else if (plan.name === "Scale Program") {
                    //   window.location.href = "/scale";
                    } else {
                      window.location.href = "/call";
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Subtle */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-4">
            Not sure which program is right for you?
          </p>
          <button
            onClick={() => { window.location.href = "/call" }}
            className="text-lg sm:text-xl font-medium text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group text-center"
          >
            <span className="break-words">Book a free intro call and we'll help you figure it out</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;