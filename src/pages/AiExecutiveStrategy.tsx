import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import {
  TrendingUp,
  Users,
  Shield,
  Target,
  CheckCircle,
  Star,
  Download,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const AiExecutiveStrategy = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const formContainer = document.getElementById('ck-form-638b6b22f1');
    if (formContainer && !formContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', '638b6b22f1');
      script.src = 'https://techleaders.ck.page/638b6b22f1/index.js';
      formContainer.appendChild(script);
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Why is AI important for business leaders to understand?",
      answer: "AI is transforming every industry and business function. Leaders who understand AI can make strategic decisions that drive 3-5x efficiency gains, reduce operational costs by 30%, and accelerate revenue growth. Without this knowledge, organizations risk falling behind competitors and missing critical opportunities for innovation."
    },
    {
      question: "What are the key benefits of this program?",
      answer: "Our program provides hands-on guidance for high-impact AI initiatives, technology evaluation frameworks, data security guidelines, and strategic scaling methodologies. You'll gain practical tools to implement AI solutions that deliver measurable business results."
    },
    {
      question: "How can AI improve decision-making processes?",
      answer: "AI enhances decision-making by processing vast amounts of data to identify patterns, predict outcomes, and provide data-driven insights. This leads to more informed strategic decisions, reduced risk, and faster response to market changes."
    },
    {
      question: "What ethical considerations should leaders be aware of?",
      answer: "Key ethical considerations include data privacy, algorithmic bias, transparency in AI decision-making, and the impact on employment. Our program covers frameworks for responsible AI implementation that balances innovation with ethical business practices."
    }
  ];


  const companyLogos = [
    { name: "Calendly", src: "/calendly.webp", height: "h-12" },
    { name: "Red Hat", src: "/redhat.webp", height: "h-8" },
    { name: "GitLab", src: "/gitlab.png", height: "h-8" },
    { name: "Nike", src: "/nike.png", height: "h-8" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Executive Strategy Program | Transform Your Organization"
        description="Transform your organization with proven AI strategies for 3-5x efficiency gains. Cut OpEx 30% in under 6 months with our executive-focused AI program."
        keywords={['AI strategy', 'executive program', 'artificial intelligence', 'business transformation', 'operational efficiency']}
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto">
          {/* Partnership Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
              <span>In Partnership with</span>
              <a
                href="https://bottega8.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/bottega8-logo.png"
                  alt="Bottega8 Logo"
                  className="h-6 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Executive Strategy Program
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Transform your organization with proven AI strategies for 3-5x efficiency gains
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Backed by 15+ years of machine learning and data expertise engineering solutions for Microsoft, Square, and Disney.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-3"
            onClick={() => document.getElementById('enrollment-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="mr-2 h-5 w-5" />
            Download the Curriculum
          </Button>

          {/* YouTube Video Embed */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ADGBlWvzExI"
                title="AI Executive Strategy Program Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Cut OpEx 30% in Under 6 Months
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Provides hands-on guidance for high-impact AI initiatives that deliver measurable business results
          </p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Executives Driving Strategy</h3>
                    <p className="text-muted-foreground">
                      Transform your organization's strategic approach with AI-powered decision making and operational excellence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Business Leaders</h3>
                    <p className="text-muted-foreground">
                      CMOs, CPOs, CIOs, and Heads of Growth looking to leverage AI for competitive advantage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Differentiation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Focused Two-Day Program
          </h2>
          <p className="text-xl text-muted-foreground">
            Customized to your industry and specific challenges
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="p-4 rounded-lg bg-green-500/10 w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Evaluation</h3>
                <p className="text-muted-foreground">
                  Framework for assessing and selecting the right AI technologies for your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="p-4 rounded-lg bg-red-500/10 w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Security Guidelines</h3>
                <p className="text-muted-foreground">
                  Comprehensive security frameworks to protect your organization's data in AI implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="p-4 rounded-lg bg-blue-500/10 w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Scaling Frameworks</h3>
                <p className="text-muted-foreground">
                  Proven methodologies for scaling AI initiatives across your entire organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Contributors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Faculty</h2>
            <p className="text-lg text-muted-foreground">
              Learn from industry leaders with decades of AI/ML experience
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {/* Nick Talwar */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5cdd09b8993855c88cf_1685473230400.jpeg"
                    alt="Nick Talwar"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Nick Talwar</h3>
                  <p className="text-sm text-primary font-medium mb-3">Ex-Microsoft Technical Leader, CTO & Partner at Bottega8, Startup & VC Advisor</p>
                  <p className="text-muted-foreground">
                    Nick is an AI and Machine Learning leader with 14+ years of experience as a product and engineering executive. His foundation in AI comes from studying Neural Networks through a Boeing and DARPA joint research grant, which received an engineering capstone award from his alma mater, Duke University.
                    <br /><br />
                    Starting at Microsoft in Search and Recommendations, he went on to serve as CTO at Bottega, building zero-to-one solutions for leading enterprises like Square and Disney, and NIH-funded, TED-supported SleepSpace. In these leadership roles, Nick helped build and lead the implementation of novel ML and data-driven engineering solutions.
                    <br /><br />
                    He now guides VCs and Boards on AI strategy and implementation for their late-stage portfolio companies. His 5-Step AI Playbook for Executives forms the foundation of this program.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Matt Kirk */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/663bd5b0e4d18693800c1108_1673984243092.jpeg"
                    alt="Matt Kirk"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Matt Kirk</h3>
                  <p className="text-sm text-primary font-medium mb-3">Head of AI at AugmentAI, Head of AI at Zeitworks, O'Reilly author of Thoughtful Machine Learning</p>
                  <p className="text-muted-foreground">
                    Matt is a hands-on engineering leader in AI and Machine Learning. His experience includes leading AI teams at AugmentAI and Zeitworks, founding his own venture (Modulus7), and authoring the acclaimed O'Reilly book Thoughtful Machine Learning.
                    <br /><br />
                    Matt has a 15+ year track record of success in AI and Machine Learning. From building data models and ML systems to leading projects that unlock data potential with AI, he consistently drives business impact as a seasoned engineering executive. As a hands-on software engineer, he keeps abreast with the latest in AI through building at AugmentAI as well as leading and mentoring software engineering teams.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Todd Larsen */}
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/64a434b6a610d6a7db0f40aa/64a97ef0410ff2068560b25d_todd.png"
                    alt="Todd Larsen"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Todd Larsen</h3>
                  <p className="text-sm text-primary font-medium mb-3">CEO at TechLeaders, CTO at Serve2Perform, former Groupon, founder at Digit.co</p>
                  <p className="text-muted-foreground">
                    As a former Global Platform Engineer at Groupon, Founding Engineer at Digit, and current CEO of Technical Leaders, Todd has 15+ years of experience building and scaling products in startup mode and at-scale.
                    <br /><br />
                    From managing high performance teams to shipping solutions that customers love, Todd focuses on moving fast to create a positive impact on the world with technology. His expertise on change management and building strong technical teams has been instrumental for executives navigating AI transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="bg-white dark:bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">Trusted by companies like:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companyLogos.map((company, index) => (
                <img
                  key={index}
                  src={company.src}
                  alt={`${company.name} logo`}
                  className={`${company.height} w-auto opacity-70 hover:opacity-100 transition-opacity`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Proven Results
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-5x</div>
              <p className="text-muted-foreground">Operational Efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-muted-foreground">Years ML Expertise</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-muted-foreground">OpEx Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Fortune 500</div>
              <p className="text-muted-foreground">Enterprise Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Flexible Scheduling
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Customized program timing to fit your executive schedule
          </p>
          <div id="ck-form-638b6b22f1" className="mt-8"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiExecutiveStrategy;