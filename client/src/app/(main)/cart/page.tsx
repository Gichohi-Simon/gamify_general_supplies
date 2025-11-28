"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/16/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCartProducts } from "@/hooks/useProducts";
import { postsInterface } from "@/types/types";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";
import EmptyCart from "@/components/EmptyCart";

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

  const handleIncrease = (productId: string, currentQty: number) => {
    dispatch(addToCart({ productId, quantity: currentQty + 1 }));
  };

  const handleDecrease = (productId: string, currentQty: number) => {
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
    return <EmptyCart />;
  }

  const handleManualQuantity = (productId: string, newQty: number) => {
    if (!newQty || newQty < 1) return;

    const action = dispatch(addToCart({ productId, quantity: newQty }));
    console.log(action);
  };

  return (
    <div className="font-[family-name:var(--font-poppins)] mx-[30px] md:mx-[60px] my-3 md:my-5 min-h-screen">
      <div className="flex justify-between items-center">
        <h4 className="text-lg md:text-xl font-bold capitalize">My Cart</h4>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-4 md:mt-6">
        <div className="w-full lg:w-3/4">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full text-xs md:text-sm text-left border-collapse table-auto border border-1">
              <thead className="bg-primary">
                <tr>
                  <th className="px-4 py-3 text-left text-[10px] md:text-xs font-semibold">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-[10px] md:text-xs font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-3 text-center text-[10px] md:text-xs font-semibold">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-right text-[10px] md:text-xs font-semibold">
                    Subtotal
                  </th>
                  <th className="px-4 py-3 text-center text-[10px] md:text-xs font-semibold">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((item) => (
                  <tr key={item.id} className="transition">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-5 md:gap-8 py-1 md:py-2">
                        <Image
                          src={item.images[0]}
                          width={80}
                          height={80}
                          alt={item.name}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold capitalize text-gray-800 break-words text-[10px] md:text-xs tracking-wider">
                            {item.name}
                          </p>
                          <span className="text-[10px] md:text-xs tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700 whitespace-nowrap align-middle text-xs md:text-sm">
                      Ksh {item.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-center whitespace-nowrap align-middle">
                      <div className="flex justify-center items-center gap-2 py-1">
                        <button
                          onClick={() =>
                            handleDecrease(item.id!, item.quantity)
                          }
                          className="border rounded-full p-1 hover:bg-gray-100"
                        >
                          <MinusIcon className="size-2 md:size-3" />
                        </button>
                        <input
                          type="number"
                          min={1}
                          className="w-12 md:w-14 text-center border rounded-md text-[10px] md:text-xs"
                          value={item.quantity}
                          onChange={(e) =>
                            handleManualQuantity(
                              item.id!,
                              Number(e.target.value)
                            )
                          }
                        />
                        <button
                          onClick={() =>
                            handleIncrease(item.id!, item.quantity)
                          }
                          className="border rounded-full p-1 hover:bg-gray-100"
                        >
                          <PlusIcon className="size-2 md:size-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-semibold text-gray-800 whitespace-nowrap align-middle text-xs md:text-sm">
                      Ksh {item.subtotal.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-center align-middle">
                      <TrashIcon
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="size-3 md:size-4 text-red-500 cursor-pointer hover:scale-110 transition"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="px-4 py-8 overflow-x-auto bg-gray-100 rounded-lg">
            <table className="min-w-full text-xs md:text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100 font-bold">
                  <td className="px-4 py-3 font-semibold text-[10px] md:text-xs">
                    Subtotal
                  </td>
                  <td className="px-4 py-3 text-right text-xs md:text-sm">
                    Ksh {subtotal.toLocaleString()}
                  </td>
                </tr>
                <tr className="border-b border-gray-100 font-bold">
                  <td className="px-4 py-3 font-semibold text-[10px] md:text-xs">
                    VAT (16%)
                  </td>
                  <td className="px-4 py-3 text-right text-[10px] md:text-xs">
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

            <Link href="/checkout">
              <button className="w-full bg-primary py-2 text-[10px] md:text-xs rounded-full mt-8 font-semibold hover:bg-primary/80 transition cursor-pointer">
                Proceed to Checkout
              </button>
            </Link>

            <Link href="/shop">
              <button className="bg-primary py-2 px-3 rounded-full text-[10px] md:text-xs cursor-pointer font-semibold hover:bg-primary/80 transition w-full mt-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
