import { useState, useEffect } from 'react';
import {
  ChevronRight,
  Check,
  Users,
  User,
  Building,
  Building2,
  Brain,
  FileText,
  Cog,
  Zap,
  TrendingUp,
  Lock,
  AlertCircle,
  Clock,
  Gauge,
  Calendar,
  Search,
  ArrowRight,
  Star,
  Download,
  LucideIcon
} from 'lucide-react';
import SEO from '@/components/SEO';
import { trackEvent, trackClick } from '@/utils/posthog';
import { useTrackScrollDepth } from '@/hooks/use-posthog';

// Extend Window interface for RightMessage
declare global {
  interface Window {
    RM: any[];
  }
}

interface QuestionOption {
  id: string;
  label: string;
  sublabel: string;
  icon?: LucideIcon;
}

interface Question {
  id: string;
  headline?: string;
  dynamicHeadline?: Record<string, string>;
  question: string;
  microcopy?: string;
  dynamicMicrocopy?: Record<string, string>;
  options: QuestionOption[];
}

interface Answers {
  [key: string]: string;
}

interface MaturityInfo {
  level: number;
  name: string;
  headline: string;
  color: string;
}

interface Skill {
  title: string;
  desc: string;
}

interface CTAInfo {
  headline: string;
  desc: string;
  primary: string;
  secondary: string | null;
}

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(true);

  useTrackScrollDepth('Assessment');

  // Track assessment start on page load
  useEffect(() => {
    trackEvent('Assessment Started', { page: 'assessment' });
    if (typeof window !== 'undefined' && window.RM) {
      window.RM.push(['setCustomField', 'assessment_started', 'true']);
    }
  }, []);

  const questions: Question[] = [
    {
      id: 'role',
      headline: "First, let's personalize your roadmap...",
      question: "Who will you be implementing AI agent workflows for?",
      microcopy: "Your answer helps us focus on what matters most for your situation.",
      options: [
        { id: 'B2C-solo', label: 'Just me', sublabel: "I'm a solopreneur or freelancer", icon: User },
        { id: 'B2B-small', label: 'My small team', sublabel: '2-10 people', icon: Users },
        { id: 'B2B-mid', label: 'My department', sublabel: '11-50 people', icon: Building },
        { id: 'B2B-enterprise', label: 'My organization', sublabel: '50+ people', icon: Building2 },
      ]
    },
    {
      id: 'maturity',
      dynamicHeadline: {
        'B2C-solo': "Got it — let's assess your personal knowledge system...",
        'B2B-small': "Perfect — let's see where your team stands...",
        'B2B-mid': "Understood — let's evaluate your operational maturity...",
        'B2B-enterprise': "Understood — let's evaluate your operational maturity...",
      },
      question: "How are your critical processes and expertise currently captured?",
      microcopy: "This determines your Skill Maturity Level (L1-L5) in your results.",
      options: [
        { id: 'L1-tacit', label: 'Mostly in my head', sublabel: "I know what to do, but it's not written down", icon: Brain },
        { id: 'L2-documented', label: 'Some documentation exists', sublabel: 'but it gathers dust or gets ignored', icon: FileText },
        { id: 'L3-standardized', label: 'Solid SOPs', sublabel: "but they don't leverage AI at all", icon: Cog },
        { id: 'L4-experimenting', label: 'Using AI tools', sublabel: 'but struggling to make them reliable', icon: Zap },
      ]
    },
    {
      id: 'pain',
      dynamicHeadline: {
        'L1-tacit': "You're not alone — 70% of business knowledge is undocumented...",
        'L2-documented': "Classic problem — processes that nobody follows...",
        'L3-standardized': "Good foundation — now let's add AI leverage...",
        'L4-experimenting': "We see this constantly — AI that almost works...",
      },
      question: "What's the #1 problem keeping you up at night?",
      microcopy: "We'll prioritize your roadmap based on this.",
      options: [
        { id: 'pain-scale', label: "Can't scale without hiring", sublabel: 'growth = more headcount', icon: TrendingUp },
        { id: 'pain-bottleneck', label: 'Knowledge trapped in key people', sublabel: "I'm the bottleneck (or someone else is)", icon: Lock },
        { id: 'pain-ai-fail', label: 'AI keeps failing', sublabel: 'tried automation but it breaks or disappoints', icon: AlertCircle },
        { id: 'pain-slow', label: 'Current systems too slow', sublabel: 'EOS/OKRs taking months not weeks', icon: Clock },
        { id: 'pain-overwhelm', label: 'Drowning in AI tools', sublabel: "don't know where to start", icon: Gauge },
      ]
    },
    {
      id: 'experience',
      headline: "Almost there — one more for context...",
      question: "Have you tried implementing a business operating system before?",
      dynamicMicrocopy: {
        'exp-eos': "AI SOS builds on EOS principles — you'll see familiar concepts, turbocharged for AI.",
        'exp-okr': "Great news — your goal-setting foundation translates perfectly to skill-based execution.",
        'exp-other': "Perfect — we'll show you how AI SOS complements what you already know.",
        'exp-none': "Even better — no old habits to unlearn. You're starting with the AI-native approach.",
      },
      options: [
        { id: 'exp-eos', label: 'Yes, EOS/Traction', sublabel: 'used it or using it now' },
        { id: 'exp-okr', label: 'Yes, OKRs/MBOs', sublabel: 'at current or past company' },
        { id: 'exp-other', label: 'Yes, other framework', sublabel: 'Scaling Up, 4DX, custom system' },
        { id: 'exp-none', label: 'No formal system yet', sublabel: 'winging it or just getting started' },
      ]
    },
    {
      id: 'urgency',
      headline: "Last question — then your personalized roadmap...",
      question: "How soon do you need to see results?",
      microcopy: "We'll calibrate your 90-day roadmap intensity accordingly.",
      options: [
        { id: 'urgent-now', label: 'This week', sublabel: "we're in crisis mode", icon: AlertCircle },
        { id: 'urgent-quarter', label: 'This quarter', sublabel: 'have specific goals to hit', icon: Calendar },
        { id: 'urgent-year', label: 'This year', sublabel: 'planning ahead strategically', icon: TrendingUp },
        { id: 'urgent-research', label: 'Just exploring', sublabel: 'researching options', icon: Search },
      ]
    }
  ];

  // Send segment data to RightMessage
  const sendToRightMessage = (key: string, value: string) => {
    if (typeof window !== 'undefined' && window.RM) {
      // RightMessage segment API
      window.RM.push(['setCustomField', key, value]);
    }
  };

  // Send all final segments to RightMessage on completion
  const sendAllSegmentsToRightMessage = (finalAnswers: Answers) => {
    if (typeof window !== 'undefined' && window.RM) {
      // Map answers to RightMessage custom fields
      Object.entries(finalAnswers).forEach(([key, value]) => {
        window.RM.push(['setCustomField', `assessment_${key}`, value]);
      });

      // Also set the maturity level as a separate field
      const maturity = getMaturityInfo();
      window.RM.push(['setCustomField', 'maturity_level', `L${maturity.level}`]);
      window.RM.push(['setCustomField', 'assessment_completed', 'true']);
    }
  };

  const getMaturityInfo = (): MaturityInfo => {
    const maturityMap: Record<string, MaturityInfo> = {
      'L1-tacit': { level: 1, name: 'Tacit', headline: "Your expertise is valuable — but trapped. Let's liberate it.", color: 'text-red-400' },
      'L2-documented': { level: 2, name: 'Documented', headline: "You've got the foundation. Now let's make it actually work.", color: 'text-orange-400' },
      'L3-standardized': { level: 3, name: 'Standardized', headline: "Solid systems — ready for AI leverage.", color: 'text-yellow-400' },
      'L4-experimenting': { level: 4, name: 'Experimenting', headline: "You're ahead of 90%. Let's make it reliable.", color: 'text-green-400' },
    };
    return maturityMap[answers.maturity] || maturityMap['L1-tacit'];
  };

  const getTopSkills = (): Skill[] => {
    const role = answers.role;
    const pain = answers.pain;

    if (role === 'B2C-solo') {
      return [
        { title: 'Client Delivery Process', desc: 'Stop reinventing the wheel on every project' },
        { title: 'Lead Qualification', desc: 'Let AI pre-screen so you focus on closeable deals' },
        { title: 'Content Creation Workflow', desc: 'Extract your expertise into repeatable assets' },
      ];
    }
    if (pain === 'pain-scale') {
      return [
        { title: 'Onboarding & Training', desc: 'New hires productive in days, not months' },
        { title: 'Client Communication', desc: 'Consistent voice across your team' },
        { title: 'Quality Assurance', desc: 'Human standards, AI execution speed' },
      ];
    }
    if (pain === 'pain-ai-fail') {
      return [
        { title: 'Process Documentation', desc: 'Convert tribal knowledge to AI-executable specs' },
        { title: 'AI Guardrails', desc: "Prevent the failures you've experienced" },
        { title: 'Execution Routing', desc: 'Right task to right executor (human or AI)' },
      ];
    }
    if (pain === 'pain-slow') {
      return [
        { title: 'Skill Inventory Audit', desc: 'Map what you actually have vs. think you have' },
        { title: 'Quick Win Identification', desc: '3 skills to automate this quarter' },
        { title: 'Measurement Framework', desc: 'Track leverage ratio, not just activity' },
      ];
    }
    return [
      { title: 'Core Process Mapping', desc: 'Identify your highest-leverage activities' },
      { title: 'Knowledge Extraction', desc: 'Turn expertise into executable specs' },
      { title: 'AI Integration Points', desc: 'Where AI adds value vs. human judgment' },
    ];
  };

  const getCTA = (): CTAInfo => {
    const urgency = answers.urgency;
    const role = answers.role;

    if (urgency === 'urgent-now') {
      return {
        headline: 'Your Situation Calls for Speed',
        desc: "Book a 30-minute AI Workflow Audit. We'll identify your highest-leverage skill to systematize first and give you a 14-day implementation plan.",
        primary: 'Book Your Audit Call',
        secondary: null
      };
    }
    if (urgency === 'urgent-quarter') {
      return {
        headline: 'Ready for Your 90-Day Transformation?',
        desc: 'Download your AI SOS™ Guide and join our next workshop to systematize your first 5 skills this quarter.',
        primary: 'Get the Guide',
        secondary: 'See Workshop Dates'
      };
    }
    if (role === 'B2C-solo') {
      return {
        headline: 'Your Solo AI Operating System',
        desc: 'Download the AI SOS™ Guide and start with your #1 skill. Most solopreneurs see results within 2 weeks.',
        primary: 'Get Your Guide',
        secondary: null
      };
    }
    return {
      headline: 'Smart to Plan Ahead',
      desc: 'Start with the AI SOS™ Guide — it covers the Skill Spec template, maturity model, and 8-week implementation playbook.',
      primary: 'Download the Guide (Free)',
      secondary: null
    };
  };

  const handleStartAssessment = () => {
    setStarted(true);
    trackEvent('Assessment Started', { page: 'assessment' });

    // Trigger RightMessage to track assessment start
    if (typeof window !== 'undefined' && window.RM) {
      window.RM.push(['setCustomField', 'assessment_started', 'true']);
    }
  };

  const handleAnswer = (questionId: string, answerId: string) => {
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);

    // Track the answer in PostHog
    trackEvent('Assessment Answer', {
      question: questionId,
      answer: answerId,
      step: currentStep + 1
    });

    // Send to RightMessage immediately for real-time segmentation
    sendToRightMessage(`assessment_${questionId}`, answerId);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
        sendAllSegmentsToRightMessage(newAnswers);
        trackEvent('Assessment Completed', {
          answers: newAnswers,
          maturity_level: getMaturityInfo().level
        });
      }, 300);
    }
  };

  const handlePrimaryCTA = () => {
    const cta = getCTA();
    trackClick('Assessment CTA Primary', {
      button: cta.primary,
      urgency: answers.urgency,
      role: answers.role
    });

    if (answers.urgency === 'urgent-now') {
      window.location.href = '/call';
    } else {
      // Fallback to playbook page
      window.location.href = '/ai-sos';
    }
  };

  const handleSecondaryCTA = () => {
    trackClick('Assessment CTA Secondary', {
      button: 'See Workshop Dates',
      urgency: answers.urgency
    });
    window.location.href = '/ai-agent-skills';
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setStarted(false);
    trackEvent('Assessment Reset', {});
  };

  // Welcome Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <SEO
          title="AI Agent Workflows Assessment | Tech Leaders"
          description="Take our free 2-minute assessment to discover your Skill Maturity Level and get a personalized 90-day AI operations roadmap."
          keywords={['AI assessment', 'operations maturity', 'AI readiness', 'skill assessment', 'AI operations']}
          image="https://technical-leaders.com/ai-in-ar.png"
        />
        <div className="max-w-xl w-full text-center">
          <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
            Free 2-Minute Assessment
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Are You Ready for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI-First Operations?
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Answer 5 quick questions. Get your Skill Maturity Level, your top 3 skills to systematize, and a personalized 90-day plan.
          </p>

          <button
            onClick={handleStartAssessment}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
          >
            Start My Assessment
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Takes 90 seconds</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Instant results</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> No fluff</span>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['JK', 'SM', 'RC', 'TL'].map((initials, i) => (
                <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  ['bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'][i]
                }`}>
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
            </div>
            <span className="text-gray-400 text-sm">Join <strong className="text-white">6,500+</strong> tech leaders</span>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResults) {
    const maturity = getMaturityInfo();
    const skills = getTopSkills();
    const cta = getCTA();

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4 py-12">
        <SEO
          title="Your AI Agent Workflow Results | Technical Leaders"
          description="Your personalized AI operations assessment results and 90-day roadmap."
          image="https://technical-leaders.com/ai-in-ar.png"
        />
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              Assessment Complete
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Your AI Agent Workflow Results</h1>
          </div>

          {/* Maturity Level Card */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Your Skill Maturity Level</h2>

            <div className="flex items-center gap-4 mb-4">
              <div className={`text-5xl font-bold ${maturity.color}`}>L{maturity.level}</div>
              <div>
                <div className={`text-xl font-semibold ${maturity.color}`}>{maturity.name}</div>
                <div className="text-gray-400 text-sm">{maturity.headline}</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex gap-1 mt-4">
              {[1,2,3,4,5].map(level => (
                <div
                  key={level}
                  className={`h-2 flex-1 rounded-full ${
                    level <= maturity.level ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>L1 Tacit</span>
              <span>L5 Optimizing</span>
            </div>
          </div>

          {/* Top 3 Skills */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
              Your Top 3 Skills to Systematize First
            </h2>

            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white font-medium">{skill.title}</div>
                    <div className="text-gray-400 text-sm">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-2">{cta.headline}</h2>
            <p className="text-gray-300 mb-6">{cta.desc}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePrimaryCTA}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
              >
                <Download className="w-5 h-5" />
                {cta.primary}
              </button>
              {cta.secondary && (
                <button
                  onClick={handleSecondaryCTA}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
                >
                  {cta.secondary}
                </button>
              )}
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex -space-x-2">
                {['JK', 'SM', 'RC', 'TL'].map((initials, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    ['bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'][i]
                  }`}>
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">
              "Finally, a framework that doesn't take 18 months to implement."
            </p>
            <p className="text-gray-500 text-sm">- Sarah K., VP Operations</p>
          </div>

          {/* Reset */}
          <div className="text-center mt-8">
            <button onClick={resetAssessment} className="text-gray-500 hover:text-gray-300 text-sm underline">
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  const question = questions[currentStep];
  const prevQuestionId = currentStep > 0 ? questions[currentStep - 1].id : null;
  const prevAnswer = prevQuestionId ? answers[prevQuestionId] : null;

  const dynamicHeadline = question.dynamicHeadline && prevAnswer
    ? question.dynamicHeadline[prevAnswer] || question.headline
    : question.headline;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <SEO
        title={`AI Assessment - Question ${currentStep + 1} | Technical Leaders`}
        description="Complete your AI-first operations assessment to get personalized recommendations."
        image="https://technical-leaders.com/ai-in-ar.png"
      />
      <div className="max-w-xl w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Step {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <p className="text-cyan-400 text-sm mb-3">{dynamicHeadline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{question.question}</h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const Icon = option.icon;
            const isSelected = answers[question.id] === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswer(question.id, option.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                {Icon && (
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-blue-500/30' : 'bg-slate-700'
                  }`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-gray-400'}`} />
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-medium">{option.label}</div>
                  <div className={`text-sm ${isSelected ? 'text-blue-300' : 'text-gray-500'}`}>{option.sublabel}</div>
                </div>
                <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-gray-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Microcopy */}
        <p className="text-center text-gray-500 text-sm mt-6">
          {question.dynamicMicrocopy && answers[question.id]
            ? question.dynamicMicrocopy[answers[question.id]]
            : question.microcopy
          }
        </p>
      </div>
    </div>
  );
};

export default Assessment;
