/**
 * OfficeHoursAccessGate
 *
 * Free-signup gate that wraps the office-hours second half + the full library.
 * Mirrors WorkshopAccessGate's state machine (loading / locked / unlocked,
 * localStorage cache, mount-time revalidation) but the source of truth is a FREE
 * Kit.com (ConvertKit) signup instead of a paid Stripe purchase — so the locked
 * state embeds the Kit signup form (lead capture) alongside an "already signed
 * up" email confirmation input. Both paths verify against
 * /api/office-hours/verify-email, which returns { access: boolean }.
 *
 * The gate is a funnel, not DRM: localStorage stores an email (not a token), the
 * server is the source of truth, and the accepted trade-offs match
 * WorkshopAccessGate. See that component for the full threat-model rationale.
 */

import { useEffect, useRef, useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent, trackConversion } from "@/utils/posthog";

const STORAGE_KEY = "office_hours_email";
const VERIFY_ENDPOINT = "/api/office-hours/verify-email";

// Kit.com (ConvertKit) embedded signup form. Reuses the same account/form as the
// Fortune 100 library capture so signups land on the existing list; swap
// KIT_FORM_UID for a dedicated office-hours form/tag when one exists.
const KIT_FORM_UID = "fb2b5743bc";
const KIT_FORM_SRC = `https://techleaders.kit.com/${KIT_FORM_UID}/index.js`;
const KIT_ORIGIN = "https://techleaders.kit.com";

type GateState =
  | { kind: "loading" }
  // `justSignedUp` steers the copy toward "confirm the email you just used".
  | { kind: "locked"; error?: string; justSignedUp?: boolean }
  | { kind: "unlocked"; email: string };

interface OfficeHoursAccessGateProps {
  children: React.ReactNode;
  /** PostHog attribution for where the gate was shown (e.g. session id). */
  source?: string;
}

async function verifyEmail(email: string): Promise<boolean> {
  try {
    const resp = await fetch(VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!resp.ok) return false;
    const data = (await resp.json()) as { access?: boolean };
    return data.access === true;
  } catch {
    return false;
  }
}

function readCachedEmail(): string | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const normalized = raw.trim().toLowerCase();
    return normalized.includes("@") ? normalized : null;
  } catch {
    return null;
  }
}

function clearCachedEmail() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore (Safari private mode, etc.)
  }
}

function cacheEmail(email: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, email);
  } catch {
    // ignore (Safari private mode, etc.)
  }
}

const OfficeHoursAccessGate = ({
  children,
  source,
}: OfficeHoursAccessGateProps) => {
  // Initialize from localStorage synchronously so the first paint is either
  // `loading` (returning signup) or `locked` (fresh visitor) — never a flash of
  // the unlocked content before verification finishes.
  const [state, setState] = useState<GateState>(() => {
    if (typeof window === "undefined") return { kind: "loading" };
    return readCachedEmail() ? { kind: "loading" } : { kind: "locked" };
  });
  const [emailInput, setEmailInput] = useState("");
  const lockedShownRef = useRef(false);
  const kitFormRef = useRef<HTMLDivElement>(null);

  // Mount-time revalidation for cached emails.
  useEffect(() => {
    if (state.kind !== "loading") return;
    const cached = readCachedEmail();
    if (!cached) {
      setState({ kind: "locked" });
      return;
    }

    let cancelled = false;
    (async () => {
      const ok = await verifyEmail(cached);
      if (cancelled) return;
      if (ok) {
        setState({ kind: "unlocked", email: cached });
        trackEvent("Office Hours Access Granted", { source: "cached" });
      } else {
        clearCachedEmail();
        setState({ kind: "locked" });
      }
    })();

    return () => {
      cancelled = true;
    };
    // Run only on mount — later transitions are driven by user actions.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire the "gate shown" event the first time the locked state renders.
  useEffect(() => {
    if (state.kind === "locked" && !lockedShownRef.current) {
      lockedShownRef.current = true;
      trackEvent("Office Hours Gate Shown", { source });
    }
  }, [state.kind, source]);

  // Inject the Kit.com signup form (client-only) while locked, and treat a Kit
  // `form_submitted` postMessage as the signup conversion. Kit doesn't reliably
  // include the email in that payload, so we track the conversion and steer the
  // visitor to confirm the same email below (which verifies + unlocks).
  useEffect(() => {
    if (state.kind !== "locked") return;
    const container = kitFormRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", KIT_FORM_UID);
    script.src = KIT_FORM_SRC;
    container.appendChild(script);

    const onMessage = (event: MessageEvent) => {
      if (
        event.origin === KIT_ORIGIN &&
        (event.data as { event?: string })?.event === "form_submitted"
      ) {
        trackConversion("Office Hours Signup", {
          source: "kit_form",
          session_id: source,
        });
        setState({ kind: "locked", justSignedUp: true });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [state.kind, source]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const candidate = emailInput.trim().toLowerCase();
    if (!candidate || !candidate.includes("@")) {
      setState({ kind: "locked", error: "Please enter a valid email address." });
      return;
    }

    setState({ kind: "loading" });
    const ok = await verifyEmail(candidate);
    if (ok) {
      cacheEmail(candidate);
      setState({ kind: "unlocked", email: candidate });
      trackEvent("Office Hours Access Granted", { source: "submit" });
    } else {
      clearCachedEmail();
      setState({
        kind: "locked",
        error:
          "We couldn't find that email on the list yet. Sign up above, then confirm the same email here (it can take a moment to sync).",
      });
      trackEvent("Office Hours Access Denied", { source });
    }
  };

  const handleSignOut = () => {
    clearCachedEmail();
    trackEvent("Office Hours Sign Out");
    if (typeof window !== "undefined") window.location.reload();
  };

  if (state.kind === "loading") {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-sm">Checking your access&hellip;</p>
        </div>
      </div>
    );
  }

  if (state.kind === "locked") {
    return (
      <div className="w-full max-w-xl mx-auto">
        <Card className="border-primary/20 bg-background/80 backdrop-blur shadow-xl">
          <CardHeader>
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Lock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">
              Unlock the rest of office hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center mb-6">
              Sign up free to watch the second half of this session and get the
              full library of past and future office-hours recordings.
            </p>

            {/* New here → Kit.com signup form (lead capture). */}
            <div ref={kitFormRef} />

            {state.justSignedUp && (
              <p className="mt-4 text-sm text-center text-green-600 dark:text-green-400 font-medium">
                You&apos;re in! Confirm the same email below to unlock now.
              </p>
            )}

            {/* Already signed up → confirm the email to unlock. */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-3">
                Already signed up? Enter your email to unlock.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="h-12 text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base"
                  disabled={!emailInput.trim()}
                >
                  Unlock office hours
                </Button>
              </form>
              {state.error && (
                <p role="alert" className="mt-4 text-sm text-destructive text-center">
                  {state.error}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>
          Watching as <span className="font-medium">{state.email}</span>
        </span>
        <span aria-hidden>&middot;</span>
        <button
          type="button"
          onClick={handleSignOut}
          className="underline hover:no-underline"
        >
          sign out
        </button>
      </div>
      {children}
    </div>
  );
};

export default OfficeHoursAccessGate;
