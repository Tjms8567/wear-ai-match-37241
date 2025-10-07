import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Package, Mail } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const OrderConfirmed = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart when order is confirmed
    clearCart();
  }, [clearCart]);

  const orderNumber = `WM${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center space-y-6 border-2 border-primary/30">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-3xl md:text-4xl font-bold">
                Order Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground">
                Thank you for your purchase
              </p>
            </div>

            <div className="bg-secondary/30 border border-primary/20 rounded-lg p-6 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <p className="font-display text-xl font-bold text-primary">
                  {orderNumber}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                <Package className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Track Your Order</h3>
                <p className="text-xs text-muted-foreground text-center">
                  You'll receive tracking information once your order ships
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Order Updates</h3>
                <p className="text-xs text-muted-foreground text-center">
                  We'll keep you updated via email about your order status
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmed;
