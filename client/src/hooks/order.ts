import { useQuery, useMutation } from "@tanstack/react-query";
import { getLoggedInUserOrder, createOrder } from "@/api/order.api";

export const useGetLoggedInUserOrder = () => {
  return useQuery({
    queryKey: ["userOrders"],
    queryFn: getLoggedInUserOrder,
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn:createOrder,
  })
}

