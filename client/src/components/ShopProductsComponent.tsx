import React from "react";

import { postsInterface } from "@/types/types";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface AllPosts {
  products: postsInterface[];
}

export default function ShopProductsComponent({ products }: AllPosts) {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-20 md:pb-20 pt-5 md:pt-10 mx-[30px] md:mx-[60px]">
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
    </div>
  );
}
