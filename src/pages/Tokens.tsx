import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlignVerticalSpaceAround,
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  Database,
  FileText,
  Gauge,
  Layers,
  MessageSquare,
  Printer,
  Receipt,
  Repeat,
  Scissors,
  Share2,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

import Navigation from '@/components/Navigation';
import { CostCalculator } from '@/components/tokens/CostCalculator';
import { ModelComparisonTable } from '@/components/tokens/ModelComparisonTable';
import { CostLeverCard } from '@/components/tokens/CostLeverCard';
import { PRICING_AS_OF } from '@/lib/token-calculator';

// ─────────────────────────────────────────────────────────────────────────
// SEO + Page
// ─────────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "What is a token? An executive's guide to LLM costs";
const PAGE_DESCRIPTION =
  'Tokens explained in plain English. Where teams waste them, the seven cost levers that cut bills, and an interactive calculator with multi-provider comparison. Built for non-technical leaders.';
const CANONICAL_URL = 'https://technical-leaders.com/tokens';
const OG_IMAGE = 'https://technical-leaders.com/opengraph-image-p98pqg.png';

// ─────────────────────────────────────────────────────────────────────────
// Top-level page
// ─────────────────────────────────────────────────────────────────────────

export default function Tokens() {
  return (
    <div className="bg-longhand-paper text-longhand-ink min-h-screen font-sans antialiased">
      <PageHead />
      <PrintStyles />

      <Navigation hideCTA variant="light" logoSrc="/transparent-bg-logo.png" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 pt-24 md:pt-28 pb-10 sm:pb-14 space-y-16 sm:space-y-20">
        <Hero />
        <WhatIsAToken />
        <WhereTokensGetWasted />
        <section id="calculator-section" className="scroll-mt-12">
          <SectionHeader
            eyebrow="Interactive"
            title="See your bill"
            sub="Plug in your workload. Try a different model. Toggle caching. The number moves with you."
          />
          <CostCalculator />
        </section>
        <section id="comparison" className="scroll-mt-12">
          <SectionHeader
            eyebrow="Comparison"
            title="Every model worth knowing"
            sub="Sortable. The stars mark the right default for most workloads — not the most expensive option, the one that actually does the job."
          />
          <ModelComparisonTable />
        </section>
        <PersonalLevers />
        <OrgMetering />
        <Glossary />
        <FooterCTA />
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────────────

function PageHead() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: { '@type': 'Organization', name: 'Technical Leaders' },
    publisher: {
      '@type': 'Organization',
      name: 'Technical Leaders',
      logo: { '@type': 'ImageObject', url: 'https://technical-leaders.com/favicon.webp' },
    },
    mainEntityOfPage: CANONICAL_URL,
    dateModified: new Date().toISOString().slice(0, 10),
  };
  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href={CANONICAL_URL} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="Technical Leaders" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

function PrintStyles() {
  // A scoped <style> tag is the smallest, dependency-free way to hit
  // print-only rules without polluting the global stylesheet.
  return (
    <style>{`
      @media print {
        @page { margin: 0.65in; }
        html, body { background: #fff !important; color: #1a1a1a !important; }
        .no-print { display: none !important; }
        a { color: inherit !important; text-decoration: none !important; }
        .print-only { display: block !important; }
        section, article, [data-print-keep-together] { break-inside: avoid; }
        h1, h2, h3 { break-after: avoid; }
      }
      .print-only { display: none; }
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition: none !important; }
      }
    `}</style>
  );
}

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: PAGE_TITLE, url });
        return;
      }
    } catch {
      // ignore — fall through to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: 'Link copied',
        description: 'Your calculator inputs are baked into the link.',
      });
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: 'Could not copy', description: 'Copy the URL from your address bar.' });
    }
  };

  const handlePrint = () => window.print();

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-longhand-accent-light via-longhand-paper to-longhand-paper rounded-3xl" />
      <div className="px-2 sm:px-6 py-10 sm:py-14">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-longhand-border px-3 py-1 text-xs text-longhand-muted no-print">
          <Sparkles className="w-3 h-3 text-longhand-accent" aria-hidden />
          AI Essentials
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-longhand-ink leading-[1.05] mt-4 max-w-3xl">
          What is a token,<br className="hidden sm:block" /> and how do teams waste them?
        </h1>
        <p className="mt-5 text-lg text-longhand-ink/85 max-w-2xl leading-relaxed">
          Tokens are the units LLMs read and write — roughly{' '}
          <strong className="text-longhand-ink">¾ of a word</strong> in English. You're billed per
          million of them. Most teams could cut their bill 40–70% by changing two or three things.
          Here's where the money leaks — and the short list of fixes.
        </p>

        <Card className="mt-8 bg-white/90 backdrop-blur border-longhand-border rounded-2xl p-5 sm:p-7 shadow-sm" data-print-keep-together>
          <p className="text-xs uppercase tracking-wider text-longhand-muted font-medium">
            Four leaks most teams have right now
          </p>
          <ul className="mt-3 space-y-3 text-longhand-ink leading-relaxed">
            <BulletInsight>
              <strong>The biggest leak is model choice.</strong> The same task can cost{' '}
              <em>50× more</em> on a flagship than on a fast model — often with no quality
              difference. Reach for the smaller one first.
            </BulletInsight>
            <BulletInsight>
              <strong>Output costs 3–6× more than input.</strong> Reading is cheap; writing is
              expensive. A "be terse" rule plus a max-tokens cap usually pays for itself in a week.
            </BulletInsight>
            <BulletInsight>
              <strong>Caching is free money most teams leave on the table.</strong> Re-sending a
              long context (system prompt, knowledge base, codebase) without caching wastes 80–90%
              of input spend.
            </BulletInsight>
            <BulletInsight>
              <strong>Long conversations bill quadratically.</strong> Each turn re-sends every
              prior turn. Turn 20 of a chat can cost 20× turn 1. Compact and restart.
            </BulletInsight>
          </ul>
        </Card>

        <div className="mt-7 flex flex-wrap items-center gap-3 no-print">
          <Button
            onClick={() => {
              document
                .getElementById('calculator-section')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-longhand-accent hover:bg-longhand-accent-hover text-white h-11 px-5"
          >
            Try the calculator <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden />
          </Button>
          <Button
            variant="outline"
            onClick={handleShare}
            className="border-longhand-border bg-white text-longhand-ink hover:bg-longhand-accent-light h-11 px-5"
          >
            <Share2 className="w-4 h-4 mr-1.5" aria-hidden />
            {copied ? 'Link copied' : 'Share this page'}
          </Button>
          <Button
            variant="ghost"
            onClick={handlePrint}
            className="text-longhand-muted hover:text-longhand-ink h-11 px-3"
          >
            <Printer className="w-4 h-4 mr-1.5" aria-hidden />
            Download as PDF
          </Button>
        </div>

        <p className="mt-5 text-xs text-longhand-muted">
          Pricing as of <span className="text-longhand-ink font-medium">{PRICING_AS_OF}</span>.
          Verify current rates at the provider's site before budgeting.
        </p>
      </div>
    </section>
  );
}

function BulletInsight({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="w-4 h-4 mt-1 text-longhand-accent shrink-0" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function WhatIsAToken() {
  const examples: Array<{ text: string; tokens: number; words: number }> = [
    { text: 'The cat sat on the mat.', tokens: 7, words: 6 },
    { text: 'Quarterly EBITDA grew 14%.', tokens: 10, words: 4 },
    { text: 'antidisestablishmentarianism', tokens: 6, words: 1 },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="The unit"
        title="What is a token, in plain English?"
        sub="Forget the textbook definition. Here's what you need to know to read your bill."
        icon={MessageSquare}
      />
      <div className="grid md:grid-cols-2 gap-5">
        <Card className="bg-white border-longhand-border p-6 rounded-xl shadow-sm">
          <h3 className="font-serif text-xl text-longhand-ink">The ¾-of-a-word rule</h3>
          <p className="text-longhand-ink/85 mt-2 leading-relaxed">
            1 token ≈ 4 characters ≈ <strong>¾ of an English word</strong>. Short common words are
            usually one token. Long words break into multiple tokens. Code, numbers, and other
            languages tokenize differently — usually less efficiently.
          </p>
          <div className="mt-4 space-y-2">
            {examples.map((ex) => (
              <div
                key={ex.text}
                className="flex items-center justify-between rounded-lg bg-longhand-accent-light/50 border border-longhand-border px-3 py-2 text-sm"
              >
                <span className="text-longhand-ink font-mono text-xs sm:text-sm">"{ex.text}"</span>
                <span className="text-longhand-muted tabular-nums shrink-0 ml-3">
                  ≈ <strong className="text-longhand-ink">{ex.tokens}</strong> tokens
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white border-longhand-border p-6 rounded-xl shadow-sm">
          <h3 className="font-serif text-xl text-longhand-ink">Input vs. output — why output costs more</h3>
          <p className="text-longhand-ink/85 mt-2 leading-relaxed">
            <strong>Input tokens</strong> are what you send the model (your prompt, attached
            documents, conversation history). <strong>Output tokens</strong> are what it writes
            back.
          </p>
          <p className="text-longhand-ink/85 mt-3 leading-relaxed">
            Reading is cheap. Writing is expensive — the model has to{' '}
            <em>think one token at a time</em> to produce output, which burns compute. Every
            current frontier provider charges 3–6× more for output than input.
          </p>
          <div className="mt-4 rounded-lg bg-longhand-accent-light/50 border border-longhand-border px-3 py-2.5 text-sm text-longhand-ink leading-relaxed">
            <strong className="text-longhand-accent">Rule of thumb:</strong> if your workload is
            output-heavy (drafting, generation), tighten <code className="text-xs bg-white px-1 rounded">max_tokens</code> and ask
            for terse responses. If it's input-heavy (summarization, Q&A), use caching.
          </div>
        </Card>

        <Card className="bg-white border-longhand-border p-6 rounded-xl shadow-sm md:col-span-2">
          <h3 className="font-serif text-xl text-longhand-ink">Context windows — the model's desk</h3>
          <p className="text-longhand-ink/85 mt-2 leading-relaxed">
            Think of the <strong>context window</strong> as the model's desk. It can only see what's
            on the desk right now. Frontier models today have desks that hold 200,000 to 1,000,000
            tokens (roughly 500–2,500 pages). Anything off the desk is forgotten.
          </p>
          <p className="text-longhand-ink/85 mt-3 leading-relaxed">
            <strong>The catch:</strong> a bigger desk doesn't mean a free desk. Every token you put
            on it is billed every time you talk to the model. A long conversation that grows turn
            by turn re-sends prior turns each time — your bill grows quadratically if you're not
            careful.
          </p>
        </Card>
      </div>
    </section>
  );
}

function WhereTokensGetWasted() {
  const patterns: Array<{
    title: string;
    symptom: string;
    cost: string;
    leverNum: number;
    leverName: string;
    icon: typeof Brain;
  }> = [
    {
      title: "You're paying flagship prices for routine work.",
      symptom:
        'One expensive model is most of your spend, but the actual tasks are simple — drafting, classification, Q&A. Engineers reach for the flagship by default.',
      cost: '5–25× more than necessary',
      leverNum: 1,
      leverName: 'Pick the smaller model first',
      icon: Brain,
    },
    {
      title: "You're sending the same long context every call.",
      symptom:
        'A long system prompt, knowledge base, or codebase appears verbatim in every request. Each call re-reads the same tokens — at full price.',
      cost: '80–90% of input is throwaway re-reads',
      leverNum: 2,
      leverName: 'Turn on prompt caching',
      icon: Repeat,
    },
    {
      title: 'Your conversations grow without compaction.',
      symptom:
        'Long multi-turn chats. Each turn re-sends prior turns, so turn 20 costs roughly 20× turn 1 in input tokens. Nobody notices because the per-call price looks identical.',
      cost: '40–70% of long-chat spend',
      leverNum: 5,
      leverName: 'Compact long conversations',
      icon: AlignVerticalSpaceAround,
    },
    {
      title: 'You dump whole documents when a slice would do.',
      symptom:
        "200-page PDFs in context when the answer lives in three paragraphs. Whole codebases when the model needs three functions. The model is reading tonnage you don't need it to read.",
      cost: '50–90% of input is unread weight',
      leverNum: 4,
      leverName: 'Trim your context',
      icon: Scissors,
    },
    {
      title: 'Your outputs ramble.',
      symptom:
        'No max-tokens ceiling, no "be terse" in the prompt. The model writes paragraphs when a sentence would do — and output is the expensive side of the bill.',
      cost: '20–60% of output spend',
      leverNum: 6,
      leverName: 'Cap output length',
      icon: Gauge,
    },
    {
      title: "You're paying interactive rates for overnight work.",
      symptom:
        "Nightly summarizations, bulk classification, embeddings jobs — all hitting the synchronous, premium-priced API when they don't need to be.",
      cost: '50% above what you should pay',
      leverNum: 3,
      leverName: 'Use the Batch API',
      icon: Layers,
    },
  ];

  return (
    <section>
      <SectionHeader
        eyebrow="The diagnostic"
        title="Where your tokens get wasted"
        sub="Six patterns that account for most surprise bills. If you recognize one in your workload, jump to the lever that fixes it."
        icon={Receipt}
      />
      <p className="text-longhand-ink/85 leading-relaxed mb-6 max-w-3xl">
        The per-million-token rate is the least interesting variable in your bill. The interesting
        one is how much waste piles up before you ever look at the invoice. Most teams hit at least
        one of these every day.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {patterns.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-longhand-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow break-inside-avoid"
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-longhand-accent-light text-longhand-accent flex items-center justify-center">
                <p.icon className="w-4 h-4" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-lg text-longhand-ink leading-tight">{p.title}</h4>
                <p className="text-sm text-longhand-ink/85 mt-2 leading-relaxed">{p.symptom}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                  <span className="inline-flex items-center rounded-full bg-longhand-accent/10 text-longhand-accent border border-longhand-accent/25 px-2.5 py-0.5 font-medium tabular-nums">
                    {p.cost}
                  </span>
                  <a
                    href={`#lever-${p.leverNum}`}
                    className="inline-flex items-center gap-1 text-longhand-ink hover:text-longhand-accent underline-offset-2 hover:underline font-medium"
                  >
                    Fix: Lever {p.leverNum} — {p.leverName}
                    <ArrowRight className="w-3 h-3" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PersonalLevers() {
  const levers: Array<{
    title: string;
    oneLiner: string;
    savings: string;
    whenToUse: string;
    icon: typeof Brain;
  }> = [
    {
      title: 'Pick the smaller model first',
      oneLiner:
        'Capability is a spectrum. Most routine work (drafting, summarizing, classifying) does not need a frontier model. Start small; escalate only when the small model demonstrably fails.',
      savings: 'Up to 25× cheaper',
      whenToUse: 'always (as the default policy)',
      icon: Brain,
    },
    {
      title: 'Turn on prompt caching',
      oneLiner:
        'If you send the same long context repeatedly (a system prompt, a knowledge base, a codebase), cache it. Subsequent reads cost ~10% of the standard input rate.',
      savings: '80–90% off input',
      whenToUse: 'reused context > 1,000 tokens',
      icon: Repeat,
    },
    {
      title: 'Use the Batch API for non-urgent work',
      oneLiner:
        'Most providers offer a 50% discount for asynchronous batch jobs that return within ~24h. Perfect for nightly summarizations, bulk classification, and embeddings-style work.',
      savings: '50% off everything',
      whenToUse: 'overnight / async OK',
      icon: Layers,
    },
    {
      title: 'Trim your context',
      oneLiner:
        "Don't dump a 200-page codebase when the model needs three functions. Use retrieval or scoping to send only the slice that matters. Less input = less cost, faster answers, fewer hallucinations.",
      savings: '50–90% off input',
      whenToUse: 'long documents/codebases',
      icon: Scissors,
    },
    {
      title: 'Compact long conversations',
      oneLiner:
        'When a chat drags on, summarize the relevant facts into a short brief and start a new conversation. You pay for context every turn — pruning it pays back fast.',
      savings: '40–70% on long chats',
      whenToUse: '> 20 turns or > 50k tokens',
      icon: AlignVerticalSpaceAround,
    },
    {
      title: 'Cap output length',
      oneLiner:
        'Set a max_tokens ceiling and ask explicitly for "the shortest correct answer." Output is the expensive side of the bill — short answers compound.',
      savings: '20–60% on output',
      whenToUse: 'drafting / generation tasks',
      icon: Gauge,
    },
    {
      title: 'Tool use over re-prompting',
      oneLiner:
        'Let the model fetch what it needs (search, database query, file read) instead of dumping the whole haystack into context up front. You pay for the needle, not the haystack.',
      savings: '30–80% on input',
      whenToUse: 'agentic workflows, RAG',
      icon: Wrench,
    },
  ];

  return (
    <section>
      <SectionHeader
        eyebrow="Levers"
        title="The 7 cost levers (personal use)"
        sub="In rough priority order. If you're only going to do one thing, do #1."
        icon={TrendingDown}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {levers.map((lever, i) => (
          <div key={lever.title} id={`lever-${i + 1}`} className="scroll-mt-12">
            <CostLeverCard
              index={i + 1}
              title={lever.title}
              oneLiner={lever.oneLiner}
              savings={lever.savings}
              whenToUse={lever.whenToUse}
              icon={lever.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function OrgMetering() {
  return (
    <section>
      <SectionHeader
        eyebrow="Org rollout"
        title="What changes when you meter the whole org"
        sub="The levers above are personal. Here are the ones a CFO/COO gets that an individual doesn't."
        icon={Boxes}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <OrgBlock
          icon={Wallet}
          title="Per-seat vs. metered billing"
          body="Per-seat is predictable but undercharges power users and overcharges the long tail. Metered is fair but harder to budget. The mature answer: per-seat floor with metered overage above a usage threshold. Most provider dashboards now expose both views."
        />
        <OrgBlock
          icon={ShieldAlert}
          title="Budget caps by team and product"
          body="Every major provider supports per-key spend caps. Set them. The number-one cause of a runaway bill is an unmonitored agent looping on retries — caps turn a five-figure incident into a two-figure one."
        />
        <OrgBlock
          icon={Repeat}
          title="Model routing"
          body="Build (or buy) a router that sends easy queries to a cheap model and escalates hard ones. Even a crude classifier — based on input length, presence of code, or a small first-pass model — routinely cuts spend 50–70% with no observable quality drop."
        />
        <OrgBlock
          icon={FileText}
          title="Internal chargebacks"
          body="Tag every API key with the team, product, or feature that owns it. Allocate the bill the same way you allocate AWS. Without this, AI cost becomes a single fuzzy line item nobody owns — which is how you end up with a $200k surprise."
        />
        <OrgBlock
          icon={Zap}
          title="Anomaly detection"
          body="Watch for: sudden token spikes (loops or prompt injection), output runs longer than normal (broken stop conditions), spikes in flagship-model usage (someone hardcoded the wrong model). A simple daily alert beats a postmortem."
        />
        <OrgBlock
          icon={Database}
          title="Vendor negotiation"
          body="At ~$10–20k/month committed spend, most providers will negotiate. Ask for: committed-use discounts, dedicated capacity (no rate limits), BAA for healthcare, data residency, and a named TAM. Multi-vendor leverage helps — even if you don't end up multi-vendor."
        />
        <OrgBlock
          icon={Sparkles}
          title="Cost of governance vs. cost of tokens"
          body="The tightest possible metering creates friction that suppresses adoption — and the productivity tax of slow AI adoption dwarfs the token bill. For most orgs under $50k/month, the right policy is generous defaults + tagged spend visibility. Save tight controls for the runaway-cost surface area (autonomous agents, public-facing endpoints)."
          highlight
        />
      </div>
    </section>
  );
}

function OrgBlock({
  icon: Icon,
  title,
  body,
  highlight,
}: {
  icon: typeof Wallet;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md break-inside-avoid ${
        highlight ? 'border-longhand-accent/40 ring-1 ring-longhand-accent/15' : 'border-longhand-border'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
            highlight
              ? 'bg-longhand-accent text-white'
              : 'bg-longhand-accent-light text-longhand-accent'
          }`}
        >
          <Icon className="w-4 h-4" aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-lg text-longhand-ink leading-tight">{title}</h4>
          <p className="text-sm text-longhand-ink/85 mt-2 leading-relaxed">{body}</p>
        </div>
      </div>
    </article>
  );
}

function Glossary() {
  const entries: Array<{ q: string; a: string }> = [
    {
      q: 'Token',
      a: 'The atomic unit a language model processes. Roughly ¾ of a word in English. You are billed per million.',
    },
    {
      q: 'Context window',
      a: 'The maximum amount of text the model can "see" in a single request — your prompt, attached docs, and prior conversation, combined. Anything outside is forgotten.',
    },
    {
      q: 'Input vs. output tokens',
      a: 'Input = what you send (prompt, history, documents). Output = what the model writes back. Output costs 3–6× more, because writing requires the model to compute one token at a time.',
    },
    {
      q: 'Prompt caching',
      a: 'A feature that stores a chunk of input (system prompt, knowledge base, repo) so subsequent requests pay ~10% of the normal input rate instead of full price. Cache lives for 5 minutes to 1 hour, depending on tier.',
    },
    {
      q: 'Batch API',
      a: 'An asynchronous request mode (typically up to 24h turnaround) priced at 50% off. Ideal for overnight jobs, bulk classification, and any non-interactive workload.',
    },
    {
      q: 'Fine-tuning vs. RAG',
      a: 'Fine-tuning bakes new behavior into the model weights (expensive, sticky). Retrieval-Augmented Generation (RAG) fetches relevant snippets from a database and injects them into context at runtime (cheaper, easier to update). For most "the model needs to know our docs," RAG wins.',
    },
    {
      q: 'Model tier',
      a: 'Providers offer roughly three tiers: flagship (Opus, GPT-5.5, Gemini Pro), workhorse (Sonnet, GPT-5.4, Gemini Flash), fast (Haiku, GPT-5.4 Mini, Flash-Lite). Default to workhorse or fast; escalate only when the smaller tier fails.',
    },
    {
      q: 'Agentic workflow',
      a: 'A pipeline where the model can take multiple actions (call tools, loop, decide next step) instead of one shot. Cheaper in some cases, dangerously expensive in others — agents are the #1 source of surprise bills.',
    },
    {
      q: 'Tool use',
      a: 'The model invoking external functions you expose (search, database, file read). You pay tokens for the tool call and its result. Often the cheapest way to give the model what it needs.',
    },
  ];

  return (
    <section>
      <SectionHeader
        eyebrow="Reference"
        title="Glossary"
        sub="The words your team uses, in your language."
      />
      <Accordion type="multiple" className="rounded-xl border border-longhand-border bg-white shadow-sm overflow-hidden">
        {entries.map((e, i) => (
          <AccordionItem key={e.q} value={`item-${i}`} className="border-longhand-border last:border-b-0">
            <AccordionTrigger className="px-5 py-4 text-left hover:no-underline text-longhand-ink font-medium">
              {e.q}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-longhand-ink/85 leading-relaxed">
              {e.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function FooterCTA() {
  const [copied, setCopied] = useState(false);
  const [printedOn, setPrintedOn] = useState('');

  // Stamp the print-only footer with today's date once mounted.
  useEffect(() => {
    setPrintedOn(
      new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: 'Link copied', description: 'Your calculator inputs are baked into the link.' });
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: 'Could not copy', description: 'Copy the URL from your address bar.' });
    }
  };

  return (
    <footer className="border-t border-longhand-border pt-10 pb-4">
      <div className="rounded-2xl bg-longhand-ink text-longhand-paper px-6 sm:px-8 py-8 sm:py-10 no-print">
        <h3 className="font-serif text-2xl sm:text-3xl">Share this</h3>
        <p className="mt-3 text-longhand-paper/80 max-w-2xl leading-relaxed">
          The point of this page is that you should not need to take our word for any of it.
          The calculator state travels in the URL — share a link with your numbers baked in.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={handleShare}
            className="bg-longhand-accent hover:bg-longhand-accent-hover text-white h-11 px-5"
          >
            <Share2 className="w-4 h-4 mr-1.5" aria-hidden />
            {copied ? 'Link copied' : 'Copy share link'}
          </Button>
          <Button
            variant="outline"
            onClick={() => window.print()}
            className="bg-transparent border-longhand-paper/40 text-longhand-paper hover:bg-longhand-paper/10 hover:text-longhand-paper h-11 px-5"
          >
            <Printer className="w-4 h-4 mr-1.5" aria-hidden />
            Download as PDF
          </Button>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-longhand-muted">
        <p>
          Pricing as of <span className="text-longhand-ink font-medium">{PRICING_AS_OF}</span> —
          verify current rates at the provider's site before budgeting.
        </p>
        <p>
          Made by{' '}
          <Link to="/" className="text-longhand-ink hover:text-longhand-accent underline-offset-2 hover:underline">
            technical-leaders.com
          </Link>
          .
        </p>
      </div>

      <div className="print-only mt-6 text-xs text-longhand-muted">
        Printed from technical-leaders.com/tokens{printedOn ? ` on ${printedOn}` : ''}. Pricing as of {PRICING_AS_OF}.
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  sub,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  icon?: typeof Brain;
}) {
  return (
    <header className="mb-6 sm:mb-8 max-w-3xl">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-longhand-accent font-medium">
        {Icon && <Icon className="w-3.5 h-3.5" aria-hidden />}
        {eyebrow}
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl text-longhand-ink leading-tight mt-2">
        {title}
      </h2>
      {sub && <p className="mt-2 text-longhand-ink/80 leading-relaxed">{sub}</p>}
    </header>
  );
}
