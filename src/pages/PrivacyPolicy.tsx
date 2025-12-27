import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy"
        description="Learn how Technical Leaders, Inc. collects, uses, and protects your personal information. Read our complete privacy policy."
        keywords={['privacy policy', 'data protection', 'personal information', 'Technical Leaders privacy']}
      />
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: December 27, 2023
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-foreground mb-6">
                This privacy notice for Technical Leaders, Inc. ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground">
                <li>Visit our website at https://www.technical-leaders.com, or any website of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                1. What Information Do We Collect?
              </h2>
              <p className="text-foreground mb-4">
                We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-foreground mb-6">
                The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Mailing addresses</li>
                <li>Phone numbers</li>
                <li>Job titles</li>
                <li>Contact preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                2. How Do We Process Your Information?
              </h2>
              <p className="text-foreground mb-6">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground">
                <li>To provide and facilitate delivery of services to the user</li>
                <li>To respond to user inquiries and offer support to users</li>
                <li>To send administrative information to you</li>
                <li>To fulfill and manage your orders</li>
                <li>To enable user-to-user communications</li>
                <li>To request feedback and to contact you about your use of our Services</li>
                <li>To send you marketing and promotional communications</li>
                <li>To protect our Services</li>
                <li>To identify usage trends</li>
                <li>To determine the effectiveness of our marketing and promotional campaigns</li>
                <li>To comply with our legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                3. When and With Whom Do We Share Your Personal Information?
              </h2>
              <p className="text-foreground mb-6">
                We may share information in specific situations described in this section and/or with the following categories of third parties:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>When we use Google Analytics.</strong> We may share your information with Google Analytics to track and analyze the use of the Services.</li>
                <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                4. How Long Do We Keep Your Information?
              </h2>
              <p className="text-foreground mb-6">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                5. How Do We Keep Your Information Safe?
              </h2>
              <p className="text-foreground mb-6">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                6. Do We Collect Information From Minors?
              </h2>
              <p className="text-foreground mb-6">
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                7. What Are Your Privacy Rights?
              </h2>
              <p className="text-foreground mb-6">
                Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. You may review, change, or terminate your account at any time.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                8. Controls for Do-Not-Track Features
              </h2>
              <p className="text-foreground mb-6">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                9. Do We Make Updates to This Notice?
              </h2>
              <p className="text-foreground mb-6">
                Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                10. How Can You Contact Us About This Notice?
              </h2>
              <p className="text-foreground mb-4">
                If you have questions or comments about this notice, you may email us at:
              </p>
              <p className="text-foreground mb-2">
                <a href="mailto:support@technical-leaders.com" className="text-orange-500 hover:underline">
                  support@technical-leaders.com
                </a>
              </p>
              <p className="text-foreground mb-6">
                Or by post to:
              </p>
              <address className="text-foreground not-italic mb-6">
                Technical Leaders, Inc.<br />
                1062 E Oaks Manor Dr.<br />
                Fayetteville, AR 72703<br />
                United States
              </address>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                11. How Can You Review, Update, or Delete the Data We Collect From You?
              </h2>
              <p className="text-foreground">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please email us at support@technical-leaders.com.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;