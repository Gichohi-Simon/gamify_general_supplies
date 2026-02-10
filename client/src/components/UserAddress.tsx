"use client";

import React from "react";
import { useGetLogedInUserAddress } from "@/hooks/address";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

export default function UserAddress() {
  const { data, isLoading, isError } = useGetLogedInUserAddress();
  const user = useAppSelector((state) => state.auth.userInfo);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const hasAddress = data?.address && Object.keys(data.address).length > 0;

  if (isError || !hasAddress) {
    return (
      <div className="font-[family-name:var(--font-poppins)] bg-gray-100 p-4">
        <p className="text-xs md:text-sm tracking-wider font-bold mb-2">
          No delivery address found
        </p>
        <Link href="/createAddress">
          <button className="bg-primary px-3 py-2 text-xs rounded-sm">
            Add address
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="font-[family-name:var(--font-poppins)] border border-1 px-4 py-4 rounded-lg">
      <div className="flex justify-between">
        <p className="text-xs md:text-sm tracking-wider font-bold capitalize">
          Customer Address
        </p>
        <Link href="/updateaddress">
          <span className="cursor-pointer flex justify-center items-center gap-1 group bg-primary py-2 pl-3 pr-2 rounded-md w-fit font-bold">
            <PencilSquareIcon className="size-3 md:size-4" />
            <p className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[50px] group-hover:opacity-100 transition-all duration-300 text-[10px] md:text-xs whitespace-nowrap">
              edit
            </p>
          </span>
        </Link>
      </div>
      <div>
        <p className="font-bold text-wider text-xs md:text-sm capitalize">
          email
        </p>
        <p className="text-xs md:text-sm lowercase">{user?.email}</p>
      </div>
      <div className="my-2">
        <p className="font-bold text-wider text-xs md:text-sm capitalize">
          phone number
        </p>
        <p className="text-xs md:text-sm lowercase">
          {data.address.phoneNumber}
        </p>
      </div>
      <div>
        <p className="text-xs md:text-sm mt-2 font-bold">ship to</p>
        <p className="text-xs md:text-sm capitalize">
          {data.address.city}, {data.address.street}, {data.address.companyName}
          , {data.address.floorNumber}, {data.address.postalCode}
        </p>
      </div>
    </div>
  );
}
