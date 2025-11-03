import { postsInterface } from "@/types/types";

const API = process.env.NEXT_PUBLIC_API_URL;

interface CartProductsResponse {
  products:postsInterface[];
}

export const fetchProducts = async ():Promise<{products:postsInterface[]}> => {
  const response = await fetch(`${API}/product/all-products`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchFirstFourProducts = async ():Promise<{products:postsInterface[]}> => {
  const response = await fetch(`${API}/product/getFirstFour`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchSingleProduct = async (id: string): Promise<{singleProduct: postsInterface}> => {
  const response = await fetch(`${API}/product/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchCartProducts = async(ids: number[]): Promise<CartProductsResponse> => {
  const query = ids.join(",");
  const response = await fetch(`${API}/product/by-ids?ids=${query}`);
  if(!response.ok) throw new Error("error fetching cart details");
  return response.json();
}