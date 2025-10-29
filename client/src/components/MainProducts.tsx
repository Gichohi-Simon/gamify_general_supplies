"use client";

import Image from "next/image";
// import { useEffect } from "react";
// import { FullCatalog } from "@/utils/fullcatalog";
import Search from "./Search";
import { postsInterface } from "@/types/types";
// import { setProducts } from "@/store/features/productsSlice";
// import { useAppDispatch } from "@/store/hooks";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/16/solid";
import Categories from "./Categories";

interface AllPosts {
  products: postsInterface[];
}

const MainProducts = ({ products }: AllPosts) => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(
  //     setProducts({
  //       products,
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div className="font-[family-name:var(--font-poppins)] my-2 md:my-5 overflow-x-hidden">
      <p className="text-center text-sm md:text-base my-3 md:my-6">
        Get the right tools, equipment, and supplies to keep your warehouse
        running smoothly. Quality you can count on, delivered when you need it.
      </p>
      <div className="w-full px-8 md:px-20 md:flex justify-between items-center">
        <Search />
        <Categories />
      </div>

      <div className="mt-8 md:mt-10 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-10 mx-auto max-w-7xl justify-items-center">
          {products?.map((catalog) => (
            <div key={catalog.name}>
              <div className="md:w-72 flex flex-col items-center py-6 md:py-10 md:min-h-[200px] md:max-h-[450px] w-[240px] cursor-pointer">
                <Link href="/shop">
                  <Image
                    src={catalog.image}
                    alt={catalog.name}
                    height="96"
                    width="240"
                    className="rounded max-h-36 min-h-36 md:max-h-60 md:min-h-60 transform transition-transform duration-300 hover:rotate-6 hover:scale-105"
                  />
                </Link>
                <div className="flex justify-between items-center w-[240px]">
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
    </div>
  );
};

export default MainProducts;
