import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Linkedin, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Accredited() {
  const leaders = [
    {
      name: "Mariusz Wyrozębski",
      role: "CTO @ PostOp",
      niche: "Healthcare and Startups",
      linkedin: "https://www.linkedin.com/in/mariuszwyrozebski/",
      insight: "The TL Program built a foundation for most of my skills in leadership and helped me clarify my beliefs in software development into an effective leadership style. It made me realize the potential I have and rebuilt confidence in myself. Todd and Stephen assisted me in the change from software developer into a leader that can steer the company future.",
      bio: "Mariusz Wyrozebski is the Chief Technology Officer at Post Op, a technical advisor, and a professional powerlifter based in the Bielsko-Biała Metropolitan Area of Poland. He has extensive experience in technology management, software development, and DevOps. With a career spanning over 15 years, Mariusz has been a key contributor to numerous Ruby on Rails projects for startups and established companies. He is known for his leadership skills and passion for automation. In addition to his tech career, Mariusz is a decorated powerlifter, holding multiple gold medals in European and world competitions.",
      competencies: ["Technology leadership", "Ruby on Rails expertise", "DevOps and automation", "Project management", "Software architecture", "Technical advisory", "Team management", "Startup development"],
      photo: "/mariusz.png"
    },
    {
      name: "Sara Mazer",
      role: "Field CTO @ LaunchDarkly",
      niche: "Government, life sciences and healthcare GTM",
      linkedin: "https://www.linkedin.com/in/saramazer/",
      insight: "I've learned practical methods for dealing with difficult situations, ways to promote myself within and outside of my company, how to prioritize my efforts to meet my personal goals, how to understand areas that I need to focus on to progress in my career, and how to start creating a business that provides value to customers and my family.",
      bio: 'Sara Mazer is an accomplished Field CTO with 25+ years of experience across government, healthcare, and life sciences. She excels in helping early-stage and high-growth companies expand into new markets, with a focus on go-to-market (GTM) strategies designed for government and regulated industries. A 2023 Women Worth Watching in STEM award recipient, Sara holds a patent and has been published in peer-reviewed journals. At LaunchDarkly, a top-ranking "triple-unicorn" startup, Sara successfully led the company through the FedRAMP authorization process, achieved by fewer than 300 SaaS companies globally. Her skill in navigating complex compliance requirements, crafting mission-driven GTM strategies, and building partnerships with federal agencies allows for rapid market adoption. With expertise spanning DevSecOps, big data, and enterprise architecture, Sara empowers startup CEOs to strategically enter and grow in highly regulated markets.',
      competencies: ["GTM in regulated industries", "Infrastructure and technology stack analysis", "DevOps", "Enterprise Architecture", "Governance, Risk, and Compliance"],
      photo: "/sara.jpg"
    },
    {
      name: "Miguel Suárez",
      role: "Technical Director @ Worldline",
      niche: "Bringing transformation to large organizations",
      linkedin: "https://www.linkedin.com/in/miguel-spel/",
      insight: "In a nutshell it's a good recap of all the key competences of an up-to-date Tech Leader. Starting with a good summary on emotional intelligence, some of the most valuable lessons for me were around driving culture, how to best identify problems and enable teams, data driven decision making and conflict resolution.",
      bio: "A transformational technical leader who delivers business impact and has a commercial angle. As a highly experienced and pragmatic technical leader, I excel at driving transformative change within large organizations. I've got a solid foundation as a talented software engineer and I bring commitment to excellence, pragmatic solutions, and developer empowerment.Leveraging my polyglot developer expertise and architectural know-how, I navigate complexity to reduce it and improve efficiency. Known for my 'get it done' attitude, I take ownership of challenges and champion the reduction of technical debt, meeting security standards and automating key processes. Passionate about fostering a collaborative and productive team environment, I excel at removing roadblocks and improving team dynamics. Having worked in diverse industries, I bring a wealth of experience and a deep commitment to delivering high-quality products that delight customers and drive business impact.",
      competencies: ["Digital transformation", "Enterprise leadership", "Agile methodologies", "Business impact", "Commercial strategy"],
      photo: "/miguel.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Accredited Tech Leaders"
        description="Meet our team of accredited tech leaders who have demonstrated both technical and leadership skills to lead people and projects to successful outcomes."
        keywords={['accredited tech leaders', 'CTO certification', 'technical leadership', 'leadership accreditation', 'VP Engineering']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Pattern overlay for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-scale-in">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Tech Leader Accreditation
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto animate-fade-in animation-delay-200 text-white/90">
            We Are Proud to Introduce Our Team of Accredited Tech Leaders
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Many people have great technical skills, but <span className="font-semibold text-foreground">Accredited Tech Leaders</span> have
              demonstrated they have both the technical and leadership skills to lead people and projects to a successful outcome.
            </p>
          </div>

          <Card className="bg-secondary/30 border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">To become an Accredited Tech Leader, each leader must demonstrate proficiency in two ways:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-foreground">Demonstrate a firm understanding of concepts and topics required at each accreditation level</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-foreground">Prove they have practically applied the program's lessons, empowering them to achieve previously impossible results</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => window.location.href = "/scale"}>
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Leaders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Leaders
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <p className="text-muted-foreground font-medium">{leader.role}</p>
                  <Badge variant="secondary" className="mt-2 w-fit">{leader.niche}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Program Insight:</p>
                    <p className="text-sm text-muted-foreground italic">"{leader.insight}"</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Bio:</p>
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Core Competencies:</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.competencies.map((competency, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {competency}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full mt-4"
                    onClick={() => window.open(leader.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Become an Accredited Tech Leader
              </h2>
              <p className="text-xl mb-6">
                Join an elite group of technical leaders who have proven their ability to deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => window.location.href = "/scale"}>
                  Apply for Accreditation
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50"
                  onClick={() => window.location.href = "/how-it-works"}>
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}