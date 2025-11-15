"use client";

import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { postsInterface } from "@/types/types";

interface FirstThreeProducts {
  products: postsInterface[];
}

const Products = ({ products }: FirstThreeProducts) => {
  return (
    <div className="font-[family-name:var(--font-poppins)] py-24 md:py-40 overflow-x-hidden">
      <h1 className="text-center text-base md:text-xl font-bold underline underline-offset-8 decoration-black capitalize tracking-wider">
        Our Products
      </h1>
      <h6 className="text-center mt-5 md:mt-6 text-sm capitalize">
        Find reliable warehouse supplies that keep your operations running
        smoothly.
      </h6>

      <div className="flex justify-center items-center mt-6 px-2 md:px-0 py-2 md:py-6">
        <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mx-4">
          {products?.map((catalog) => (
            <div key={catalog.name} className="flex flex-col items-center border hover:border-primary rounded-lg px-4 py-3 shadow-md">
              <span className="bg-primary py-1 px-2 text-[10px] md:text-xs capitalize self-start rounded">
                {catalog.category}
              </span>

              <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] aspect-[4/3] overflow-hidden rounded-lg cursor-pointer">
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

              <div className="flex justify-between items-center gap-5 w-full max-w-xs mt-4">
                <div className="flex flex-col">
                  <p className="text-sm line-clamp-1 capitalize">
                    {catalog.name}
                  </p>
                  <p className="font-bold text-xs mt-1">
                    ksh {Number(catalog.price).toLocaleString()}
                  </p>
                </div>
                <div className="bg-secondary hover:bg-primary p-2 rounded-full">
                  <Link href={`/shop/${catalog.id}`}>
                    <EyeIcon className="size-4 md:size-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
