import { ExternalLink } from 'lucide-react';
import { trackClick } from '@/utils/posthog';

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700/60 bg-slate-950 shadow-md shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-slate-700/60 bg-slate-900 px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-500/70" />
          <span className="h-2 w-2 rounded-full bg-amber-500/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
        </div>
        <div className="ml-2 flex-1 truncate rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function PaulGrahamScreenshot() {
  const essays = [
    'How to Get Startup Ideas',
    'Schlep Blindness',
    'Do Things that Don’t Scale',
    'Default Alive or Default Dead?',
    'Maker’s Schedule, Manager’s Schedule',
    'The 18 Mistakes That Kill Startups',
  ];

  return (
    <BrowserFrame url="paulgraham.com/articles.html">
      <div
        className="h-[200px] overflow-hidden p-4 text-[11px] leading-relaxed"
        style={{ backgroundColor: '#fffaf0', fontFamily: 'Verdana, Geneva, sans-serif' }}
      >
        <p className="mb-2 font-bold text-black">Essays</p>
        <ul className="space-y-1">
          {essays.map((essay) => (
            <li key={essay}>
              <span style={{ color: '#0c0c8c', textDecoration: 'underline' }}>{essay}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

function FirstRoundScreenshot() {
  const articles = [
    {
      kicker: 'PATH TO PMF',
      title: 'Vanta’s Path to Product-Market Fit',
    },
    {
      kicker: 'PATH TO PMF',
      title: 'Gusto’s Path to Product-Market Fit',
    },
    {
      kicker: 'PATH TO PMF',
      title: 'Guideline’s Path to Product-Market Fit',
    },
  ];

  return (
    <BrowserFrame url="review.firstround.com/articles">
      <div className="h-[200px] overflow-hidden bg-white p-3">
        <div className="mb-2 flex items-baseline gap-2 border-b border-slate-200 pb-1.5">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.15em]"
            style={{ color: '#871b27' }}
          >
            First Round
          </span>
          <span
            className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-700"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Review
          </span>
        </div>
        <ul className="space-y-1.5">
          {articles.map((article) => (
            <li key={article.title} className="flex flex-col">
              <span
                className="text-[8px] font-bold uppercase tracking-wider"
                style={{ color: '#871b27' }}
              >
                {article.kicker}
              </span>
              <span
                className="text-[11px] font-semibold leading-tight text-slate-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {article.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

type Source = {
  id: string;
  label: string;
  url: string;
  trackName: string;
  Screenshot: React.FC;
};

const SOURCES: Source[] = [
  {
    id: 'pg',
    label: 'Paul Graham’s Essays',
    url: 'https://www.paulgraham.com/articles.html',
    trackName: 'founder_curriculum_materials_pg',
    Screenshot: PaulGrahamScreenshot,
  },
  {
    id: 'first-round',
    label: 'First Round Review',
    url: 'https://review.firstround.com/articles/',
    trackName: 'founder_curriculum_materials_first_round',
    Screenshot: FirstRoundScreenshot,
  },
];

export function SourceScreenshots() {
  return (
    <div className="mt-6">
      <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
        Free online, cited throughout
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SOURCES.map(({ id, label, url, trackName, Screenshot }) => (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick(trackName, {})}
              className="group block focus:outline-none"
            >
              <Screenshot />
              <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-slate-300 group-hover:text-emerald-300">
                {label}
                <ExternalLink className="h-3 w-3" />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
