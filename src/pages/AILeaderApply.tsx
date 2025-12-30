import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Sparkles, ArrowRight, Brain, Target, Users, Clock, Calendar, Shield } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { trackClick, trackConversion } from "@/utils/posthog";
import { useTrackScrollDepth } from "@/hooks/use-posthog";
import { useToast } from "@/hooks/use-toast";

const AILeaderApply = () => {
  useTrackScrollDepth('AI Leader Apply Page');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    teamSize: '',
    aiExperience: '',
    primaryGoal: '',
    commitment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackConversion('AI Leader Application Submitted', {
      location: 'application_form',
      company: formData.company,
      title: formData.title
    });

    // Redirect to Calendly for strategy session
    setTimeout(() => {
      window.location.href = "https://calendly.com/tech-leaders/ai-strategy";
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Apply to AI-First Leadership Program | Transform Into an AI Champion"
        description="Apply to join the next cohort of AI-First leaders. 8-week intensive program for non-technical executives to master AI strategy and transformation."
        keywords={['AI leadership application', 'executive AI training', 'AI program application']}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>APPLICATION FOR NEXT COHORT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Apply to the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mt-2">
                AI-First Leadership Program
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join a selective cohort of 15 executives committed to mastering AI leadership. Complete your application below.
            </p>
          </div>

          {/* Application Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-sm">1</span>
                    Your Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="Smith"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email" className="text-gray-300">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-sm">2</span>
                    Professional Background
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-300">Company *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-gray-300">Title *</Label>
                      <Input
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                        placeholder="VP of Operations"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-gray-300">Team Size *</Label>
                      <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 people</SelectItem>
                          <SelectItem value="11-50">11-50 people</SelectItem>
                          <SelectItem value="51-200">51-200 people</SelectItem>
                          <SelectItem value="201-1000">201-1,000 people</SelectItem>
                          <SelectItem value="1000+">1,000+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aiExperience" className="text-gray-300">AI Experience *</Label>
                      <Select onValueChange={(value) => handleInputChange('aiExperience', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Just getting started</SelectItem>
                          <SelectItem value="exploring">Exploring AI tools</SelectItem>
                          <SelectItem value="some">Some AI initiatives in progress</SelectItem>
                          <SelectItem value="active">Actively leading AI projects</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-sm">3</span>
                    Your Goals
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryGoal" className="text-gray-300">
                        What's your primary goal for joining this program? *
                      </Label>
                      <Textarea
                        id="primaryGoal"
                        required
                        value={formData.primaryGoal}
                        onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 min-h-[100px]"
                        placeholder="Tell us about the AI challenges you're facing and what you hope to achieve..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commitment" className="text-gray-300">
                        Are you able to commit 4-6 hours per week for 8 weeks? *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('commitment', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, I can commit fully</SelectItem>
                          <SelectItem value="mostly">Mostly, with occasional conflicts</SelectItem>
                          <SelectItem value="unsure">I need to check my schedule</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-7 shadow-xl"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application & Schedule Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    After submitting, you'll schedule a 30-minute strategy call to discuss your application.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">48-Hour Review</h4>
              <p className="text-sm text-gray-400">Applications reviewed within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Strategy Call</h4>
              <p className="text-sm text-gray-400">30-minute call to discuss fit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Selective Cohort</h4>
              <p className="text-sm text-gray-400">Only 15 spots per cohort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Why Leaders Choose This Program
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Brain, title: "No Coding Required", desc: "100% designed for non-technical leaders" },
              { icon: Target, title: "Practical Frameworks", desc: "Leave with actionable playbooks, not theory" },
              { icon: Users, title: "Peer Network", desc: "Connect with 15 fellow AI-First leaders" },
              { icon: CheckCircle2, title: "Proven Results", desc: "87% of graduates lead AI initiatives within 90 days" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Questions? Email us at{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-purple-400 hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AILeaderApply;
