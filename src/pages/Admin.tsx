import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Package, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Admin = () => {
  const [svgFile, setSvgFile] = useState<File | null>(null);

  const handleSvgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "image/svg+xml") {
      setSvgFile(file);
      toast({
        title: "SVG file selected",
        description: file.name,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an SVG file",
        variant: "destructive",
      });
    }
  };

  const handleUploadSubmit = () => {
    if (!svgFile) {
      toast({
        title: "No file selected",
        description: "Please select an SVG file first",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement actual upload logic
    toast({
      title: "Upload successful",
      description: `${svgFile.name} has been uploaded`,
    });
    setSvgFile(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your products, orders, and design assets
          </p>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="products">
              <Package className="w-4 h-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger value="orders">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="uploads">
              <Upload className="w-4 h-4 mr-2" />
              Uploads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>
                  View and manage your product catalog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Product management features coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>
                  View and process customer orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Order management features coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="uploads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>SVG Design Upload</CardTitle>
                <CardDescription>
                  Upload SVG design files for products
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="svg-upload">Select SVG File</Label>
                  <div className="flex gap-4">
                    <Input
                      id="svg-upload"
                      type="file"
                      accept=".svg,image/svg+xml"
                      onChange={handleSvgUpload}
                      className="flex-1"
                    />
                  </div>
                  {svgFile && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {svgFile.name}
                    </p>
                  )}
                </div>

                <Button 
                  onClick={handleUploadSubmit}
                  disabled={!svgFile}
                  className="w-full md:w-auto"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload SVG
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
