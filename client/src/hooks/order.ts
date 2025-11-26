import { useQuery, useMutation } from "@tanstack/react-query";
import { getLoggedInUserOrder, createOrder, getSingleOrderById } from "@/api/order.api";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/features/cartSlice";

export const useGetLoggedInUserOrder = () => {
  return useQuery({
    queryKey: ["userOrders"],
    queryFn: getLoggedInUserOrder,
  });
};

export const useGetOrderById = (id:string) => {
  return useQuery({
    queryKey:["singleOrder", id],
    queryFn: () => getSingleOrderById(id),
    enabled: !!id,
    staleTime: Infinity,
  })
}

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
