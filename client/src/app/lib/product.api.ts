import { useQuery } from "@tanstack/react-query";

const API = process.env.NEXT_PUBLIC_API_URL;

export const useProducts = () => {
  const fetchProducts = async () => {
    const response = await fetch(`${API}/product/all-products`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
  };

  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });
};

export const useGetFirstFourProducts = () => {
  const fetchFirstFourProducts = async () => {
    const response = await fetch(`${API}/product/getFirstFour`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
  };

  return useQuery({
    queryKey: ["products3"],
    queryFn: fetchFirstFourProducts,
    staleTime: Infinity,
  });
};
