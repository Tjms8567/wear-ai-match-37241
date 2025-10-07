import { Product } from "@/lib/supabase";

/**
 * Mock AI matching function that filters products based on sky-blue tag
 * In production, this would analyze the uploaded image and return matching products
 */
export const findMatchingProducts = async (
  imageData: string,
  allProducts: Product[]
): Promise<Product[]> => {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock logic: Filter products that have 'sky-blue' in their ai_tags
  const matchingProducts = allProducts.filter((product) =>
    product.ai_tags.some((tag) => tag.toLowerCase().includes("sky") || tag.toLowerCase().includes("blue"))
  );

  // If no matches found, return some random products as fallback
  if (matchingProducts.length === 0) {
    return allProducts.slice(0, 6);
  }

  return matchingProducts.slice(0, 6);
};
