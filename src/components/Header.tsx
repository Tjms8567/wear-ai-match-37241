import { ShoppingCart, Search, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-display text-xl font-bold">WearMatch AI</span>
              </div>
              <nav className="space-y-1">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Release Dates
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/products?filter=new" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      New Releases
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Match Jordans
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/products?brand=jordan" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      All Jordans
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Match Dunks
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/products?brand=dunk" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      All Dunks
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Other Brands
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/products?brand=adidas" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Adidas
                    </Link>
                    <Link to="/products?brand=new-balance" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      New Balance
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Best Sellers
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/products?filter=bestseller" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Top Rated
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link to="/products?category=womens" className="block py-3 text-lg font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Womens
                </Link>
                <Link to="/products?category=unisex" className="block py-3 text-lg font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Unisex
                </Link>
                <Link to="/products?category=kids" className="block py-3 text-lg font-semibold hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Kids
                </Link>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Shop Collections
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/collections" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      All Collections
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    Programs & Deals
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/deals" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Current Deals
                    </Link>
                    <Link to="/referral" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      Referral Program
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-lg font-semibold hover:text-primary">
                    About
                    <ChevronDown className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/about" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      About Us
                    </Link>
                    <Link to="/how-it-works" className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      How It Works
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold">WearMatch AI</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/ai-match" className="text-sm font-medium transition-colors hover:text-primary">
              AI Match
            </Link>
            <Link to="/collections" className="text-sm font-medium transition-colors hover:text-primary">
              Collections
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-9 w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 md:hidden" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
