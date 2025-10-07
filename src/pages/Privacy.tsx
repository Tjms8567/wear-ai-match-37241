import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-6">Privacy Policy</h1>
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing information</li>
                <li>Images you upload for AI matching</li>
                <li>Purchase history and preferences</li>
                <li>Communications with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process and fulfill your orders</li>
                <li>Provide AI-powered product recommendations</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Image Processing</h2>
              <p className="text-muted-foreground">
                When you upload images to our AI matching service, we process them to provide product recommendations. These images are temporarily stored for processing and may be retained to improve our AI algorithms. We do not share your images with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors to complete transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Analytics providers to understand service usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at privacy@wearmatchai.com
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
