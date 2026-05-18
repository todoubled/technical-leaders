/**
 * WorkshopAccessGate
 *
 * Email-confirmation gate that wraps the protected content on
 * /claude-workshop-replay. Stateless, no JWT, no persistence — Stripe is the
 * only source of truth.
 *
 * Three states (discriminated union):
 *   - loading: a verify request is in flight (mount-time revalidation, or
 *     the user just submitted the form)
 *   - locked: show the email-input form
 *   - unlocked: render children (the gated content)
 *
 * Behavior:
 *   - On mount, if `localStorage.workshop_email` exists, start in `loading`
 *     and silently re-verify against Stripe. This avoids flashing the locked
 *     UI on every visit for paying buyers.
 *   - On a successful verification, the email is cached in localStorage.
 *   - On any failure (refund, cancellation, invalid email, network error),
 *     localStorage is cleared and the locked state is shown with an inline
 *     error.
 *
 * NOTE: localStorage stores an email, not an access token. A user who
 * tampers with it either names a real buyer (in which case they already
 * knew the email, so the read access is moot for a YouTube replay) or names
 * a non-buyer (in which case the live Stripe check denies access). The
 * enumeration risk via repeated POSTs is an accepted trade-off — see the
 * paywall design doc (prompts/089).
 */

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/utils/posthog";

const STORAGE_KEY = "workshop_email";
const SUPPORT_EMAIL = "support@technical-leaders.com";
const VERIFY_ENDPOINT = "/api/stripe/workshop-verify-email";

type GateState =
  | { kind: "loading" }
  | { kind: "locked"; error?: string }
  | { kind: "unlocked"; email: string };

interface WorkshopAccessGateProps {
  children: React.ReactNode;
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

const WorkshopAccessGate = ({ children }: WorkshopAccessGateProps) => {
  // Initialize from localStorage synchronously so the very first paint is
  // either `loading` (cached buyer) or `locked` (fresh visitor) — never a
  // flash of the unlocked UI before verification finishes.
  const [state, setState] = useState<GateState>(() => {
    if (typeof window === "undefined") return { kind: "loading" };
    return readCachedEmail() ? { kind: "loading" } : { kind: "locked" };
  });
  const [emailInput, setEmailInput] = useState("");
  const lockedShownRef = useRef(false);

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
        trackEvent("Workshop Replay Access Granted", { source: "cached" });
      } else {
        clearCachedEmail();
        setState({ kind: "locked" });
      }
    })();

    return () => {
      cancelled = true;
    };
    // Run only on mount — state transitions are driven by user actions
    // after this; we don't want to retrigger the cached-email path.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire the "gate shown" event the first time the locked state is rendered.
  useEffect(() => {
    if (state.kind === "locked" && !lockedShownRef.current) {
      lockedShownRef.current = true;
      trackEvent("Workshop Replay Gate Shown");
    }
  }, [state.kind]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const candidate = emailInput.trim().toLowerCase();
    if (!candidate || !candidate.includes("@")) {
      setState({
        kind: "locked",
        error: "Please enter a valid email address.",
      });
      return;
    }

    setState({ kind: "loading" });
    const ok = await verifyEmail(candidate);
    if (ok) {
      cacheEmail(candidate);
      setState({ kind: "unlocked", email: candidate });
      trackEvent("Workshop Replay Access Granted", { source: "submit" });
    } else {
      clearCachedEmail();
      setState({
        kind: "locked",
        error:
          "We couldn't find a purchase for that email. Try the one you used at Stripe checkout, or contact support.",
      });
      trackEvent("Workshop Replay Access Denied");
    }
  };

  const handleSignOut = () => {
    clearCachedEmail();
    trackEvent("Workshop Replay Sign Out");
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  if (state.kind === "loading") {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-sm">Verifying your access&hellip;</p>
        </div>
      </div>
    );
  }

  if (state.kind === "locked") {
    return (
      <div className="w-full max-w-xl mx-auto">
        <Card className="border-primary/20 bg-background/80 backdrop-blur shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Confirm your email to watch the replay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center mb-6">
              Enter the email address you used when you purchased.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                Unlock the workshop
              </Button>
            </form>
            {state.error && (
              <p
                role="alert"
                className="mt-4 text-sm text-destructive text-center"
              >
                {state.error.includes("contact support") ? (
                  <>
                    We couldn&apos;t find a purchase for that email. Try the one
                    you used at Stripe checkout, or{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="underline hover:no-underline"
                    >
                      contact support
                    </a>
                    .
                  </>
                ) : (
                  state.error
                )}
              </p>
            )}
            <p className="mt-6 text-xs text-muted-foreground text-center">
              Haven&apos;t purchased yet?{" "}
              <a
                href="/claude-workshop"
                className="underline hover:no-underline"
              >
                Get the workshop replay
              </a>
              .
            </p>
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

export default WorkshopAccessGate;
