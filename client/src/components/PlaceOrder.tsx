"use client";

import React from "react";
import { useCreateOrder } from "@/hooks/order";
import { useAppSelector } from "@/store/hooks";
import { useGetLogedInUserAddress } from "@/hooks/address";
import Link from "next/link";

export default function PlaceOrder() {
  const { mutate, isPending, isError, isSuccess, error } = useCreateOrder();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data } = useGetLogedInUserAddress();

  const orderItems = cartItems.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
  }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      alert("your cart is empty");
      return;
    }
    mutate({ orderItems });
  };
  return (
    <div className="font-[family-name:var(--font-poppins)] my-6 md:my-12">
      {data?.address ? (
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            disabled={isPending}
            className="text-[10px] md:text-xs hover:bg-gray-700 bg-black text-white w-full rounded py-3 capitalize font-bold"
          >
            {isPending ? "Placing order..." : "Place Order"}
          </button>
        </form>
      ) : (
        <Link
          href="/createAddress"
          type="submit"
          className="block text-center text-[10px] md:text-xs hover:bg-gray-700 bg-black text-white w-full rounded py-3 capitalize font-bold"
        >
          create address before placing order
        </Link>
      )}

      {isError && (
        <p className="text-red-500 text-xs mt-2">
          {(error as Error).message || "Failed to place order"}
        </p>
      )}

      {isSuccess && (
        <p className="text-green-600 text-xs mt-2">
          Order placed successfully!
        </p>
      )}
    </div>
  );
}
