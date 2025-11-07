import { useQuery, useMutation } from "@tanstack/react-query";
import { getLoggedInUserOrder, createOrder } from "@/api/order.api";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/features/cartSlice";

export const useGetLoggedInUserOrder = () => {
  return useQuery({
    queryKey: ["userOrders"],
    queryFn: getLoggedInUserOrder,
  });
};

export const useCreateOrder = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn:createOrder,
    onSuccess: () => {
      dispatch(clearCart())
      router.push("/orders"); 
    },
  })
}
