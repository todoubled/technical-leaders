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

        {/* Links Section */}
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and Copyright */}
            <div className="md:col-span-2">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                © 2025 Tech Leaders. All rights reserved.
              </p>
            </div>

            {/* Compare Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Compare</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/alternative-to-mba"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tech Leaders vs. MBA Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/articles"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="/tl-ai-workflow"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI Workshop
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Account</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://billing.stripe.com/p/login/28oaFm1om8Za4XC000"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    My Membership
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;