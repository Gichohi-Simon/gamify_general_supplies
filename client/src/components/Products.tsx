"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon, PlusCircleIcon, EyeIcon } from "@heroicons/react/24/outline";
import { postsInterface } from "@/types/types";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface FirstThreeProducts {
  products: postsInterface[];
}

const Products = ({ products }: FirstThreeProducts) => {
  const dispatch = useAppDispatch();
  const quantity = 1;
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="font-[family-name:var(--font-poppins)] py-16 md:py-28 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-3xl font-bold decoration-black capitalize tracking-wider">
        Our Products
      </h1>

      <div className="flex mt-6 py-4 md:py-8">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mx-[30px] md:mx-[60px]">
          {products?.map((catalog) => {
            const itemInCart = cartItems.some((item) => item.productId === catalog.id);

            return (
              <div
                key={catalog.id}
                className="flex flex-col border hover:border-primary rounded-xl px-4 py-3 shadow-md"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="bg-primary py-1 px-2 text-[8px] md:text-[10px] capitalize rounded">
                    {catalog.category}
                  </span>

                  <Link
                    href={`/shop/${catalog.id}`}
                    className="border border-black hover:bg-primary p-2 rounded-full"
                  >
                    <EyeIcon className="size-2 md:size-3" />
                  </Link>
                </div>

                <div className="relative w-full max-w-[80px] md:max-w-[140px] h-20 md:h-44 overflow-hidden rounded-lg cursor-pointer mx-auto mt-3">
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
                  <span className="text-xs md:text-sm font-bold tracking-wider line-clamp-1 capitalize block">
                    {catalog.name}
                  </span>
                  <span className="text-xs md:text-sm mt-1 block">
                    ksh {Number(catalog.price).toLocaleString()}
                  </span>
                </div>

                {itemInCart ? (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-[8px] bg-secondary px-4 py-2 rounded-full w-full mt-3 md:mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() => dispatch(removeFromCart(catalog.id))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") dispatch(removeFromCart(catalog.id));
                    }}
                  >
                    remove from cart
                  </span>
                ) : (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-[10px] md:text-xs bg-primary px-4 py-2 rounded-full w-full mt-3 md:mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() => dispatch(addToCart({ productId: catalog.id, quantity }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") dispatch(addToCart({ productId: catalog.id, quantity }));
                    }}
                  >
                    <PlusCircleIcon className="size-5" /> add to cart
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="/shop"
          className="mt-6 md:mt-10 px-2 py-1 rounded-full bg-primary flex justify-center items-center gap-2 w-24 md:w-28 hover:bg-secondary"
        >
          <p className="text-[10px] md:text-xs lowercase font-bold">Shop</p>
          <ArrowRightCircleIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
