import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-6">Terms of Service</h1>
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using WearMatch AI, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
              <p className="text-muted-foreground mb-3">
                Permission is granted to temporarily download one copy of the materials on WearMatch AI for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You must not modify or copy the materials</li>
                <li>You must not use the materials for any commercial purpose</li>
                <li>You must not attempt to decompile or reverse engineer any software</li>
                <li>You must not remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Account Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You must be at least 13 years old to use this service</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Product Information</h2>
              <p className="text-muted-foreground">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. AI Matching Service</h2>
              <p className="text-muted-foreground">
                Our AI matching service provides recommendations based on the images you upload. While we strive for accuracy, the recommendations are suggestions only and may not always perfectly match your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                WearMatch AI shall not be liable for any damages that result from the use of, or the inability to use, the materials on this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Modifications</h2>
              <p className="text-muted-foreground">
                WearMatch AI may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at support@wearmatchai.com
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
