import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, DollarSign, Heart, CheckCircle2, Mail, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Refer() {
  const handleReferralEmail = () => {
    const subject = encodeURIComponent('Technical Leaders Program Referral');
    const body = encodeURIComponent(`Hi [Name],

I wanted to reach out and let you know about an incredible program that has helped me advance my technical leadership career.

The Technical Leaders Program provides practical frameworks and strategies for gaining more influence, impact, and income without burning out. It's specifically designed for technical professionals ready to step up to the next level in their career.

I think you'd be a great fit for this program based on your experience and leadership potential. Would you be interested in learning more?

Here's the link to check it out: https://www.technical-leaders.com/

Let me know if you have any questions - I'd be happy to share more about my experience with the program.

Best regards,
[Your Name]`);

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const rewardOptions = [
    {
      icon: DollarSign,
      title: "Apply to Subscription",
      description: "Pause your payment for one month"
    },
    {
      icon: DollarSign,
      title: "Direct Bank Payment",
      description: "Receive cash payment to your bank account"
    },
    {
      icon: Heart,
      title: "Donate to Charity",
      description: "Support a cause you care about"
    }
  ];

  const terms = [
    "Reward is equivalent to one month of program fee",
    "Paid out after referee's second month of membership",
    "Requires warm referral and pre-declaration",
    "Only successful referrals that complete onboarding qualify",
    "Technical Leaders, Inc. reserves the right to modify terms"
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Good People Know Good People
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto animate-fade-in animation-delay-200 text-white/90">
            Help technical professionals advance their careers and earn rewards for successful referrals
          </p>
          <div className="animate-fade-in animation-delay-400">
            <Button size="lg" onClick={handleReferralEmail} className="bg-orange-600 hover:bg-orange-700 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Refer Someone
            </Button>
          </div>
        </div>
      </section>

      {/* Referral Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Referral Program</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Know someone ready to <span className="font-semibold text-foreground">step up to the next level</span> in their technical leadership career?
              Help them discover the Technical Leaders Program and earn rewards for successful referrals.
            </p>
          </div>

          <Card className="bg-secondary/30 border-0 mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground mb-4">
                  More influence, impact, and income without burning out
                </p>
                <p className="text-muted-foreground">
                  Our program is designed for technical professionals who are ready to advance their careers
                  through proven leadership frameworks and strategies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Referral Rewards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Referral Rewards
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {rewardOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-orange-100 text-orange-600 mx-auto">
                    <option.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Reward equivalent to one month of program fee
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Share the Program</h3>
                <p className="text-muted-foreground">Use our email template or share the program link with someone you think would benefit from technical leadership development.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">They Join & Succeed</h3>
                <p className="text-muted-foreground">Your referral enrolls in the program and completes their second month of membership.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Earn Your Reward</h3>
                <p className="text-muted-foreground">Choose how you'd like to receive your reward - subscription credit, bank payment, or charity donation.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={handleReferralEmail} className="bg-orange-600 hover:bg-orange-700">
              <Mail className="w-5 h-5 mr-2" />
              Start Referring Today
            </Button>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Terms and Conditions</h2>

          <Card className="bg-background border">
            <CardContent className="p-8">
              <div className="space-y-4">
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">{term}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Refer?
              </h2>
              <p className="text-xl mb-6">
                Help someone advance their technical leadership career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" onClick={handleReferralEmail}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Referral Email
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50"
                  onClick={() => window.location.href = "/call"}>
                  Learn More About Program
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-6 border-t border-white/20">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20"
                  onClick={() => window.open('https://www.linkedin.com/company/technical-leaders', '_blank')}>
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20"
                  onClick={() => window.open('https://twitter.com/technicalleaders', '_blank')}>
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20"
                  onClick={() => window.open('https://youtube.com/technicalleaders', '_blank')}>
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-sm mt-4 text-white/80">
                Technical Leaders, Inc.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}