import { useQuery } from "@tanstack/react-query";
import { getLoggedInUserOrder } from "@/api/order.api";

export const useGetLoggedInUserOrder = () => {
  return useQuery({
    queryKey: ["userOrders"],
    queryFn: getLoggedInUserOrder,
  });
};
