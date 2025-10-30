const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async () => {
  const response = await fetch(`${API}/product/all-products`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchFirstFourProducts = async () => {
  const response = await fetch(`${API}/product/getFirstFour`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const fetchSingleProduct = async (id: string) => {
  const response = await fetch(`${API}/product/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};
