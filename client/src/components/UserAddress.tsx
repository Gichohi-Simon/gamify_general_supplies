"use client";

import React from "react";
import { useGetLogedInUserAddress } from "@/hooks/address";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

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
          <button className="bg-primary px-2 py-1 rounded-sm text-[10px] md:text-xs capitalize tracking-wider">
            Change address
          </button>
        </Link>
      </div>
      <div>
        <p className="text-xs md:text-sm lowercase">{user?.email}</p>
      </div>
      <div>
        <p className="text-xs md:text-sm mt-4 font-bold">ship to</p>
        <p className="text-xs md:text-sm capitalize">
          {data.address.city}, {data.address.street}, {data.address.companyName}
          , {data.address.floorNumber}, {data.address.postalCode}
        </p>
      </div>
    </div>
  );
}
