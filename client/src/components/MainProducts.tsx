"use client";

import Image from "next/image";
import Search from "./Search";
import { postsInterface } from "@/types/types";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/16/solid";
import Categories from "./Categories";

interface AllPosts {
  products: postsInterface[];
}

const MainProducts = ({ products }: AllPosts) => {
  return (
    <div className="font-[family-name:var(--font-poppins)] overflow-x-hidden h-screen">
      <div
        className="relative bg-primary py-10 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/warehouse.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        <div className="relative z-10 text-center text-white">
          <p className="text-sm md:text-base my-3 md:my-6 max-w-2xl mx-auto text-primary font-bold">
            Get the right tools, equipment, and supplies to keep your warehouse
            running smoothly. Quality you can count on, delivered when you need
            it.
          </p>
        </div>
      </div>

      <div className="w-full px-8 md:px-20 md:flex justify-between items-center mt-6">
        <Search />
        <Categories />
      </div>

      <div className="mt-8 md:mt-10 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-10 mx-auto max-w-7xl justify-items-center">
          {products?.map((catalog) => (
            <div
              key={catalog.name}
              className="md:w-72 flex flex-col items-center py-6 md:py-10 md:min-h-[200px] md:max-h-[450px] w-[240px] cursor-pointer"
            >
              <Link href={`/shop/${catalog.id}`}>
                <Image
                  src={catalog.image}
                  alt={catalog.name}
                  height={240}
                  width={240}
                  className="rounded max-h-36 min-h-36 md:max-h-60 md:min-h-60 transform transition-transform duration-300 hover:rotate-6 hover:scale-105"
                />
              </Link>
              <div className="flex justify-between items-center w-[240px]">
                <div className="flex flex-col mt-4 md:mt-8">
                  <p className="text-sm line-clamp-1">{catalog.name}</p>
                  <p className="font-bold text-xs mt-1">
                    ksh {Number(catalog.price).toLocaleString()}
                  </p>
                </div>
                <div className="bg-primary p-2 rounded-full">
                  <Link href={`/shop/${catalog.id}`}>
                    <EyeIcon className="size-4 md:size-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
