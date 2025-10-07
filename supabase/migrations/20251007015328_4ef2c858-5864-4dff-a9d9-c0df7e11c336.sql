-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  product_type TEXT NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('unisex', 'mens', 'kids')),
  base_price DECIMAL(10, 2) NOT NULL,
  images TEXT[] NOT NULL DEFAULT '{}',
  svg_design_url TEXT,
  ai_tags TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT false,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create product_variants table
CREATE TABLE public.product_variants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  size TEXT NOT NULL,
  color_name TEXT NOT NULL,
  color_hex TEXT NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  sku TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;

-- RLS Policies for products (public read access)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (active = true);

-- RLS Policies for product_variants (public read access)
CREATE POLICY "Product variants are viewable by everyone" 
ON public.product_variants 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_product_variants_updated_at
BEFORE UPDATE ON public.product_variants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert demo products
INSERT INTO public.products (title, description, product_type, gender, base_price, images, ai_tags, featured, active) VALUES
('Classic White Crew Neck T-Shirt', 'Premium cotton crew neck tee, perfect for everyday wear and AI sneaker matching', 'T-Shirt', 'unisex', 29.99, 
 ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'], 
 ARRAY['casual', 'white', 'basic', 'cotton', 'comfortable'], true, true),

('Black Graphic Hoodie', 'Soft fleece hoodie with modern design, ideal for streetwear looks', 'Hoodie', 'unisex', 59.99,
 ARRAY['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
 ARRAY['streetwear', 'black', 'hoodie', 'warm', 'casual'], true, true),

('Navy Blue Long Sleeve', 'Comfortable long sleeve perfect for layering', 'Long Sleeve', 'mens', 39.99,
 ARRAY['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500'],
 ARRAY['navy', 'blue', 'long-sleeve', 'casual'], true, true),

('Vintage Wash Sweatshirt', 'Relaxed fit sweatshirt with vintage-inspired wash', 'Sweatshirt', 'unisex', 49.99,
 ARRAY['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
 ARRAY['vintage', 'sweatshirt', 'casual', 'comfortable'], true, true),

('Kids Rainbow T-Shirt', 'Fun and colorful t-shirt for kids', 'Kid''s T-Shirt', 'kids', 24.99,
 ARRAY['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500'],
 ARRAY['kids', 'colorful', 'fun', 'rainbow'], false, true),

('Athletic Tank Top', 'Breathable tank top for active lifestyle', 'Tank Top', 'unisex', 27.99,
 ARRAY['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500'],
 ARRAY['athletic', 'tank', 'breathable', 'active'], false, true),

('Retro Crop Top', 'Stylish crop top with retro vibes', 'Crop Top', 'unisex', 34.99,
 ARRAY['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500'],
 ARRAY['crop', 'retro', 'stylish', 'trendy'], false, true),

('Comfort Socks Pack', 'Premium cotton socks 3-pack', 'Socks', 'unisex', 19.99,
 ARRAY['https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500'],
 ARRAY['socks', 'comfortable', 'cotton', 'essentials'], false, true);

-- Insert product variants for the first product
INSERT INTO public.product_variants (product_id, size, color_name, color_hex, stock_quantity) 
SELECT id, 'S', 'White', '#FFFFFF', 50 FROM public.products WHERE title = 'Classic White Crew Neck T-Shirt'
UNION ALL
SELECT id, 'M', 'White', '#FFFFFF', 75 FROM public.products WHERE title = 'Classic White Crew Neck T-Shirt'
UNION ALL
SELECT id, 'L', 'White', '#FFFFFF', 60 FROM public.products WHERE title = 'Classic White Crew Neck T-Shirt'
UNION ALL
SELECT id, 'XL', 'White', '#FFFFFF', 40 FROM public.products WHERE title = 'Classic White Crew Neck T-Shirt';

-- Insert product variants for the second product
INSERT INTO public.product_variants (product_id, size, color_name, color_hex, stock_quantity)
SELECT id, 'S', 'Black', '#000000', 45 FROM public.products WHERE title = 'Black Graphic Hoodie'
UNION ALL
SELECT id, 'M', 'Black', '#000000', 70 FROM public.products WHERE title = 'Black Graphic Hoodie'
UNION ALL
SELECT id, 'L', 'Black', '#000000', 55 FROM public.products WHERE title = 'Black Graphic Hoodie'
UNION ALL
SELECT id, 'XL', 'Black', '#000000', 35 FROM public.products WHERE title = 'Black Graphic Hoodie';