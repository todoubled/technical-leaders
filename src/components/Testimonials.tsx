
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Product, TechCorp",
      avatar: "SC",
      content: "Facilitator transformed how we run our product strategy sessions. Our team engagement increased by 40% and we're shipping better features faster.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Agile Coach, Innovation Labs",
      avatar: "MJ",
      content: "The AI-powered insights are game-changing. I can now facilitate workshops for teams I've never worked with and still achieve outstanding results.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Head of HR, GlobalTech",
      avatar: "ER",
      content: "Our remote team building sessions went from awkward to amazing. The platform makes virtual facilitation feel natural and engaging.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by facilitators worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals who've transformed their workshops
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
