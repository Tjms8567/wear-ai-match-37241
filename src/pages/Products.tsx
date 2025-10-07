import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Filter } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const filterProducts = (category: string) => {
    if (!products) return [];
    if (category === "all") return products;
    return products.filter(p => p.gender === category);
  };

  const ProductGrid = ({ category }: { category: string }) => {
    const filteredProducts = useMemo(() => filterProducts(category), [products, category]);

    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.base_price}
            image={product.images[0] || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"}
            category={product.product_type}
            colors={[]}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Browse our complete collection of AI-matched apparel
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unisex">Unisex</TabsTrigger>
              <TabsTrigger value="mens">Men's</TabsTrigger>
              <TabsTrigger value="kids">Kids</TabsTrigger>
            </TabsList>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <TabsContent value="all">
            <ProductGrid category="all" />
          </TabsContent>
          <TabsContent value="unisex">
            <ProductGrid category="unisex" />
          </TabsContent>
          <TabsContent value="mens">
            <ProductGrid category="mens" />
          </TabsContent>
          <TabsContent value="kids">
            <ProductGrid category="kids" />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
