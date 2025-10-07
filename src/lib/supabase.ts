export { supabase } from '@/integrations/supabase/client';

// Types
export type Product = {
  id: string;
  title: string;
  description: string | null;
  product_type: string;
  gender: string;
  base_price: number;
  images: string[];
  svg_design_url: string | null;
  ai_tags: string[];
  featured: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductVariant = {
  id: string;
  product_id: string;
  size: string;
  color_name: string;
  color_hex: string;
  stock_quantity: number;
  sku: string | null;
  created_at: string;
  updated_at: string;
};

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};
