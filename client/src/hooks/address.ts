import {
  getLoggedInUserAddress,
  createDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliverAddress,
} from "@/api/address.api";
import { Address, UserAddressResponse, DeleteResponse } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetLogedInUserAddress = () => {
  return useQuery<UserAddressResponse>({
    queryKey: ["address"],
    queryFn: getLoggedInUserAddress,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useCreateDeliveryAddress = () => {
  return useMutation<UserAddressResponse, Error, Address>({
    mutationFn: createDeliveryAddress,
  });
};

export const useUpdateDeliverAddress = () => {
  return useMutation<UserAddressResponse, Error, Address>({
    mutationFn: updateDeliveryAddress,
  });
};

export const useDeleteDeliveryAddress = () => {
  return useMutation<DeleteResponse, Error, void>({
    mutationFn: deleteDeliverAddress,
  });
};
