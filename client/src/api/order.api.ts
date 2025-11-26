const API = process.env.NEXT_PUBLIC_API_URL;
import { OrderItemInput } from "@/types/types";
interface CreateOrderRequest {
  orderItems: OrderItemInput[];
}

export const getLoggedInUserOrder = async () => {
  const response = await fetch(`${API}/order/get-current-user-orders`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("error fetching your orders");
  }
  return await response.json();
};

export const getSingleOrderById = async (id: string) => {
  const response = await fetch(`${API}/order/get-user-order-by-id/${id}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("error fetching the order");
  }
  return await response.json();
};

export const createOrder = async (values: CreateOrderRequest) => {
  const response = await fetch(`${API}/order/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create order");
  }
  return response.json();
};
