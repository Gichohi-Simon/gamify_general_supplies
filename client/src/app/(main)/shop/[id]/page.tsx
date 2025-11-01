"use client";

import React from "react";
import { useParams } from "next/navigation";

import { useGetSingleProduct } from "@/hooks/useProducts";
import Image from "next/image";

export default function SingleProduct() {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading, error } = useGetSingleProduct(id);

  if (isLoading) return <p>loading...</p>;

  if (error) return <p>error {error.message}</p>;

  return (
    <div className="md:flex gap-10 my-2 py-12 md:py-24 md:my-5 mx-10 md:mx-20 font-[family-name:var(--font-poppins)]">
      <div className="w-full md:w-1/2 ">
        <div className="relative w-[250px] h-[250px] md:w-[480px] md:h-[480px]">
          <Image
            src={data.singleProduct.image}
            alt={data.singleProduct.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-5 w-full md:w-1/2">
        <div>
          <h5 className="font-semibold text-xl md:text-4xl capitalize tracking-widest">
            {data.singleProduct.name}
          </h5>
          <h5 className="mt-2 md:mt-4 text-sm md:text-2xl font-semibold tracking-wider">
            Ksh {Number(data.singleProduct.price).toLocaleString()}
          </h5>
          <p className="text-[4px] md:text-xs font-semibold tracking-wider mt-[-2px] underline text-blue-500">
            price is exclusive of vat
          </p>
        </div>

        <div className="mt-2 md:mt-6">
          <h6 className="text-xs md:text-sm tracking-wider">
            select quantity
          </h6>
          <div className="mt-4">
            <span className="bg-gray-100 px-2 md:px-3 py-1 md:py-2 mr-4 cursor-pointer rounded-sm">
              -
            </span>
            <span className="text-xs md:text-sm">1</span>
            <span className="bg-gray-100 px-2 md:px-3 py-1 md:py-2 ml-4 cursor-pointer rounded-sm">
              +
            </span>
          </div>
        </div>

        <div className="mt-4">
          <button className="mt-4 md:mt-6 bg-black text-white hover:bg-primary hover:text-black w-full py-2 md:py-4 rounded-full text-[10px] md:text-base uppercase">
            Add to cart
          </button>
           <button className="mt-4 md:mt-6 bg-black text-white hover:bg-primary hover:text-black w-full py-2 md:py-4 rounded-full text-[10px] md:text-base uppercase">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
