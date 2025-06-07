"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { postsInterface } from "@/types/types";

 interface FirstThreeProducts {
    products:postsInterface[] 
  }

const Products = ({products}:FirstThreeProducts) => {
 

  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});

  const handleCart = (productName: string) => {
    setClicked((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  
  return (
    <div className="font-[family-name:var(--font-poppins)] my-8 md:my-20 overflow-x-hidden">
      <div className="md:flex mx-10 md:mx-40 justify-between">
        <h1 className="text-center text-xl md:text-3xl font-bold text-secondary">
          Our Products
        </h1>
        <div className="text-center mt-4">
          <Link href="/shop">
            <button className="px-3 py-2 md:px-8 md:py-4 hover:bg-secondary text-sm rounded-full bg-primary">
              see more
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-12 mx-2 md:mx-0 py-2 md:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20">
          {products?.map((catalog) => (
            <div key={catalog.name}>
              <div className="w-44 md:w-72 flex flex-col items-center rounded-xl border border-1 elevation-1 shadow-xl px-4 py-2 md:min-h-[450px] md:max-h-[450px]">
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
                {clicked[catalog.name] ? (
                  <button
                    className="bg-red-500 text-xs px-6 py-3 rounded-full mt-4 mb-5 flex justify-between items-center gap-2"
                    onClick={() => handleCart(catalog.name)}
                  >
                    <span>
                      <ShoppingCartIcon className="size-4 md:size-6" />
                    </span>
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="bg-primary hover:bg-secondary text-xs px-6 py-3 rounded-full mt-4 mb-5 flex justify-between items-center gap-2"
                    onClick={() => handleCart(catalog.name)}
                  >
                    <span>
                      <ShoppingCartIcon className="size-4 md:size-6" />
                    </span>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
