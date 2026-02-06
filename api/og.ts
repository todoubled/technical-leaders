import type { VercelRequest, VercelResponse } from "@vercel/node";

const DEFAULT_IMAGE = "https://technical-leaders.com/opengraph-image-p98pqg.png";

const META: Record<string, { title: string; description: string; image?: string }> = {
  "/": {
    title: "AI Readiness Assessment | Technical Leaders",
    description: "Take the free 2-minute assessment to discover your Skill Maturity Level and get a personalized roadmap for AI-first operations. Join 6500+ tech leaders.",
  },
  "/t": {
    title: "T — Create Projects. Delegate to AI. Approve Deliverables.",
    description: "T is a free desktop AI assistant that runs privately on your Mac. Create projects, delegate tasks to AI agents, and review deliverables.",
  },
  "/t-download": {
    title: "Download T | Technical Leaders",
    description: "Download T for Mac. Set goals, delegate to AI, approve results.",
  },
  "/call": {
    title: "Book a Strategy Call | Technical Leaders",
    description: "Schedule a free strategy call to discuss how to advance your technical leadership career. Get personalized guidance from experienced CTOs and tech executives.",
  },
  "/ai-call": {
    title: "Book an AI Strategy Call | Technical Leaders",
    description: "Schedule a free AI strategy call to discuss how to leverage AI in your organization. Get personalized guidance from experienced AI implementation experts.",
  },
  "/calls": {
    title: "Book a Strategy Call | Technical Leaders",
    description: "Schedule a free strategy call to discuss how to advance your technical leadership career. Get personalized guidance from experienced CTOs and tech executives.",
  },
  "/call-confirmed": {
    title: "Call Confirmed | Technical Leaders",
    description: "Your call with Technical Leaders is confirmed. Prepare for your strategy session to scale your income, influence, and impact as a technical leader.",
  },
  "/ai-trade-school": {
    title: "AI Trade School - Master AI Tools Without Getting Technical",
    description: "12-week intensive program to master AI tools, build workflows, and 10x productivity without coding. Learn to leverage AI for business success.",
  },
  "/december": {
    title: "Launch Kit - Turn Your Tech Expertise Into $10K/Month",
    description: "Prove your offer works and hit $10K+/month by selling your expertise. Join 9 tech leaders in our December cohort.",
  },
  "/january": {
    title: "Launch Kit - Turn Your Tech Expertise Into $10K/Month",
    description: "Prove your offer works and hit $10K+/month by selling your expertise. Join 9 tech leaders in our January cohort.",
  },
  "/scale": {
    title: "Scale Program - Grow Your Tech Leadership Business",
    description: "Transform your expertise into a scalable business. For technical leaders ready to build consulting practices, advisory roles, and thought leadership platforms.",
  },
  "/marketing": {
    title: "Done-for-You Founder-Led Marketing Services | Technical Leaders",
    description: "Skip the trial and error. Get proven founder-led marketing systems that position you as the go-to solution in your industry.",
  },
  "/cfo": {
    title: "CFO Services for Tech Companies | Technical Leaders",
    description: "Fractional CFO services designed for tech founders and leaders. Get expert financial strategy, planning, and execution to scale your business with confidence.",
  },
  "/accredited": {
    title: "Accredited Tech Leaders",
    description: "Meet our team of accredited tech leaders who have demonstrated both technical and leadership skills to lead people and projects to successful outcomes.",
  },
  "/articles": {
    title: "Technical Leadership Articles - Proven Strategies from 300+ CTOs",
    description: "Practical insights from CTOs, VPs of Engineering, and tech executives. Real-world strategies for scaling teams, advancing careers, and building authority.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Technical Leaders",
    description: "Learn how Technical Leaders, Inc. collects, uses, and protects your personal information.",
  },
  "/refer": {
    title: "Referral Program | Technical Leaders",
    description: "Refer technical professionals to the Technical Leaders program and earn rewards. Help others advance their careers while earning subscription credits or cash payments.",
  },
  "/alternative-to-sidebar": {
    title: "Tech Leaders vs Sidebar - Why Tech Leaders Delivers Better ROI",
    description: "Compare Tech Leaders to Sidebar. Get guaranteed $25K+ opportunities in 6 months vs generic networking. One-time investment vs ongoing subscription.",
  },
  "/alternative-to-mba": {
    title: "Tech Leaders vs MBA - Why Smart Engineers Skip the MBA",
    description: "Compare Tech Leaders to an MBA. Get guaranteed $25K+ opportunities in 6 months vs 2 years of debt. Real tech leadership skills at 1/50th the cost.",
  },
  "/alternative-to-mit-oxford": {
    title: "Tech Leaders vs MIT & Oxford AI Courses - Get Practical AI Skills",
    description: "Why business leaders are choosing Tech Leaders over academic AI programs. Get practical AI implementation skills, not theory and certificates.",
  },
  "/in-demand": {
    title: "The Invisible to In-Demand Workshop | Technical Leaders",
    description: "Turn your expertise into daily opportunities without hours on LinkedIn. Join the lead system built for experts who hate selling themselves.",
  },
  "/playbook-confirmed": {
    title: "Book a 15-Minute Brainstorm | Technical Leaders",
    description: "Schedule a brainstorm session to uncover your primary goal blocker and develop a 3-step action plan for more influence, impact, and income.",
  },
  "/ship-ai": {
    title: "Ship AI Membership - Weekly AI Training & Office Hours",
    description: "Master the latest AI tools and workflows with weekly live training sessions, expert office hours, and a community of builders.",
  },
  "/ship-ai-training-program": {
    title: "Ship AI Training Program - 6-Week AI Training",
    description: "6-week comprehensive AI training program with coursework and live office hours. Learn AI workflows, tools, and implementation with hands-on support.",
  },
  "/ai-executive-strategy-program": {
    title: "AI Executive Strategy Program | Transform Your Organization",
    description: "Transform your organization with proven AI strategies for 3-5x efficiency gains. Cut OpEx 30% in under 6 months with our executive-focused AI program.",
  },
  "/ai-playbook-executives": {
    title: "Maximize Business Impact with AI: The 5-Step Playbook for Executives",
    description: "87% of all AI projects never make it into production. Download our free executive playbook to accelerate revenue growth and reduce operational costs.",
  },
  "/call-templates": {
    title: "Free Consulting Call Templates | Technical Leaders",
    description: "Get free consulting call templates and book a strategy session to boost your consulting income and impact.",
  },
  "/launch-with-us": {
    title: "Launch With Us - Personal Tech Leadership Accelerator Program",
    description: "6-week intensive program for senior engineers ready to become CTOs, VPs, and technical executives. Personal coaching, done-for-you systems, and guaranteed results.",
  },
  "/how-to-model-your-offer": {
    title: "How to Design Your Offer Model | Technical Leaders",
    description: "Workshop Training to learn how to assess your skillset, position your value, and design your offer model.",
  },
  "/finance-for-founders": {
    title: "Finance for Founders Workshop | Technical Leaders",
    description: "Master the financial fundamentals that drive business growth. From accounting basics to cash flow mastery in one practical session.",
  },
  "/finance-for-founders-workshop": {
    title: "Finance for Founders Workshop Recording | Technical Leaders",
    description: "Watch the complete Finance for Founders workshop recording plus get exclusive bonus resources. Master financial fundamentals with lifetime access.",
  },
  "/finance-workshop-confirmed": {
    title: "Registration Confirmed - Finance for Founders Workshop",
    description: "Your spot is reserved for the Finance for Founders Workshop. Check your email for important details.",
  },
  "/brand-character-workshop": {
    title: "Build Your Brand Character Workshop | Technical Leaders",
    description: "Design the personal brand that makes you unforgettable. From generic to magnetic in one practical session.",
  },
  "/brand-workshop-confirmed": {
    title: "Registration Confirmed - Build Your Brand Character Workshop",
    description: "Your spot is reserved for the Build Your Brand Character Workshop. Check your email for important details.",
  },
  "/video-workshop": {
    title: "Creating Viral Video Content 101 | Technical Leaders",
    description: "Turn your expertise into video content that attracts the right clients. From scattered ideas to a clear system you can use immediately.",
  },
  "/how-to-win-visibility-workshop": {
    title: "How to Win Visibility & Book More Meetings | Technical Leaders",
    description: "A simple, repeatable system to become the first call when urgency hits. 45-minute workshop with the 3-7-1 Framework.",
  },
  "/visibility-workshop-confirmed": {
    title: "Registration Confirmed - How to Win Visibility & Book More Meetings",
    description: "Your spot is reserved for the How to Win Visibility & Book More Meetings Workshop. Check your email for important details.",
  },
  "/ai": {
    title: "AI Training Programs | Technical Leaders",
    description: "Choose between intensive foundational training or ongoing AI support. Master AI on your timeline with programs designed for your learning style.",
  },
  "/ai-for-vc": {
    title: "AI Executive Training for VCs & Private Equity | Technical Leaders",
    description: "Master prompt engineering and AI workflows without coding. 4-week executive program for venture capitalists and private equity professionals.",
  },
  "/ai-for-leaders": {
    title: "The AI Leader Program | Technical Leaders",
    description: "8 hours of live intensive AI training built on Anthropic's Agent Skills standard. Get the AI SOS implementation playbook and AI Leader certification.",
  },
  "/benchmark": {
    title: "AI Leadership Benchmark | Technical Leaders",
    description: "Assess your AI leadership capabilities and discover how to leverage AI to scale your influence, impact, and income as a technical leader.",
  },
  "/10-before-10": {
    title: "10 Before 10 - Get Your Next Client Fast",
    description: "The 3-step Do-or-Die strategy to shoot 10 shots before 10am and land your first consulting client. Proven system used by 300+ tech leaders.",
  },
  "/full-playbook": {
    title: "The Productize & Monetize Your Expertise Playbook",
    description: "Transform your technical expertise into scalable, high-value offerings that generate leverage, income, and impact. Complete step-by-step guide for tech leaders.",
  },
  "/ai-workspace": {
    title: "AI Workspace - Build Your Development Team",
    description: "Learn terminal, Git, and AI collaboration fundamentals. Transform from coding alone to leading a team where AI agents accelerate your development.",
  },
  "/ai-agent-skills": {
    title: "AI Agent Skills Workshop | Technical Leaders",
    description: "Learn how to build modular AI agents with Claude's Agent Skills. Create automated workflows without code. Free weekly workshop with live demos.",
  },
  "/workshop-replay": {
    title: "AI Agent Skills Workshop Recording | Technical Leaders",
    description: "Watch the complete AI Agent Skills workshop recording plus get exclusive bonus resources. Learn to build modular AI agents with lifetime access.",
  },
  "/advanced-claude": {
    title: "Advanced Claude Code Pro Tips - Master AI Development",
    description: "Learn advanced Claude Code techniques. Master CLI automation, visual workflows, MCP servers, and cost optimization.",
  },
  "/ai-for-suits": {
    title: "AI for Suits - Executive AI Strategy Without the Tech",
    description: "Master AI for business growth without coding. Perfect for sales, BD, and executive leaders ready to innovate without waiting for engineering resources.",
  },
  "/ai-rd-system": {
    title: "AI R&D System Tutorial | Technical Leaders",
    description: "Master the 6-step AI R&D framework. Learn systematic AI product development from market research to revenue launch using behavioral science and AI tools.",
  },
  "/how-it-works": {
    title: "How It Works | Technical Leaders",
    description: "Discover how Technical Leaders helps founders and executives launch and scale their businesses with proven strategies and systems.",
  },
  "/speak": {
    title: "Speaking Request - Todd Larsen | Technical Leaders",
    description: "Request Todd Larsen to speak at your event, podcast, or conference. Expert in AI leadership, technical leadership, and building consulting practices.",
  },
  "/fortune-100-prompt-library": {
    title: "Fortune 100 Prompt Library - The Non-Technical Guide to Prompt Engineering",
    description: "Master prompt engineering in 30 minutes. Learn how to give AI clear instructions that get amazing results. Includes real examples, templates, and exercises.",
  },
  "/fortune-100-ai-workspace": {
    title: "Fortune 100 AI Workspace - Complete Setup Guide",
    description: "Set up the same AI workspace used by Fortune 100 companies. Combine NotebookLM for creative thinking with Claude Code for execution.",
  },
  "/library": {
    title: "The Fortune 100 AI Skills Library - Build AI Workflows in Minutes",
    description: "Build AI workflows to go from Objective to Key Result in minutes without developer resources. Agentic prompts and workflow designs.",
  },
  "/library-confirmed": {
    title: "Library Access Confirmed | Technical Leaders",
    description: "Your library access is confirmed. Book a free AI strategy call to get personalized guidance on leveraging AI in your organization.",
  },
  "/playbook": {
    title: "Productize & Monetize Your Expertise | Technical Leaders",
    description: "Diversify and grow your income without burning out. Get 1000+ warm lead examples and proven tactics to find ideal clients with ZERO ad spend.",
  },
  "/ai-program": {
    title: "The AI Agents Workflow Program - Build Your First AI Tool in 6 Weeks",
    description: "Add 5-10 hours back into your week and ship your first AI-powered tool in six weeks. No code. No overwhelm.",
  },
  "/ai-first-program": {
    title: "AI-First - Private Cohort Training for Teams",
    description: "Upskill your entire team to AI-proficiency within 6 weeks so they produce AI-assisted work twice as fast within 60 days.",
  },
  "/ai-sos": {
    title: "AI SOS | Technical Leaders",
    description: "AI SOS presentation and resources from Technical Leaders.",
  },
  "/ai-sos-workspace": {
    title: "AI SOS Workspace Setup Tutorial | Technical Leaders",
    description: "Complete guide to setting up Claude Desktop for AI agent workflows. Learn to install skills, configure MCP connections, and build automated workflows.",
  },
  "/office-hours-demo": {
    title: "Claude Code in Desktop App | Technical Leaders",
    description: "Learn how to use Claude Code in the Claude Desktop app. Build, debug, and ship production-ready code with AI-powered development.",
  },
  "/podcast": {
    title: "Podcast | Tech Leaders",
    description: "Watch conversations with technical leaders about AI, leadership, and building consulting businesses.",
  },
  "/healthcare-ai-case-study": {
    title: "Healthcare AI Case Study - $75M Health Tech Company | Technical Leaders",
    description: "How a $75M health tech company became AI-first in just weeks. Learn how we aligned 30 leaders with a custom AI adoption program.",
  },
  "/2025": {
    title: "Technical Leaders - Get Promoted or Promote Yourself",
    description: "Stop waiting for promotions. Join 300+ CTOs, VPs of Engineering, and tech executives who took control of their careers.",
  },
  "/assessment": {
    title: "AI Agent Workflows Assessment | Tech Leaders",
    description: "Take our free 2-minute assessment to discover your Skill Maturity Level and get a personalized 90-day AI operations roadmap.",
  },
  "/ai-priorities": {
    title: "AI Priorities - Use the RICE Framework for Skills",
    description: "Stop chasing random AI use cases. Start with strategic capability building using the RICE prioritization framework.",
  },
  "/ai-waitlist": {
    title: "Join the Waitlist | Technical Leaders",
    description: "We're closed on purpose. Join the waitlist to be the first to know when we open enrollment for our programs.",
  },
  "/26-workflows": {
    title: "26 Claude Agent Skills for Business Automation | Technical Leaders",
    description: "A comprehensive guide to building AI-powered workflows across Sales, Marketing, Operations, Finance, Legal, and Product & Engineering.",
  },
  "/rga-playbook": {
    title: "RGA Playbook - Revenue Generating Activities for Consultants",
    description: "The complete playbook for revenue generating activities to land consulting clients. AI-powered system for finding, connecting with, and converting ideal clients.",
  },
  "/ai-coworker": {
    title: "AI Coworker - Set Up Claude as Your Personal Executive Assistant",
    description: "Learn how to set up Claude Code as your AI coworker and personal executive assistant. A step-by-step tutorial to create your personalized AI workflow system.",
  },
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const rawPath = (req.query.path as string) || "";
  const path = "/" + rawPath.replace(/^\/+/, "");

  const meta = META[path] || {
    title: "Technical Leaders",
    description:
      "Transform your technical expertise into strategic leadership. Join a community of CTOs, VPs of Engineering, and technical executives.",
  };

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = meta.image || DEFAULT_IMAGE;
  const url = `https://technical-leaders.com${path === "/" ? "" : path}`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Technical Leaders" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:site" content="@technical_leaders" />
  <link rel="icon" type="image/png" href="/favicon.webp" />
</head>
<body></body>
</html>`);
}
