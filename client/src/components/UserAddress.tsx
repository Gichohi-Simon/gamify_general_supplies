"use client";

import React from "react";
import { useGetLogedInUserAddress } from "@/hooks/address";
import Link from "next/link";

export default function UserAddress() {
  const { data, isLoading, error } = useGetLogedInUserAddress();

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    console.error("get logged in error", error.message);
  }
  return (
    <div className="font-[family-name:var(--font-poppins)] bg-gray-100 p-4">
      <p className="text-xs md:text-sm tracking-wider font-bold mb-2">Delivery Address</p>
      <div className="md:flex justify-between">
        <div>
        <div className="flex gap-2 items-center mt-0 md:mt-1">
          <span className="text-xs md:text-sm font-semibold tracking-widers">city</span>
          <span className="text-xs md:text-sm capitalize tracking-wider">
            {data?.address.city}
          </span>
        </div>
        <div className="flex gap-2 items-center mt-0 md:mt-1">
          <span className="text-xs md:text-sm font-semibold tracking-widers">company</span>
          <span className="text-xs md:text-sm capitalize tracking-wider">
            {data?.address.companyName}
          </span>
        </div>
        <div className="flex gap-2 items-center mt-0 md:mt-1">
          <span className="text-xs md:text-sm font-semibold tracking-widers">
            floor number
          </span>
          <span className="text-xs md:text-sm capitalize tracking-wider">
            {data?.address.floorNumber}
          </span>
        </div>
        <div className="flex gap-2 items-center mt-0 md:mt-1">
          <span className="text-xs md:text-sm font-semibold tracking-widers">
            postal code
          </span>
          <span className="text-xs md:text-sm capitalize tracking-wider">
            {data?.address.postalCode}
          </span>
        </div>
        <div className="flex gap-2 items-center mt-0 md:mt-1">
          <span className="text-xs md:text-sm font-semibold tracking-widers">street</span>
          <span className="text-xs md:text-sm capitalize tracking-wider">
            {data?.address.street}
          </span>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Link href="/updateaddress">
          <button className="bg-primary px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-xs rounded-sm">
            change address
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}
