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

export const createOrder = async (values: CreateOrderRequest) => {
  const response = await fetch(`${API}/order/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.messsage || "Failed to create order");
  }
  return response.json();
};
