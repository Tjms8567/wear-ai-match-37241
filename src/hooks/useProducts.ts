import { useQuery } from '@tanstack/react-query';
import { supabase, Product } from '@/lib/supabase';

export const useProducts = (featured?: boolean) => {
  return useQuery({
    queryKey: ['products', featured],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (featured) {
        query = query.eq('featured', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Product[];
    },
  });
};

export const useProductVariants = (productId?: string) => {
  return useQuery({
    queryKey: ['product_variants', productId],
    queryFn: async () => {
      if (!productId) return [];

      const { data, error } = await supabase
        .from('product_variants')
        .select('*')
        .eq('product_id', productId);

      if (error) throw error;
      return data;
    },
    enabled: !!productId,
  });
};
