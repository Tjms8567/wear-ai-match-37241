import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Check, Truck, Shield, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: products } = useProducts();
  const { addItem } = useCart();
  
  const product = products?.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [isLiked, setIsLiked] = useState(false);

  // Available options (in production, these would come from the product data)
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Tan", hex: "#D2B48C" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Navy", hex: "#000080" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Cyan", hex: "#00BCD4" },
    { name: "Olive", hex: "#808000" },
    { name: "Magenta", hex: "#C71585" },
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Orange", hex: "#FF8C00" },
    { name: "Gray", hex: "#C0C0C0" },
    { name: "Green", hex: "#228B22" },
    { name: "Maroon", hex: "#800000" },
    { name: "Mint", hex: "#98FF98" },
    { name: "Khaki", hex: "#8B7E66" },
    { name: "Coral", hex: "#FF7F50" },
    { name: "Pink", hex: "#FFB6C1" },
    { name: "Purple", hex: "#800080" },
    { name: "Red", hex: "#DC143C" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFD700" },
  ];

  const productTypes = [
    "Crop Top", "Hoodie", "Kid's Hoodie", "Kid's Long Sleeve", 
    "Kid's T-Shirt", "Long Sleeve", "Socks", "Sweatshirt", 
    "T-Shirt", "Tank Top"
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || !selectedType) {
      toast({
        title: "Please select all options",
        description: "Choose a color, size, and product type",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: `${product.id}-${selectedColor}-${selectedSize}-${selectedType}`,
      name: `${product.title} - ${selectedType}`,
      price: product.base_price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8">
        {/* Perfect Color Match Banner */}
        <div className="bg-[#FFFACD] border-2 border-primary rounded-lg p-4 mb-6 flex items-center justify-center gap-2">
          <Check className="h-5 w-5 text-foreground" />
          <span className="font-bold text-foreground">PERFECT COLOR MATCH GUARANTEED</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary bg-secondary/20" style={{ boxShadow: 'var(--shadow-3d)' }}>
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-destructive text-destructive" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-3xl font-bold">${product.base_price.toFixed(2)}</p>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold">Color: <span className="font-normal text-muted-foreground">{selectedColor || "Select"}</span></label>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-md border-2 transition-all ${
                      selectedColor === color.name 
                        ? "border-foreground scale-110 ring-2 ring-primary" 
                        : "border-border hover:border-primary"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Product Type Selection */}
            <div>
              <label className="font-semibold block mb-3">Product Type:</label>
              <div className="flex flex-wrap gap-2">
                {productTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className="rounded-lg"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold">Size:</label>
                <Button variant="link" className="text-sm underline p-0 h-auto">Size Guide</Button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="rounded-lg"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Shop Pay Message */}
            <p className="text-sm text-muted-foreground">
              Pay in full or up to 4 interest-free installments of <span className="font-semibold">${(product.base_price / 4).toFixed(2)}</span> if you qualify with <span className="text-[#5A31F4] font-semibold">Shop Pay</span>
            </p>

            {/* Delivery Time */}
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm">
                Order within <span className="text-primary font-semibold">3 hrs 23 mins</span> for delivery as fast as <span className="font-semibold">Wed, Oct 15</span>
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button 
              className="w-full h-12 text-base font-semibold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              ADD TO CART
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details & Materials</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Product Details</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>{product.description || "High-quality apparel designed for comfort and style. Perfect for everyday wear or matching with your favorite sneakers."}</p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Materials & Fabric:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>100% Premium Cotton</li>
                    <li>Pre-shrunk for perfect fit</li>
                    <li>Breathable and comfortable fabric</li>
                    <li>Durable construction for long-lasting wear</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Quality Features:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Double-stitched seams for durability</li>
                    <li>Colorfast dyes that won't fade</li>
                    <li>Tag-free labels for comfort</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">out of 5</div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Based on 127 reviews</p>
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-xs w-8">{rating} ★</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${rating === 5 ? 85 : rating === 4 ? 10 : 3}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-12">{rating === 5 ? 108 : rating === 4 ? 13 : 2}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold">Amazing Quality!</div>
                      <div className="text-sm text-muted-foreground">John D. - Verified Purchase</div>
                    </div>
                    <div className="text-sm">★★★★★</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect match for my sneakers. The color is exactly as shown and the material feels premium.</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold">Love the fit!</div>
                      <div className="text-sm text-muted-foreground">Sarah M. - Verified Purchase</div>
                    </div>
                    <div className="text-sm">★★★★★</div>
                  </div>
                  <p className="text-sm text-muted-foreground">True to size and very comfortable. The AI matching really works!</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Shipping Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Free standard shipping on all orders over $50</li>
                    <li>• Express shipping available for $9.99</li>
                    <li>• Orders typically ship within 1-2 business days</li>
                    <li>• Delivery time: 3-7 business days for standard shipping</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Returns & Refunds</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 30-day return policy on all items</li>
                    <li>• Items must be unworn and in original condition</li>
                    <li>• Free return shipping for exchanges</li>
                    <li>• Refunds processed within 5-7 business days</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
