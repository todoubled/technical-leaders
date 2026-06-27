// Single source of truth for the app's route table.
//
// Both the client app (src/App.tsx, wrapped in BrowserRouter) and the SSG
// prerender (src/entry-server.tsx, wrapped in StaticRouter) render the SAME
// <Routes> built from `appRoutes` below, so the client and the prerendered HTML
// always agree on what each path renders.
//
// The prerender script (scripts/prerender.mjs) and the sitemap generator
// (scripts/generate-sitemap.mjs) consume `getStaticRoutePaths()` so the set of
// statically generated pages is derived from this one list and cannot drift from
// the route table.
//
// Three kinds of entry:
//   - page:     a real page rendered at a fixed path. Prerendered to static HTML.
//   - dynamic:  a path with a param (e.g. /post/:slug). NOT enumerated here — the
//               article slugs are prerendered separately by prerender.mjs.
//   - redirect: a pure client-side <Navigate>. NOT prerendered (no real content);
//               it resolves at runtime via the SPA fallback, or via a real
//               Vercel redirect in vercel.json for high-value share URLs.

import type { ComponentType } from 'react';

import Index from './pages/Index';
import Call from './pages/Call';
import AICall from './pages/AICall';
import Calls from './pages/Calls';
import CallConfirmed from './pages/CallConfirmed';
import AITradeSchool from './pages/AITradeSchool';
import Launch from './pages/Launch';
import December from './pages/December';
import January from './pages/January';
import Scale from './pages/Scale';
import Marketing from './pages/Marketing';
import CFO from './pages/CFO';
import Accredited from './pages/Accredited';
import Articles from './pages/Articles';
import Article from './pages/Article';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refer from './pages/Refer';
import AlternativeToSidebar from './pages/AlternativeToSidebar';
import AlternativeToMBA from './pages/AlternativeToMBA';
import AlternativeToMitOxford from './pages/AlternativeToMitOxford';
import RGAWorkshop from './pages/RGAWorkshop';
import PlaybookConfirmed from './pages/PlaybookConfirmed';
import ShipAI from './pages/ShipAI';
import ShipAITrainingProgram from './pages/ShipAITrainingProgram';
import AiExecutiveStrategy from './pages/AiExecutiveStrategy';
import AiPlaybookExecutives from './pages/AiPlaybookExecutives';
import CallTemplates from './pages/CallTemplates';
import LaunchWithUs from './pages/LaunchWithUs';
import HowToModelYourOffer from './pages/HowToModelYourOffer';
import FinanceForFounders from './pages/FinanceForFounders';
import FinanceForFoundersWorkshop from './pages/FinanceForFoundersWorkshop';
import FinanceWorkshopConfirmed from './pages/FinanceWorkshopConfirmed';
import BrandCharacterWorkshop from './pages/BrandCharacterWorkshop';
import BrandWorkshopConfirmed from './pages/BrandWorkshopConfirmed';
import VideoWorkshop from './pages/VideoWorkshop';
import HowToWinVisibilityWorkshop from './pages/HowToWinVisibilityWorkshop';
import VisibilityWorkshopConfirmed from './pages/VisibilityWorkshopConfirmed';
import AIForVC from './pages/AIForVC';
import AIForLeaders from './pages/AIForLeaders';
import Benchmark from './pages/Benchmark';
import TenBeforeTen from './pages/TenBeforeTen';
import GetPlaybook from './pages/GetPlaybook';
import AiWorkspace from './pages/AiWorkspace';
import AdvancedClaude from './pages/AdvancedClaude';
import AIForSuits from './pages/AIForSuits';
import AiRdSystem from './pages/AiRdSystem';
import HowItWorks from './pages/HowItWorks';
import Speak from './pages/Speak';
import AIProgramSelector from './pages/AIProgramSelector';
import Fortune100PromptLibrary from './pages/Fortune100PromptLibrary';
import Fortune100AiWorkspace from './pages/Fortune100AiWorkspace';
import Library from './pages/Library';
import LibraryConfirmed from './pages/LibraryConfirmed';
import Playbook from './pages/Playbook';
import AIWorkflows from './pages/AIWorkflows';
import AIAgentSkills from './pages/AIAgentSkills';
import WorkshopReplay from './pages/WorkshopReplay';
import AIProgram from './pages/AIProgram';
import AIFirstProgram from './pages/AIFirstProgram';
import AISOS from './pages/AISOS';
import ClaudeMasterclass from './pages/ClaudeMasterclass';
import CopilotCowork from './pages/CopilotCowork';
import Home2025 from './pages/Home2025';
import OfficeHoursDemo from './pages/OfficeHoursDemo';
import Podcast from './pages/Podcast';
import HealthcareAICaseStudy from './pages/HealthcareAICaseStudy';
import Assessment from './pages/Assessment';
import AIPriorities from './pages/AIPriorities';
import AIWaitlist from './pages/AIWaitlist';
import TwentySixWorkflows from './pages/TwentySixWorkflows';
import RGAPlaybook from './pages/RGAPlaybook';
import AICoworker from './pages/AICoworker';
import AISOSLanding from './pages/AISOSLanding';
import ClaudeWorkshop from './pages/ClaudeWorkshop';
import ClaudeWorkshopReplay from './pages/ClaudeWorkshopReplay';
import AIAgentSystem from './pages/AIAgentSystem';
import LKOfficeHours from './pages/LKOfficeHours';
import OfficeHours from './pages/OfficeHours';
import TDownload from './pages/TDownload';
import FirstTimeFounder from './pages/FirstTimeFounder';
import ClaudeMetaPrompting from './pages/ClaudeMetaPrompting';
import Tokens from './pages/Tokens';
import NotFound from './pages/NotFound';

// A real page rendered at a fixed path. These get prerendered to static HTML.
export interface PageRoute {
  kind: 'page';
  path: string;
  Component: ComponentType;
}

// A path that renders a component but takes a route param. Enumerated/prerendered
// elsewhere (article slugs), so it is NOT included in getStaticRoutePaths().
export interface DynamicRoute {
  kind: 'dynamic';
  path: string;
  Component: ComponentType;
}

// A pure client-side redirect (<Navigate to=... replace />). Not prerendered.
export interface RedirectRoute {
  kind: 'redirect';
  path: string;
  to: string;
}

export type AppRoute = PageRoute | DynamicRoute | RedirectRoute;

const page = (path: string, Component: ComponentType): PageRoute => ({
  kind: 'page',
  path,
  Component,
});
const dynamic = (path: string, Component: ComponentType): DynamicRoute => ({
  kind: 'dynamic',
  path,
  Component,
});
const redirect = (path: string, to: string): RedirectRoute => ({
  kind: 'redirect',
  path,
  to,
});

// The route table, in render order. Add new pages here — they are automatically
// rendered by the client, prerendered to static HTML, and added to the sitemap.
export const appRoutes: AppRoute[] = [
  page('/', Index),
  page('/call', Call),
  page('/ai-call', AICall),
  page('/calls', Calls),
  page('/call-confirmed', CallConfirmed),
  page('/ai-trade-school', AITradeSchool),
  page('/launch-old', Launch),
  redirect('/launch', '/january'),
  page('/december', December),
  page('/january', January),
  page('/scale', Scale),
  page('/marketing', Marketing),
  page('/cfo', CFO),
  page('/accredited', Accredited),
  page('/articles', Articles),
  dynamic('/post/:slug', Article),
  page('/privacy-policy', PrivacyPolicy),
  page('/refer', Refer),
  page('/alternative-to-sidebar', AlternativeToSidebar),
  page('/alternative-to-mba', AlternativeToMBA),
  page('/alternative-to-mit-oxford', AlternativeToMitOxford),
  page('/in-demand', RGAWorkshop),
  page('/playbook-confirmed', PlaybookConfirmed),
  page('/ai-office-hours', ShipAI),
  redirect('/ship-ai', '/ai-office-hours'),
  page('/ship-ai-training-program', ShipAITrainingProgram),
  page('/ai-executive-strategy-program', AiExecutiveStrategy),
  page('/ai-playbook-executives', AiPlaybookExecutives),
  page('/call-templates', CallTemplates),
  page('/launch-with-us', LaunchWithUs),
  page('/how-to-model-your-offer', HowToModelYourOffer),
  page('/finance-for-founders', FinanceForFounders),
  page('/finance-for-founders-workshop', FinanceForFoundersWorkshop),
  page('/finance-workshop-confirmed', FinanceWorkshopConfirmed),
  page('/brand-character-workshop', BrandCharacterWorkshop),
  page('/brand-workshop-confirmed', BrandWorkshopConfirmed),
  page('/video-workshop', VideoWorkshop),
  page('/how-to-win-visibility-workshop', HowToWinVisibilityWorkshop),
  page('/visibility-workshop-confirmed', VisibilityWorkshopConfirmed),
  page('/ai', AIProgramSelector),
  page('/ai-for-vc', AIForVC),
  page('/ai-for-leaders', AIForLeaders),
  page('/benchmark', Benchmark),
  page('/10-before-10', TenBeforeTen),
  page('/full-playbook', GetPlaybook),
  page('/ai-workspace', AiWorkspace),
  page('/ai-workflows-old', AIWorkflows),
  redirect('/ai-workflows', '/join'),
  redirect('/ai-workshop', '/join'),
  redirect('/workshop', '/join'),
  redirect('/ai-agent-skills', '/join'),
  page('/join', AIAgentSkills),
  page('/workshop-replay', WorkshopReplay),
  redirect('/ai-workflow', '/ai-workspace'),
  redirect('/ai-agent-basics', '/ai-workspace'),
  page('/advanced-claude', AdvancedClaude),
  page('/ai-for-suits', AIForSuits),
  page('/ai-rd-system', AiRdSystem),
  page('/how-it-works', HowItWorks),
  page('/speak', Speak),
  page('/fortune-100-prompt-library', Fortune100PromptLibrary),
  page('/fortune-100-ai-workspace', Fortune100AiWorkspace),
  page('/library', Library),
  page('/library-confirmed', LibraryConfirmed),
  page('/playbook', Playbook),
  page('/ai-program', AIProgram),
  page('/ai-first-program', AIFirstProgram),
  page('/ai-sos', AISOS),
  page('/claude-masterclass', ClaudeMasterclass),
  page('/copilot-cowork', CopilotCowork),
  redirect('/ai-sos-workspace', '/claude-masterclass'),
  page('/office-hours-demo', OfficeHoursDemo),
  page('/podcast', Podcast),
  page('/healthcare-ai-case-study', HealthcareAICaseStudy),
  page('/2025', Home2025),
  redirect('/2026', '/'),
  page('/assessment', Assessment),
  page('/ai-priorities', AIPriorities),
  page('/ai-waitlist', AIWaitlist),
  page('/26-workflows', TwentySixWorkflows),
  page('/rga-playbook', RGAPlaybook),
  page('/ai-coworker', AICoworker),
  page('/longhand', AISOSLanding),
  redirect('/t', '/longhand'),
  page('/t-download', TDownload),
  redirect('/launch-guide', '/rga-playbook'),
  page('/claude-workshop', ClaudeWorkshop),
  page('/claude-workshop-replay', ClaudeWorkshopReplay),
  page('/ai-agent-system', AIAgentSystem),
  page('/lk-office-hours', LKOfficeHours),
  page('/office-hours', OfficeHours),
  page('/first-time-founder', FirstTimeFounder),
  page('/claude-meta-prompting', ClaudeMetaPrompting),
  page('/tokens', Tokens),
];

// The catch-all 404, rendered last (after every route above). Kept separate so it
// is never treated as a prerenderable page.
export const NotFoundRoute = NotFound;

// Every real, fixed-path page route, as plain path strings. This is what the
// prerender and sitemap consume. Excludes:
//   - redirect routes (no real content; handled client-side / via vercel.json)
//   - dynamic routes like /post/:slug (article slugs are prerendered separately)
//   - the "*" catch-all (NotFound)
export const getStaticRoutePaths = (): string[] =>
  appRoutes.filter((r): r is PageRoute => r.kind === 'page').map((r) => r.path);
