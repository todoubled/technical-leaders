/**
 * First-Time Founder Curriculum
 *
 * A 4-phase, ~28-item curriculum distilled from five canonical sources:
 * - The Mom Test (Rob Fitzpatrick)
 * - Paul Graham essays (paulgraham.com)
 * - First Round Review (review.firstround.com)
 * - Zero to One (Peter Thiel)
 * - Socratic Selling (Kevin Daley)
 *
 * Each item has:
 * - a stable kebab-case `id` (used in localStorage; never reorder by index)
 * - one specific lesson with a verifiable source citation
 * - a `why` field explaining what it teaches
 * - an optional `mockupKey` to render a "what done looks like" component beside it
 *
 * Citation integrity: PG essay URLs and First Round article URLs were verified
 * against the public indexes. Book chapter references are cited at the chapter
 * level (e.g., "Ch. 1") rather than fabricated quotes.
 */

export type SourceTag =
  | 'Mom Test'
  | 'PG'
  | 'First Round'
  | 'Zero to One'
  | 'Socratic Selling';

export interface Source {
  tag: SourceTag;
  citation: string;
  url?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  why: string;
  source: Source;
  /** Key for an inline mockup component (registered in components/founder-curriculum/index.ts) */
  mockupKey?: string;
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  summary: string;
  items: ChecklistItem[];
}

export const phases: Phase[] = [
  {
    id: 'phase-1-idea',
    number: 1,
    title: 'Idea Refinement',
    summary:
      'Before you build anything, sharpen the truth you believe and pressure-test it against real people. The goal of this phase is not validation — it is learning.',
    items: [
      {
        id: 'idea-contrarian-truth',
        title: 'Write down the contrarian truth you believe',
        why: 'Thiel\'s opening interview question: "What important truth do very few people agree with you on?" Forces you to find an asymmetry between what you see and what the market sees. Without one, you have a feature, not a company.',
        source: {
          tag: 'Zero to One',
          citation: 'Ch. 1 — "The Challenge of the Future"',
        },
        mockupKey: 'contrarian-truth',
      },
      {
        id: 'idea-schlep',
        title: 'Identify a schlep worth doing',
        why: 'Most founders avoid the boring, painful, regulated work that real businesses live in. The best ideas hide behind the schleps everyone else flinches from. Pick one yours can stomach.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Schlep Blindness"',
          url: 'https://www.paulgraham.com/schlep.html',
        },
      },
      {
        id: 'idea-organic-not-made-up',
        title: 'Confirm the idea is organic, not made-up',
        why: 'The strongest ideas come from a problem you personally have. If you had to invent the problem to make the idea exist, that\'s a red flag. Test: do you already live in this world?',
        source: {
          tag: 'PG',
          citation: 'Essay: "Organic Startup Ideas"',
          url: 'https://www.paulgraham.com/organic.html',
        },
      },
      {
        id: 'idea-mom-test-10-interviews',
        title: 'Interview 10 people in your target segment — never pitch your idea',
        why: 'Ask about their life, not your idea. Talk about specific things that happened in the past, not opinions about the future. Avoid compliments — they are the worst signal you can collect.',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 1-2',
        },
        mockupKey: 'mom-test-notes',
      },
      {
        id: 'idea-good-questions',
        title: 'Audit your last 3 interviews for "bad questions"',
        why: 'Three questions to delete from your vocabulary: "Do you think this is a good idea?", "Would you buy this?", "How much would you pay for this?" All three invite lies. Replace with: "What did you do last time it happened?"',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 1',
        },
      },
      {
        id: 'idea-10x',
        title: 'Define the 10x improvement',
        why: 'Thiel: incremental improvements get crushed by incumbents. To displace what exists, the new thing has to be roughly an order of magnitude better on the dimension the customer cares about. Pick the dimension. Quantify the 10x.',
        source: {
          tag: 'Zero to One',
          citation: 'Ch. 5 — "Last Mover Advantage"',
        },
      },
      {
        id: 'idea-commitments-currencies',
        title: 'Document three commitments or currencies prospects gave you',
        why: 'Real currencies a prospect can spend: time, reputation, money, an intro. Anything else ("I love it!", "send me a link") is a compliment, not a commitment. If nobody is spending currency, you have not learned anything yet.',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 5 — "Commitments and Currencies"',
        },
        mockupKey: 'commitments-log',
      },
    ],
  },
  {
    id: 'phase-2-product',
    number: 2,
    title: 'Product Development',
    summary:
      'Build the smallest possible thing that solves the problem for one real person. Do unscalable things on purpose. Your first product is a recruiting tool for your first ten users.',
    items: [
      {
        id: 'product-smallest-thing',
        title: 'Build the smallest possible thing that solves the problem for ONE person',
        why: 'Not for "a segment." For a specific human you already talked to. Their name goes in the README. If they don\'t use it, nothing else matters.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Do Things that Don\'t Scale"',
          url: 'https://www.paulgraham.com/ds.html',
        },
        mockupKey: 'hand-delivered-mvp',
      },
      {
        id: 'product-ship-embarrassing',
        title: 'Ship something embarrassing within 2 weeks',
        why: 'If you are not embarrassed by v1, you shipped too late. The point is to start learning, not to impress. Embarrassment is a tax you pay for honest feedback.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Do Things that Don\'t Scale"',
          url: 'https://www.paulgraham.com/ds.html',
        },
      },
      {
        id: 'product-hand-delivery',
        title: 'Hand-deliver the product to your first 5 users — no funnel, no signup flow',
        why: 'PG calls this "recruiting users manually." You learn ten times faster when you watch them try to use it in front of you. Skip onboarding flows until you have something worth onboarding to.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Do Things that Don\'t Scale"',
          url: 'https://www.paulgraham.com/ds.html',
        },
      },
      {
        id: 'product-secret',
        title: 'Name your "secret" in one sentence',
        why: 'Thiel: every great company is built on a secret — something true about the world that nobody else has noticed yet. If you cannot say it in one sentence, you don\'t have one.',
        source: {
          tag: 'Zero to One',
          citation: 'Ch. 8 — "Secrets"',
        },
      },
      {
        id: 'product-single-metric',
        title: 'Define the single metric that proves it is working',
        why: 'Pick one number that, if it goes up, means real value is being created. Not signups. Not visits. Something a customer would only do if the product mattered to them.',
        source: {
          tag: 'First Round',
          citation: 'Article: "Vanta\'s Path to Product-Market Fit"',
          url: 'https://review.firstround.com/vantas-path-to-product-market-fit/',
        },
      },
      {
        id: 'product-makers-schedule',
        title: 'Block one 4-hour Maker block this week — no meetings',
        why: 'Founders default to a Manager\'s Schedule (calendar in 30-min slices). Builders need a Maker\'s Schedule (half-day blocks). One meeting in a builder day costs the whole day.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Maker\'s Schedule, Manager\'s Schedule"',
          url: 'https://www.paulgraham.com/makersschedule.html',
        },
      },
      {
        id: 'product-monopoly-niche',
        title: 'Pick a niche small enough to dominate',
        why: 'Thiel: start with a monopoly in a tiny market. "Crush a small market" before you try to expand. If you can\'t list every customer in your target segment by name, the segment is too big.',
        source: {
          tag: 'Zero to One',
          citation: 'Ch. 5 — "Last Mover Advantage"',
        },
      },
    ],
  },
  {
    id: 'phase-3-customers',
    number: 3,
    title: 'First Customers (Go-To-Market)',
    summary:
      'Recruit your first ten customers by hand, one at a time. Lead with questions, not pitches. Get someone to pay you something — even $1 — because money is the only commitment that doesn\'t lie.',
    items: [
      {
        id: 'customers-first-10-by-hand',
        title: 'Recruit your first 10 customers by hand, one at a time',
        why: 'No funnel. No ad spend. Each customer is a relationship you personally built. PG: "Almost all good startups recruited their initial users one at a time."',
        source: {
          tag: 'PG',
          citation: 'Essay: "Do Things that Don\'t Scale"',
          url: 'https://www.paulgraham.com/ds.html',
        },
      },
      {
        id: 'customers-socratic-call',
        title: 'Run a Socratic discovery call: Open → Explore → Recommend → Close',
        why: 'Daley\'s four-stage structure. You spend ~70% of the call in Open and Explore — asking questions, not pitching. The prospect tells you what to recommend before you recommend it.',
        source: {
          tag: 'Socratic Selling',
          citation: 'The four-stage call structure',
        },
        mockupKey: 'socratic-call-log',
      },
      {
        id: 'customers-buyer-motive',
        title: 'After 3 calls, write down each buyer\'s real motive (not their stated reason)',
        why: 'Socratic Selling: people give surface reasons ("we need a better tool") that hide the real motive ("my boss will fire me if Q3 numbers slip"). The real motive is what they buy on.',
        source: {
          tag: 'Socratic Selling',
          citation: 'Surface answer vs. real motive',
        },
      },
      {
        id: 'customers-first-dollar',
        title: 'Get one customer to pay you something — even $1',
        why: 'Money is a real currency. A signed LOI is not. A promise to pay is not. A Stripe charge that clears is. The first dollar is the hardest and the most informative.',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 5 — money as commitment',
        },
        mockupKey: 'first-dollar',
      },
      {
        id: 'customers-cold-email',
        title: 'Send a cold email you would actually want to receive — to 20 prospects',
        why: 'Write the email you wish you got from a vendor like you. Specific, short, useful even if they say no. 20 cold emails will teach you more about your positioning than any landing page.',
        source: {
          tag: 'First Round',
          citation: 'Article: "Gusto\'s Path to Product-Market Fit"',
          url: 'https://review.firstround.com/gustos-path-to-product-market-fit/',
        },
      },
      {
        id: 'customers-buying-journey',
        title: 'Map your top 3 customers\' buying journey end-to-end',
        why: 'For each: how did they realize they had the problem? Who else did they talk to? What almost stopped them? What finally convinced them? These three maps are your go-to-market playbook.',
        source: {
          tag: 'First Round',
          citation: 'Article: "Guideline\'s Path to Product-Market Fit"',
          url: 'https://review.firstround.com/guidelines-path-to-product-market-fit/',
        },
      },
      {
        id: 'customers-growth-rate',
        title: 'Calculate your weekly growth rate',
        why: 'PG: "A startup is a company designed to grow fast." 5-7% weekly growth is good. 10% is excellent. 1% is a slow death. Pick one metric, measure it weekly, plot the line.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Startup = Growth"',
          url: 'https://www.paulgraham.com/growth.html',
        },
      },
    ],
  },
  {
    id: 'phase-4-iteration',
    number: 4,
    title: 'Iteration with Feedback',
    summary:
      'You are now a learning machine. Every week: did we learn something real? Are we alive or dead? What do we kill? The companies that survive are the ones that iterate honestly.',
    items: [
      {
        id: 'iter-weekly-log',
        title: 'Set up a weekly "what did I learn" log',
        why: 'One paragraph, every Friday. What did I believe Monday that I no longer believe Friday? Belief change is the only proof that learning happened. No belief change = no learning.',
        source: {
          tag: 'Mom Test',
          citation: 'Learning vs. validation',
        },
      },
      {
        id: 'iter-almost-stopped',
        title: 'After every sales call, ask: "What almost stopped you from buying?"',
        why: 'The objection they didn\'t voice is the one you need most. This question, asked after the deal is already done, is the safest way to surface it. Log every answer.',
        source: {
          tag: 'Socratic Selling',
          citation: 'Handling unspoken objections',
        },
      },
      {
        id: 'iter-default-alive',
        title: 'Calculate whether you are Default Alive or Default Dead',
        why: 'Plot revenue vs. expenses. If current growth rate + current burn = profitability before runway ends, you are Default Alive. If not, Default Dead. PG: most founders avoid this calc because the answer scares them.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Default Alive or Default Dead?"',
          url: 'https://www.paulgraham.com/aord.html',
        },
        mockupKey: 'default-alive-calc',
      },
      {
        id: 'iter-kill-feature',
        title: 'Kill one feature this week that nobody asked for unprompted',
        why: 'If users only mention it when you bring it up, it does not exist for them. Cut it. Every feature you keep is a feature you have to maintain, document, and explain.',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 2 — specifics over hypotheticals',
        },
      },
      {
        id: 'iter-churned-prospects',
        title: 'Re-run a Mom Test interview on your top 3 churned or lost prospects',
        why: 'The people who said no (or stopped paying) know something the people who said yes don\'t. Talk to them with Mom Test rules — about what they did, not what they thought.',
        source: {
          tag: 'Mom Test',
          citation: 'Ch. 1-2 applied to churn',
        },
      },
      {
        id: 'iter-relentless',
        title: 'Identify the single most resourceful thing you did this month',
        why: 'PG: the best test of a founder is "relentlessly resourceful." Pattern-match your own behavior. If you cannot name one resourceful move this month, that\'s the signal — fix it next month.',
        source: {
          tag: 'PG',
          citation: 'Essay: "Relentlessly Resourceful"',
          url: 'https://www.paulgraham.com/relres.html',
        },
      },
      {
        id: 'iter-startup-mistakes',
        title: 'Audit your last 90 days against PG\'s 18 startup mistakes',
        why: 'Most failures are not novel. They are the same 18 mistakes in new outfits. Open the essay. Score yourself honestly on each. Fix the worst three this quarter.',
        source: {
          tag: 'PG',
          citation: 'Essay: "The 18 Mistakes That Kill Startups"',
          url: 'https://www.paulgraham.com/startupmistakes.html',
        },
      },
    ],
  },
];

export const totalItems = phases.reduce((sum, p) => sum + p.items.length, 0);

export const allSourceTags: SourceTag[] = [
  'Mom Test',
  'PG',
  'First Round',
  'Zero to One',
  'Socratic Selling',
];

/** Source display metadata used in the hero/share badge. */
export const sourceDisplayNames: Record<SourceTag, string> = {
  'Mom Test': 'The Mom Test',
  PG: 'Paul Graham',
  'First Round': 'First Round Review',
  'Zero to One': 'Zero to One',
  'Socratic Selling': 'Socratic Selling',
};

export const sourceColors: Record<SourceTag, string> = {
  'Mom Test': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  PG: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'First Round': 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  'Zero to One': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'Socratic Selling': 'bg-sky-500/15 text-sky-300 border-sky-500/30',
};
