"use client"

import React, { useState } from "react";
import { Catalog } from "@/utils/catalog";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

export default function RecentleyViewed() {
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});

  const handleCart = (productName: string) => {
    setClicked((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };
  return (
    <div className="mt-10 md:mt-20">
      <p className="font-semibold">Recentley viewed Products</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20 mt-6 md:mt-12">
        {Catalog.map((catalog) => (
          <div key={catalog.name}>
            <div className="flex flex-col items-center rounded-xl px-4 py-2">
              <Image
                src={catalog.image}
                alt={catalog.name}
                height="96"
                width="208"
                className="rounded min-h-36 md:min-h-52"
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
  );
}
