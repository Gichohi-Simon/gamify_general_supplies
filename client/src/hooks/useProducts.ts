import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchFirstFourProducts,
  fetchSingleProduct,
} from "@/api/product.api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });
};

export const useGetFirstFourProducts = () => {
  return useQuery({
    queryKey: ["products3"],
    queryFn: fetchFirstFourProducts,
    staleTime: Infinity,
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};
