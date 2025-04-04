import Image from "next/image";
import React from "react";
import { FullCatalog } from "@/utils/fullcatalog";
import Search from "./Search";
import Categories from "./Categories";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const MainProducts = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] my-8 md:my-20 overflow-x-hidden">
      <div className="flex mx-40 justify-between items-center">
        <Categories />
        <Search />
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-12 mx-2 md:mx-0 py-2 md:py-6">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20">
          {FullCatalog.map((catalog) => (
            <div key={catalog.name}>
              <div className="w-44 md:w-72 flex flex-col items-center rounded-xl border border-1 elevation-1 shadow-xl px-4 py-2 min-h-[450px] max-h-[450px]">
                <Image
                  src={catalog.image}
                  alt={catalog.name}
                  height="96"
                  width="288"
                  className="rounded max-h-36 md:max-h-60"
                />
                <div className="mt-auto flex flex-col">
                  <div className="text-sm">
                    <p className="font-bold">{catalog.name}</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold">kes {catalog.price}</p>
                  </div>
                </div>
                <div className="mt-auto">
                 
                  <button className="bg-primary hover:bg-secondary text-xs px-6 py-3 rounded-full mt-4 mb-5 flex justify-between items-center gap-2">
                  <span>
                    <ShoppingCartIcon className="size-6"/>
                  </span>
                    Add to cart
                  </button>
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
