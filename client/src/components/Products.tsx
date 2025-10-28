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
      <div className="flex justify-center items-center mt-8 md:mt-10 mx-2 md:mx-0 py-2 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-10">
          {products?.map((catalog) => (
            <div key={catalog.name} className="px-2">
              <div className="md:w-72 flex flex-col items-center py-10 md:min-h-[200px] md:max-h-[450px] w-[240px] cursor-pointer">
               <Link href="/shop">
                 <Image
                  src={catalog.image}
                  alt={catalog.name}
                  height="96"
                  width="240"
                  className="rounded max-h-36 min-h-36 md:max-h-60 md:min-h-60 transform transition-transform duration-300 hover:rotate-6 hover:scale-105"
                />
               </Link>
                <div className="flex justify-between items-center gap-5 w-[240px]">
                  <div className="flex flex-col mt-4 md:mt-8">
                    <div>
                      <p className="text-sm line-clamp-1">{catalog.name}</p>
                    </div>
                    <div className="mt-1">
                      <p className="font-bold text-xs">
                        ksh {Number(catalog.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary p-2 rounded-full">
                    <Link href="/shop">
                      <EyeIcon className="size-4 md:size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <Link
          href="/shop"
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-2 rounded-full bg-primary flex justify-center items-center gap-2 w-24 md:w-32 hover:bg-secondary"
        >
          <p className="text-xs md:text-sm lowercase font-bold">Shop</p>
          <span>
            <ArrowRightCircleIcon className="size-5" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Products;
