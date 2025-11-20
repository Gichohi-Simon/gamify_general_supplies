import { postsInterface } from "@/types/types";
import { GetAllProductResponse } from "@/hooks/useProducts";

const API = process.env.NEXT_PUBLIC_API_URL;

interface CartProductsResponse {
  products: postsInterface[];
}

export const fetchProducts = async ({
  page = 1,
  limit = 6,
  query = "",
}): Promise<GetAllProductResponse> => {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("limit", limit.toString());
  if(query) params.append("q", query);
  
  const response = await fetch(`${API}/product/all-products?${params}`, {
    cache: "no-store",
  });
  
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchFirstFourProducts = async (): Promise<{
  products: postsInterface[];
}> => {
  const response = await fetch(`${API}/product/getFirstFour`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchRandomFourProducts = async (): Promise<{
  products: postsInterface[];
}> => {
  const response = await fetch(`${API}/product/get-random-four-products`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchSingleProduct = async (
  id: string
): Promise<{ singleProduct: postsInterface }> => {
  const response = await fetch(`${API}/product/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchCartProducts = async (
  ids: string[]
): Promise<CartProductsResponse> => {
  const query = ids.join(",");
  const response = await fetch(`${API}/product/by-ids?ids=${query}`);
  if (!response.ok) throw new Error("error fetching cart details");
  return response.json();
};
