const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Links Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and Copyright */}
            <div className="md:col-span-2">
              <img src="/orange-logo.png" alt="Tech Leaders" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                © 2026 Tech Leaders. All rights reserved.
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
                <li>
                  <a
                    href="/alternative-to-mit-oxford"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tech Leaders vs. MIT/Oxford AI
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">How We Help</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/ai"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI-First Training
                  </a>
                </li>
                <li>
                  <a
                    href="/playbook"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Monetize Your Expertise
                  </a>
                </li>
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
                    href="/podcast"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="/healthcare-ai-case-study"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Healthcare AI Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="/speak"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Speaking Engagements
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