
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, Award } from "lucide-react";
import { trackClick } from "@/utils/posthog";

const Testimonials = () => {
  const testimonials = [
    {
      name: "P.O.",
      role: "DevOps Lead",
      location: "Poland",
      avatar: "PO",
      content: "I didn't even use all of tools that you provide guys, so far all is exceeding my expectations. Basically thats the first mastermind group that gives a real value that I know! Stress levels overall in my life almost went to 0, in all cases, private, work etc"
    },
    {
      name: "C.F.",
      role: "Fractional CTO",
      location: "Ireland",
      avatar: "CF",
      content: "For this client, it's a fractional gig that will replace all my income, which means I can go and do this fractional thing for three days a week and then have two days to apply all the other learnings. Massive, massive win."
    },
    {
      name: "K.D.",
      role: "Director of Customer Success",
      location: "Colorado",
      avatar: "KD",
      content: "Applying my new approach learned through Tech Leaders, has led to a new job offer and a promotion"
    },
    {
      name: "Tech Leader",
      role: "Senior Leadership",
      location: "",
      avatar: "TL",
      content: "The 'win seeds' I've been planting the last ~1-2 months have started blooming at work! My squad was recognized by senior leadership across two orgs for the work we've been doing."
    },
    {
      name: "M.W.",
      role: "CTO",
      location: "Poland",
      avatar: "MW",
      content: "I feel I'm a strong IC and have quite good managing skills, but I felt lacking in strategy tools. I wanted to increase my leverage by doing a higher level of work."
    },
    {
      name: "F.C.",
      role: "Fractional CTO",
      location: "Ann Arbor",
      avatar: "FC",
      content: "It is harder than I thought, specifically talking about yourself as a product or service offering is not something I really ever had to do working in a large corporation for the majority of the last three decades."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Members Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from tech leaders who've transformed their careers with our proven playbooks and community support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-4 left-4 opacity-10">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <div className="relative z-10">
                  <p className="text-foreground mb-8 leading-relaxed text-lg italic pt-4">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center pt-4 border-t border-border">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-primary font-semibold text-lg">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm font-medium">
                        {testimonial.role}{testimonial.location && ` • ${testimonial.location}`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-6">
            Ready to join them?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                trackClick('Testimonials - Book Free Call', {
                  location: 'testimonials_bottom',
                  destination: '/call'
                });
                window.location.href = "/call";
              }}
            >
              Book Your Free Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                trackClick('Testimonials - View Accredited Leaders', {
                  location: 'testimonials_bottom',
                  destination: '/accredited'
                });
                window.location.href = "/accredited";
              }}
              className="group"
            >
              <Award className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
              View Accredited Leaders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
