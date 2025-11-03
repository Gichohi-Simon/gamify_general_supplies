"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart } from "@/store/features/cartSlice";
import { useCartProducts } from "@/hooks/useProducts";
import { postsInterface } from "@/types/types";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const ids = cartItems.map((item) => item.productId);

  const queryClient = useQueryClient();
  const cachedProducts = queryClient.getQueryData<{ products: postsInterface[] }>(["products"]);
  
  const { data: fetchedCartData, isLoading } = useCartProducts(ids);

  const products = useMemo(() => {
    const localProducts = cachedProducts?.products || [];

    const merged = cartItems.map((item) => {
      const local = localProducts.find((p) => p.id === item.productId);
      const fresh = fetchedCartData?.products?.find((p) => p.id === item.productId);
      const product = fresh || local;

      return product
        ? {
            ...product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity,
          }
        : null;
    });

    return merged.filter(Boolean) as Array<postsInterface & { quantity: number; subtotal: number }>;
  }, [cartItems, cachedProducts, fetchedCartData]);

  const subtotal = products.reduce((acc, p) => acc + p.subtotal, 0);
  const vat = subtotal * 0.16;
  const total = subtotal + vat;

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-sm md:text-base">
        <p>Loading your cart...</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center mt-20 text-sm md:text-base">
        <p>Your cart is empty 😢</p>
        <Link href="/shop" className="underline text-primary">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 lg:mx-72 my-5 md:my-10 lg:my-14">
     
      <div className="flex justify-between items-center">
        <span className="capitalize font-bold text-base md:text-3xl flex gap-2">
          <ShoppingCartIcon className="size-4 md:size-10" />
          <h4>Your Cart</h4>
        </span>

        <Link
          href="/shop"
          className="bg-primary py-2 px-3 rounded text-xs md:text-sm text-white cursor-pointer"
        >
          Continue Shopping
        </Link>
      </div>

     
      <div className="shadow-xl px-3 md:px-10 py-4 md:py-6 mt-6 rounded-lg">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 border-b pb-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="w-24 md:w-32 h-24 md:h-32 object-contain rounded-md"
              />
              <div className="flex-1">
                <p className="text-sm md:text-base font-semibold">{item.name}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs md:text-base font-semibold text-gray-700">
                    Ksh {item.price.toLocaleString()}
                  </p>
                  <TrashIcon
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="size-4 md:size-6 text-red-500 cursor-pointer hover:scale-110 transition"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full md:w-auto mt-4 md:mt-0">
              <p className="text-xs md:text-base">
                Quantity: <span className="font-semibold">{item.quantity}</span>
              </p>
              <p className="text-xs md:text-base font-semibold">
                Total: Ksh {item.subtotal.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="shadow-lg px-4 py-8 mt-10 rounded-lg">
        <h4 className="text-sm md:text-lg font-bold capitalize mb-6">Order Summary</h4>

        <div className="text-xs md:text-base flex justify-between mb-2">
          <h4 className="font-semibold">Subtotal</h4>
          <h4>Ksh {subtotal.toLocaleString()}</h4>
        </div>

        <div className="flex justify-between text-xs md:text-base mb-2">
          <h4 className="font-semibold">VAT (16%)</h4>
          <h4>Ksh {vat.toLocaleString()}</h4>
        </div>

        <div className="flex justify-between text-xs md:text-base font-semibold border-t pt-3 mt-4">
          <h4>Total</h4>
          <h4>Ksh {total.toLocaleString()}</h4>
        </div>

        <Link href="/checkout">
          <button className="w-full bg-secondary py-2 text-sm md:text-base rounded mt-8 text-white font-semibold hover:bg-secondary/80 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
