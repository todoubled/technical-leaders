import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Turn Your Technical Expertise Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Consulting Income
            </span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the strategic playbook that shows you how to diversify your income through consulting—without traditional sales tactics, cold outreach, or burning out.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-secondary/50 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold px-8"
            onClick={() => { window.location.href = "https://techleaders.kit.com/playbook" }}
          >
            Get Your Free Consulting Playbook
          </Button>
        </div>

        {/* Simple Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-8 w-auto" />
              <span className="text-sm text-muted-foreground">
                © 2025 Tech Leaders. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://billing.stripe.com/p/login/28oaFm1om8Za4XC000"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                My Membership
              </a>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Compare:</span>
                <a
                  href="/alternative-to-sidebar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Alternative to Sidebar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;