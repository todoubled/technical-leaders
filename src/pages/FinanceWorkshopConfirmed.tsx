import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { trackEvent } from "@/utils/posthog";

const FinanceWorkshopConfirmed = () => {
  useEffect(() => {
    trackEvent('Finance Workshop Confirmation Page Viewed', {
      page: 'finance-workshop-confirmed'
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Registration Confirmed - Finance for Founders™ Workshop"
        description="Your spot is reserved for the Finance for Founders™ Workshop. Check your email for important details."
        keywords={["workshop confirmation", "finance workshop", "registration confirmed"]}
      />

      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              You're Registered! 🎉
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your spot for the <strong>Finance for Founders™ Workshop</strong> is confirmed.
            </p>

            <Card className="p-6 bg-background/50 backdrop-blur mb-8">
              <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
              <div className="space-y-4 text-left max-w-lg mx-auto">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Check Your Email</p>
                    <p className="text-sm text-muted-foreground">
                      We've sent you confirmation details and a calendar invite
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Add to Calendar</p>
                    <p className="text-sm text-muted-foreground">
                      Block your calendar for the workshop date (details in email)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Join Us Live (or Watch the Recording)</p>
                    <p className="text-sm text-muted-foreground">
                      Can't make it live? No problem - all registrants get the recording
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Didn't receive the email?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check your spam folder or promotions tab. Still can't find it?
              </p>
              <Button variant="outline" size="sm" onClick={() => {
                trackEvent('Resend Confirmation Email Clicked', {
                  workshop: 'finance_for_founders'
                });
                alert('Confirmation email resent! Please check your inbox.');
              }}>
                Resend Confirmation Email
              </Button>
            </div>

            <div className="pt-6 border-t">
              <p className="text-muted-foreground mb-4">
                While you wait for the workshop, explore more resources:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    trackEvent('Explore Articles Clicked', {
                      from: 'finance_workshop_confirmation'
                    });
                    window.location.href = '/articles';
                  }}
                >
                  Read Our Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => {
                    trackEvent('Book Call from Confirmation', {
                      from: 'finance_workshop_confirmation'
                    });
                    window.location.href = '/call';
                  }}
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <p className="text-sm text-muted-foreground text-center">
            Questions? Email us at{" "}
            <a href="mailto:todd@technical-leaders.com" className="text-primary hover:underline">
              todd@technical-leaders.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceWorkshopConfirmed;