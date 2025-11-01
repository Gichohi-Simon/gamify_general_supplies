const API = process.env.NEXT_PUBLIC_API_URL;

export const getLoggedInUserOrder = async () => {
  const response = await fetch(`${API}/order/get-current-user-orders`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("error fetching your orders");
  }
  return response.json();
};
