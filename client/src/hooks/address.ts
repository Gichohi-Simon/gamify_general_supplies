import {
  getLoggedInUserAddress,
  createDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliverAddress,
} from "@/api/address.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetLogedInUserAddress = () => {
  return useQuery({
    queryKey: ["address"],
    queryFn: getLoggedInUserAddress,
  });
};

export const useCreateDeliveryAddress = () => {
  return useMutation({
    mutationFn: createDeliveryAddress,
  });
};

export const useUpdateDeliverAddress = () => {
  return useMutation({
    mutationFn: updateDeliveryAddress,
  });
};

export const useDeleteDeliveryAddress = () => {
  return useMutation({
    mutationFn: deleteDeliverAddress,
  });
};
