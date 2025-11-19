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
    <div className="font-[family-name:var(--font-poppins)] py-24 md:py-40 overflow-x-hidden">
      <h1 className="text-center text-2xl md:text-3xl font-bold decoration-black capitalize tracking-wider">
        Our Products
      </h1>
      <div className="flex mt-6 py-4 md:py-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mx-[30px] md:mx-[60px]">
          {products?.map((catalog) => {
            const itemInCart = cartItems.some((item) => item.productId === catalog.id);

            return (
              <div
                key={catalog.id}
                className="flex flex-col border hover:border-primary rounded-xl px-4 py-3 shadow-md"
              >
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="bg-primary py-1 px-2 text-[10px] md:text-xs capitalize self-start rounded">
                      {catalog.category}
                    </span>
                  </div>
                  <div className="border border-1 border-black hover:bg-primary p-2 rounded-full">
                    <Link href={`/shop/${catalog.id}`}>
                      <EyeIcon className="size-2 md:size-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] aspect-[4/3] overflow-hidden rounded-lg cursor-pointer mx-auto mt-3">
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

                <div className="mt-4 text-start w-full">
                  <span className="text-sm font-bold tracking-wider line-clamp-1 capitalize block">
                    {catalog.name}
                  </span>
                  <span className="text-sm mt-1 block">
                    ksh {Number(catalog.price).toLocaleString()}
                  </span>
                </div>

                {itemInCart ? (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-xs bg-secondary px-4 py-2 rounded-full w-full mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() => dispatch(removeFromCart(catalog.id))}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") 
                    dispatch(removeFromCart(catalog.id ));
                  }}
                  >
                    remove from cart
                  </span>
                ) : (
                  <span
                    role="button"
                    tabIndex={0}
                    className="capitalize text-xs bg-primary px-4 py-2 rounded-full w-full mt-6 mb-3 flex justify-center items-center gap-2 font-bold cursor-pointer"
                    onClick={() => dispatch(addToCart({ productId: catalog.id, quantity }))}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") dispatch(addToCart({ productId: catalog.id, quantity })); }}
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
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 rounded-full bg-primary flex justify-center items-center gap-2 w-24 md:w-32 hover:bg-secondary"
        >
          <p className="text-xs md:text-sm lowercase font-bold">Shop</p>
          <ArrowRightCircleIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default Products;

