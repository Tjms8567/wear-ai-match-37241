import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Apple, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const shippingCost = totalPrice > 50 ? 0 : 5;
  const finalTotal = totalPrice + shippingCost;
  const installmentAmount = (finalTotal / 4).toFixed(2);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(shippingInfo).every((field) => field.trim())) {
      setStep(2);
    } else {
      toast({
        title: "Missing information",
        description: "Please fill in all shipping fields",
        variant: "destructive",
      });
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual payment processing
    toast({
      title: "Payment processed",
      description: "Your order has been placed successfully",
    });
    navigate("/order-confirmed");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-8 md:py-12">
          <Card className="max-w-md mx-auto text-center p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some items to your cart before checking out
            </p>
            <Button onClick={() => navigate("/products")}>
              Browse Products
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Checkout
          </h1>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted"}`}>
                1
              </div>
              <span className="hidden sm:inline font-medium">Shipping</span>
            </div>
            <div className="w-12 h-0.5 bg-border" />
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-primary bg-primary text-primary-foreground" : "border-muted"}`}>
                2
              </div>
              <span className="hidden sm:inline font-medium">Payment</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                    <CardDescription>
                      Enter your delivery address
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={shippingInfo.fullName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            value={shippingInfo.zipCode}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            value={shippingInfo.country}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">
                        Continue to Payment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                      Choose how you'd like to pay
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                            <CreditCard className="w-5 h-5" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                          <RadioGroupItem value="shop-pay" id="shop-pay" />
                          <Label htmlFor="shop-pay" className="flex items-center gap-2 cursor-pointer flex-1">
                            <Wallet className="w-5 h-5" />
                            Shop Pay
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50">
                          <RadioGroupItem value="apple-pay" id="apple-pay" />
                          <Label htmlFor="apple-pay" className="flex items-center gap-2 cursor-pointer flex-1">
                            <Apple className="w-5 h-5" />
                            Apple Pay
                          </Label>
                        </div>
                      </RadioGroup>

                      <div className="bg-secondary/30 border border-primary/30 rounded-lg p-4">
                        <p className="text-sm font-medium mb-1">
                          💳 4 interest-free installments of ${installmentAmount}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Available with Shop Pay. No interest, no fees.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                          Back
                        </Button>
                        <Button type="submit" className="flex-1">
                          Complete Order
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded border"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">
                        {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-display font-bold">Total</span>
                      <span className="font-display font-bold text-lg">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
