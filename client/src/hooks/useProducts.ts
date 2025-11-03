import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchFirstFourProducts,
  fetchSingleProduct,
  fetchCartProducts,
} from "@/api/product.api";
import { postsInterface } from "@/types/types";

export const useProducts = () => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });
};

export const useGetFirstFourProducts = () => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["products3"],
    queryFn: fetchFirstFourProducts,
    staleTime: Infinity,
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery<{ singleProduct: postsInterface }>({
    queryKey: ["products", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};

export const useCartProducts = (ids: number[]) => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["cart-products", ids],
    queryFn: () => fetchCartProducts(ids),
    enabled: ids.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
