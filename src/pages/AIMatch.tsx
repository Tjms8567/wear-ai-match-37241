import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { findMatchingProducts } from "@/lib/aiMatching";
import ProductCard from "@/components/ProductCard";
import { toast } from "@/hooks/use-toast";

const AIMatch = () => {
  const navigate = useNavigate();
  const { data: products, isLoading: productsLoading } = useProducts();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [matchedProducts, setMatchedProducts] = useState<any[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setMatchedProducts([]); // Reset matches when new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFindMatches = async () => {
    if (!selectedImage || !products) {
      toast({
        title: "Unable to find matches",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsMatching(true);
    try {
      const matches = await findMatchingProducts(selectedImage, products);
      setMatchedProducts(matches);
      
      toast({
        title: "Matches found!",
        description: `Found ${matches.length} products that match your style`,
      });
    } catch (error) {
      toast({
        title: "Error finding matches",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              AI Match Studio
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your sneaker image and get instant clothing recommendations
            </p>
          </div>

          <Card className="p-8 border-2 border-dashed border-primary/30 hover:border-primary transition-colors">
            <div className="flex flex-col items-center justify-center gap-6">
              {!selectedImage ? (
                <>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">
                      Upload Your Sneaker
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, WEBP (Max 10MB)
                    </p>
                  </div>
                  <label htmlFor="image-upload">
                    <Button className="cursor-pointer">
                      Select Image
                    </Button>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </>
              ) : (
                <div className="w-full space-y-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary">
                    <img
                      src={selectedImage}
                      alt="Uploaded sneaker"
                      className="w-full h-full object-contain bg-secondary/20"
                    />
                  </div>
                  <div className="flex gap-4">
                    <label htmlFor="image-upload-new" className="flex-1">
                      <Button variant="outline" className="w-full cursor-pointer">
                        Upload Different Image
                      </Button>
                      <input
                        id="image-upload-new"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                    <Button 
                      className="flex-1 group" 
                      onClick={handleFindMatches}
                      disabled={isMatching || productsLoading}
                    >
                      {isMatching ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Finding Matches...
                        </>
                      ) : (
                        <>
                          Find Matches
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Matched Products Section */}
          {matchedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
                Your Perfect Matches
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.title}
                    price={product.base_price}
                    image={product.images[0] || "/placeholder.svg"}
                    category={product.product_type}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Upload Image</h3>
              <p className="text-sm text-muted-foreground">
                Take a photo or upload an existing image of your sneakers
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes colors, style, and trends to find perfect matches
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized clothing suggestions to complete your outfit
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIMatch;
