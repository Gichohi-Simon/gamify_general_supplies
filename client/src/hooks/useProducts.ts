import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchFirstFourProducts,
  fetchSingleProduct,
  fetchCartProducts,
  fetchRandomFourProducts,
} from "@/api/product.api";
import { postsInterface } from "@/types/types";

export type GetAllProductResponse = {
  success: boolean;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  products: postsInterface[];
};

export const useProducts = ({ page = 1, limit = 6, query = "" } = {}) => {
  return useQuery<GetAllProductResponse>({
    queryKey: ["products", { page, limit, query }] as const,
    queryFn: () => fetchProducts({ page, limit, query }),
    placeholderData: keepPreviousData,
  });
};

export const useGetFirstFourProducts = () => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["products3"],
    queryFn: fetchFirstFourProducts,
    staleTime: Infinity,
  });
};

export const useGetRandomFourProducts = () => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["productsRandom"],
    queryFn: fetchRandomFourProducts,
    staleTime: Infinity,
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery<{ singleProduct: postsInterface }>({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};

export const useCartProducts = (ids: string[]) => {
  return useQuery<{ products: postsInterface[] }>({
    queryKey: ["cart-products", ids],
    queryFn: () => fetchCartProducts(ids),
    enabled: ids.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
