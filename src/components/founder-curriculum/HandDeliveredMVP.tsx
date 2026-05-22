import { Video, Send } from 'lucide-react';

/**
 * Mockup: Hand-delivered MVP
 * Stylized iMessage-looking thread of a founder sending a personal Loom
 * to one user, not building a signup flow.
 */
const HandDeliveredMVP = () => {
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
          Example · 1:1 delivery
        </span>
        <span className="text-[10px] text-slate-500 font-mono">DM thread</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 text-white text-sm px-3.5 py-2 shadow">
            Hey Maya — built v0 of the thing we talked about last week. It's rough.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 text-white text-sm px-3.5 py-2 shadow">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              <span className="underline underline-offset-2">2-min Loom: how to use it</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 text-white text-sm px-3.5 py-2 shadow">
            No signup. Just open the link. I'll watch logs and fix what breaks today.
          </div>
        </div>

        <div className="flex justify-start pt-1">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-700 text-slate-100 text-sm px-3.5 py-2 shadow">
            wait this actually solves it. trying with my Q3 numbers now
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/60 mt-3 pt-2.5 flex items-center justify-between text-[11px] text-slate-500">
        <span>0 signup forms · 0 onboarding · 1 customer</span>
        <span className="flex items-center gap-1">
          <Send className="w-3 h-3" /> sent 11:42a
        </span>
      </div>
    </div>
  );
};

export default HandDeliveredMVP;
