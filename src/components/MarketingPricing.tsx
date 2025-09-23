import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Target, Rocket, Crown } from "lucide-react";

const MarketingPricing = () => {
  const plans = [
    {
      name: "Launch",
      price: "$2,950",
      period: "(one time)",
      description: "Perfect for learning how to get your first customers without being a marketer",
      icon: Target,
      features: [
        "Go-to-Market Strategy",
        "Funnel optimization",
        "3 months of high-quality content",
        "Engagement strategy to convert leads"
      ],
      popular: false,
      badge: "Get Started",
      gradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500",
      idealFor: "Solo founders and indie makers",
      results: "First 10 leads and customers"
    },
    {
      name: "Scale",
      price: "$850",
      period: "/month",
      description: "For busy founders and executives growing their audience and business",
      icon: Rocket,
      features: [
        "Everything in Launch",
        "Done-for-you marketing systems",
        "Content calendar planning",
        "Basic analytics & reporting",
        "Weekly guidance & tracking",
        "Private 1-on-1 coaching"
      ],
      popular: true,
      gradient: "from-blue-500 to-purple-600",
      badgeColor: "bg-primary",
      idealFor: "Senior Leaders & Founders",
      results: "10-25 qualified opportunities per month"
    },
    {
      name: "Multi-Channel",
      price: "$1500",
      period: "/month",
      badge: "Most Effective",
      description: "Complete multi-channel thought leadership dominance for industry leaders and serial entrepreneurs",
      icon: Crown,
      features: [
        "Everything in Launch & Scale",
        "Daily content across all platforms",
        "High-conversion content every month",
        "Investor introduction facilitation",
        "Media training & crisis prep",
        "Media kit development",
        "Strategic partnership facilitation"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-500",
      idealFor: "Serial Entrepreneurs & Industry Icons",
      results: "25+ high-value opportunities per month"
    }
  ];

  return (
    <section id="marketing-services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Choose Your Marketing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Investment Level
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each tier is designed to systematically build your authority and generate qualified opportunities. We handle everything so you can focus on what you do best.
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
                  <span className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-primary">
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

              <CardHeader className="text-center pb-6 pt-8">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold mb-3">{plan.name}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {plan.description}
                </CardDescription>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-primary mb-1">Ideal For:</div>
                  <div className="text-sm text-muted-foreground">{plan.idealFor}</div>
                </div>

                {/* Expected Results */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-6">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-400 mb-1">Expected Results:</div>
                  <div className="text-sm text-green-600 dark:text-green-300">{plan.results}</div>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                        <Check className="h-3 w-3 text-white font-bold" />
                      </div>
                      <span className="text-foreground leading-relaxed text-sm">{feature}</span>
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
                    window.location.href = "https://calendly.com/tech-leaders/strategy-session";
                  }}
                >
                  Get Started with {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not Sure Which Tier Is Right for You?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Book a strategy call and we'll analyze your current situation, goals, and recommend the perfect marketing investment level for your objectives.
            </p>
            <Button
              size="lg"
              onClick={() => { window.location.href = "https://calendly.com/tech-leaders/strategy-session" }}
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
            >
              Book Your Free Strategy Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketingPricing;