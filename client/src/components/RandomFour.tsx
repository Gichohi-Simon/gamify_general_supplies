"use client";

import React from "react";
import { useGetRandomFourProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { PlusCircleIcon, EyeIcon } from "@heroicons/react/24/outline";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function RandomFour() {
  const dispatch = useAppDispatch();
  const quantity = 1;
  const cartItems = useAppSelector((state) => state.cart.items);

  const { data, isLoading, error } = useGetRandomFourProducts();
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <div>
      <p className="my-4 md:my-6 capitalize tracking-wider font-bold text-sm md:text-xl">
        you may also like
      </p>
      <div className="flex">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {data?.products?.map((catalog) => {
            const itemInCart = cartItems.some(
              (item) => item.productId === catalog.id
            );

            return (
              <div
                key={catalog.id}
                className="flex flex-col border hover:border-primary rounded-xl px-4 py-3 shadow-md"
              >
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="bg-primary py-1 px-2 text-[8px] md:text-[10px] capitalize self-start rounded">
                      {catalog.category}
                    </span>
                  </div>
                  <div className="border border-1 border-black hover:bg-primary p-2 rounded-full">
                    <Link href={`/shop/${catalog.id}`}>
                      <EyeIcon className="size-2 md:size-3" />
                    </Link>
                  </div>
                </div>

                <div className="relative w-full max-w-[80px] md:max-w-[100px] h-20 md:h-32 overflow-hidden rounded-lg cursor-pointer mx-auto mt-3">
                  <Link href={`/shop/${catalog.id}`}>
                    <Image
                      src={catalog.images[0]}
                      alt={catalog.name}
                      fill
                      className="object-contain transform transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
                    />
                  </Link>
                </div>

                <div className="text-start w-full">
                  <span className="text-[10px] md:text-xs font-bold tracking-wider line-clamp-1 capitalize block">
                    {catalog.name}
                  </span>
                  <span className="text-[10px] md:text-xs mt-1 block">
                    ksh {Number(catalog.price).toLocaleString()}
                  </span>
                </div>

                {itemInCart ? (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-[10px] bg-secondary px-4 py-2 rounded-full w-full mt-3 md:mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() => dispatch(removeFromCart(catalog.id))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        dispatch(removeFromCart(catalog.id));
                    }}
                  >
                    remove from cart
                  </span>
                ) : (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-[10px] bg-primary px-4 py-2 rounded-full w-full mt-3 md:mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() =>
                      dispatch(addToCart({ productId: catalog.id, quantity }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        dispatch(
                          addToCart({ productId: catalog.id, quantity })
                        );
                    }}
                  >
                    <PlusCircleIcon className="size-4" /> add to cart
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

