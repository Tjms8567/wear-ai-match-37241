import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { RefreshCw, Package, CheckCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-6">Returns & Refunds Policy</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">Easy returns within 30 days</p>
            </Card>
            <Card className="p-6 text-center">
              <RefreshCw className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Free Exchanges</h3>
              <p className="text-sm text-muted-foreground">No cost for size/color changes</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quick Refunds</h3>
              <p className="text-sm text-muted-foreground">Processed within 5-7 days</p>
            </Card>
          </div>

          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Return Policy</h2>
              <p className="text-muted-foreground mb-3">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Return Conditions</h2>
              <p className="text-muted-foreground mb-3">To be eligible for a return, items must meet the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Items must be unworn, unwashed, and in original condition</li>
                <li>All original tags must be attached</li>
                <li>Items must be in original packaging</li>
                <li>Proof of purchase (order number or receipt) is required</li>
                <li>Custom or personalized items cannot be returned unless defective</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How to Return</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground ml-4">
                <li className="mb-2">
                  <span className="font-semibold text-foreground">Initiate Return:</span> Contact our support team or log into your account to start a return request
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-foreground">Print Label:</span> We'll email you a prepaid return shipping label
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-foreground">Pack Items:</span> Securely pack items in original packaging with all tags attached
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-foreground">Ship Back:</span> Drop off the package at any authorized shipping location
                </li>
                <li>
                  <span className="font-semibold text-foreground">Receive Refund:</span> Once received and inspected, your refund will be processed within 5-7 business days
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Exchanges</h2>
              <p className="text-muted-foreground">
                Need a different size or color? Exchanges are free! Follow the same return process and indicate you'd like an exchange. We'll ship your replacement item as soon as we receive your return.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Refunds are issued to the original payment method</li>
                <li>Processing time: 5-7 business days after we receive your return</li>
                <li>Bank processing may take an additional 3-5 business days</li>
                <li>Shipping costs are non-refundable (unless item was defective)</li>
                <li>You'll receive an email confirmation when your refund is processed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Damaged or Defective Items</h2>
              <p className="text-muted-foreground mb-3">
                If you receive a damaged or defective item:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact us within 7 days of delivery</li>
                <li>Provide photos of the damage or defect</li>
                <li>We'll send a replacement immediately at no cost</li>
                <li>Return shipping is free for damaged/defective items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">International Returns</h2>
              <p className="text-muted-foreground">
                International customers are responsible for return shipping costs. Duties and taxes are non-refundable. Please contact our support team for international return instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
              <p className="text-muted-foreground">
                Have questions about returns or refunds? Contact our customer service team at returns@wearmatchai.com or call 1-800-WEAR-MATCH. We're here to help!
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
