import { useState } from 'react';
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

  const facultyMembers = [
    {
      name: "Nick Talwar",
      title: "Ex-Microsoft Technical Leader",
      description: "15+ years of machine learning expertise with enterprise-scale implementations"
    },
    {
      name: "Matt Kirk",
      title: "Head of AI at AugmentAI",
      description: "Leading AI transformation initiatives for Fortune 500 companies"
    },
    {
      name: "Todd Larsen",
      title: "CEO at TechLeaders",
      description: "Strategic technology leadership with Microsoft, Square, and Disney experience"
    }
  ];

  const companyLogos = [
    "Red Hat",
    "Peloton", 
    "Calendly",
    "GitLab"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Executive Strategy Program | Transform Your Organization"
        description="Transform your organization with proven AI strategies for 3-5x efficiency gains. Cut OpEx 30% in under 6 months with our executive-focused AI program."
        keywords={['AI strategy', 'executive program', 'artificial intelligence', 'business transformation', 'operational efficiency']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Executive Strategy Program
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your organization with proven AI strategies for 3-5x efficiency gains
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            <Download className="mr-2 h-5 w-5" />
            Download the Curriculum
          </Button>
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

      {/* Executive Faculty */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Executive Faculty
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn from industry leaders with 15+ years of machine learning expertise
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.title}</Badge>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">Trusted by companies like:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-2xl font-semibold text-muted-foreground/70">
                {company}
              </div>
            ))}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Flexible Scheduling
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Customized program timing to fit your executive schedule
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Enroll Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download Curriculum
            </Button>
          </div>
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