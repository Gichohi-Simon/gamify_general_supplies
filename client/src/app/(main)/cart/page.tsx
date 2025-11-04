"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/16/solid";
import {
  ShoppingCartIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCartProducts } from "@/hooks/useProducts";
import { postsInterface } from "@/types/types";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const queryClient = useQueryClient();

  const ids = cartItems.map((item) => item.productId);

  const cachedProducts = queryClient.getQueryData<{
    products: postsInterface[];
  }>(["products"]);

  const { data: fetchedCartData, isLoading } = useCartProducts(ids);

  const products = useMemo(() => {
    const localProducts = cachedProducts?.products || [];
    const merged = cartItems.map((item) => {
      const local = localProducts.find((p) => p.id === item.productId);
      const fresh = fetchedCartData?.products?.find(
        (p) => p.id === item.productId
      );
      const product = fresh || local;
      if (!product || product.id === undefined) return null;
      return {
        ...product,
        quantity: item.quantity,
        subtotal: product.price * item.quantity,
      };
    });
    return merged.filter(Boolean) as Array<
      postsInterface & { quantity: number; subtotal: number }
    >;
  }, [cartItems, cachedProducts, fetchedCartData]);

  const subtotal = products.reduce((acc, p) => acc + p.subtotal, 0);
  const vat = subtotal * 0.16;
  const total = subtotal + vat;

  const handleIncrease = (productId: number, currentQty: number) => {
    dispatch(addToCart({ productId, quantity: currentQty + 1 }));
  };

  const handleDecrease = (productId: number, currentQty: number) => {
    if (currentQty <= 1) return;
    dispatch(addToCart({ productId, quantity: currentQty - 1 }));
  };

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-sm md:text-base">
        <p>Loading your cart...</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="font-[family-name:var(--font-poppins)] text-center mt-20 text-sm md:text-base h-screen flex flex-col items-center">
        <p className="text-xl md:text-3xl capitalize font-bold">
          Your cart is empty 😢
        </p>
        <Link
          href="/shop"
          className="underline underline-offset-8 font-bold text-secondary mt-4 hover:text-primary"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="font-[family-name:var(--font-poppins)] mx-4 md:mx-8 my-5 md:my-10 lg:my-14 h-screen">
      <div className="flex justify-between items-center mb-6 px-2 md:px-3">
        <span className="capitalize flex items-center gap-2">
          <ShoppingCartIcon className="size-4 md:size-6" />
          <h4 className="text-sm md:text-base font-bold">Your Cart</h4>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
        <div className="w-full lg:w-3/4 px-2 md:px-3 py-4">
          <div className="overflow-x-auto shadow-md rounded-lg border border-gray-100">
            <table className="min-w-full text-xs md:text-sm text-left border-collapse table-auto">
              <thead className="bg-gray-50 text-gray-600 uppercase text-[10px] md:text-xs border-b">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">Product</th>
                  <th className="px-4 py-3 whitespace-nowrap">Price</th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-right whitespace-nowrap">
                    Subtotal
                  </th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          width={80}
                          height={80}
                          alt={item.name}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-800 break-words text-xs md:text-sm">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700 whitespace-nowrap align-middle text-xs md:text-sm">
                      Ksh {item.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-center whitespace-nowrap align-middle">
                      <div className="flex justify-center items-center gap-2">
                        <button
                          onClick={() =>
                            handleDecrease(item.id!, item.quantity)
                          }
                          className="border rounded p-1 hover:bg-gray-100"
                        >
                          <MinusIcon className="size-3 md:size-4" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleIncrease(item.id!, item.quantity)
                          }
                          className="border rounded p-1 hover:bg-gray-100"
                        >
                          <PlusIcon className="size-3 md:size-4" />
                        </button>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-right font-semibold text-gray-800 whitespace-nowrap align-middle">
                      Ksh {item.subtotal.toLocaleString()}
                    </td>

                    <td className="px-4 py-4 text-center align-middle">
                      <TrashIcon
                        onClick={() => dispatch(removeFromCart(item.id!))}
                        className="size-5 text-red-500 cursor-pointer hover:scale-110 transition"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="px-4 py-8 border rounded-lg shadow-md overflow-x-auto">
            <h4 className="text-xs md:text-sm font-bold capitalize mb-6">
              Order Summary
            </h4>

            <table className="min-w-full text-xs md:text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 font-bold">
                  <td className="px-4 py-3 font-semibold text-xs">Subtotal</td>
                  <td className="px-4 py-3 text-right text-xs md:text-sm">
                    Ksh {subtotal.toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-gray-100 font-bold">
                  <td className="px-4 py-3 font-semibold text-xs">VAT (16%)</td>
                  <td className="px-4 py-3 text-right text-xs md:text-sm">
                    Ksh {vat.toLocaleString()}
                  </td>
                </tr>
                <tr className="border-t border-gray-200 font-bold">
                  <td className="px-4 py-3 text-xs">Total</td>
                  <td className="px-4 py-3 text-right text-xs md:text-sm">
                    Ksh {total.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>

            <Link href="/checkout">
              <button className="w-full bg-secondary py-2 text-[10px] md:text-xs rounded mt-8 font-semibold hover:bg-secondary/80 transition">
                Proceed to Checkout
              </button>
            </Link>

            <Link href="/shop">
              <button className="bg-primary py-2 px-3 rounded text-[10px] md:text-xs cursor-pointer font-semibold hover:bg-primary/80 transition w-full mt-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
