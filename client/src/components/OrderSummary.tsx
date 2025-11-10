"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useCartProducts } from "@/hooks/useProducts";
import { postsInterface } from "@/types/types";

export default function OrderSummary() {
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

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-sm md:text-base">
        <p>Loading your order summary...</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="font-[family-name:var(--font-poppins)] text-center mt-20 text-sm md:text-base h-screen flex flex-col items-center">
        <p className="text-xl md:text-3xl capitalize font-bold">
          No items found in your order 😢
        </p>
      </div>
    );
  }

  return (
    <div className="font-[family-name:var(--font-poppins)]  mt-6 md:mt-0">
      <div className="overflow-x-auto rounded-lg border border-gray-100 mb-8">
        <table className="min-w-full text-sm md:text-xs text-left border-collapse table-auto">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs border-b">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap">Product</th>
              <th className="px-4 py-3 whitespace-nowrap">Price</th>
              <th className="px-4 py-3 text-center whitespace-nowrap">
                Quantity
              </th>
              <th className="px-4 py-3 text-right whitespace-nowrap">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((item) => (
              <tr key={item.id}>
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
                      <p className=" text-gray-800 break-words text-xs md:text-sm">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-700 whitespace-nowrap align-middle text-xs md:text-sm">
                  Ksh {item.price.toLocaleString()}
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap align-middle text-xs md:text-sm">
                  {item.quantity}
                </td>
                <td className="px-4 py-4 text-right font-bold text-gray-800 whitespace-nowrap align-middle text-xs md:text-sm">
                  Ksh {item.subtotal.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-6 border rounded-lg w-full ml-auto">
        <table className="min-w-full text-xs md:text-sm text-left border-collapse">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 text-[10px] md:text-xs">Subtotal</td>
              <td className="px-4 py-3 text-right text-xs md:text-sm">
                Ksh {subtotal.toLocaleString()}
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 text-[10px] md:text-xs">VAT (16%)</td>
              <td className="px-4 py-3 text-right text-xs md:text-sm">
                Ksh {vat.toLocaleString()}
              </td>
            </tr>
            <tr className="border-t border-gray-200 font-bold">
              <td className="px-4 py-3 text-[10px] md:text-xs">Total</td>
              <td className="px-4 py-3 text-right text-xs md:text-sm">
                Ksh {total.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
