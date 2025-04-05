import React from "react";
import { Catalog } from "@/utils/catalog";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/16/solid";

export default function CartPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 lg:mx-72 my-5 md:my-10 lg:my-14">
      <h4 className="capitalize font-bold text-base md:text-3xl mb-5 md:mb-10 ">your cart</h4>
    <div className="elevation-2 shadow-xl px-2 md:px-10 py-2 md:py-6">
    {Catalog.map((item) => (
        <div
          key={item.name}
          className="flex flex-col justify-between mt-4 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <div className="mt-6">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="w-24 md:w-40 h-24 md:h-40"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold md:text-base">{item.name} </p>
              <div className="flex items-center justify-between mt-4 w-full">
                <p className="text-xs md:text-base">KES {item.price}</p>
                <TrashIcon className="size-4 md:size-6 font-semibold text-red-500 cursor-pointer"/>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-1 mt-6 md:mt-10 px-2 md:px-10 items-center">
              <div className="flex gap-2 md:gap-4 items-center">
                <p className="text-xs md:text-base">quantity{" "}</p>
                <span className="px-2 md:px-3 py-1 md:py-2 rounded bg-gray-200 cursor-pointer">-</span>
               <span className="text-xs md:text-base">2</span>
                <span className="px-2 md:px-3 py-1 md:py-2 rounded bg-gray-200 cursor-pointer">+</span>
              </div>
              <span className="text-xs md:text-base px-2 py-1 rounded font-bold lowercase">
                Total{" "}<span>{item.price * 2}</span>
              </span>
            </div>
        </div>
      ))}
    </div>

      <div className="elevation-2 shadow-lg px-4 py-10 mt-10">
          <h4 className="text-sm md:text-lg font-bold capitalize mb-10">summary</h4>
          <div className="text-xs md:text-base flex justify-between">
              <h4 className="font-semibold">subtotal</h4>
              <h4>KES 15,000</h4>
          </div>
       
         <div className="flex justify-between text-xs md:text-base mt-2">
            <h4 className="font-semibold">VAT 16%</h4>
            <h4>1500</h4>
          </div>

          <div className="flex justify-between text-xs md:text-base mt-2">
            <h4 className="font-semibold">Total</h4>
            <h4>KES 15,500</h4>
          </div>
      
          <button className="w-full bg-secondary py-1 text-sm rounded mt-10 md:text-base">checkout</button>
      </div>
    </div>
  );
}
