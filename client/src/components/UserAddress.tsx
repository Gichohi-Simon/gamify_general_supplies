"use client";

import React from "react";
import { useGetLogedInUserAddress } from "@/hooks/address";
import Link from "next/link";

export default function UserAddress() {
  const { data, isLoading, isError } = useGetLogedInUserAddress();

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
    <div className="font-[family-name:var(--font-poppins)] bg-gray-100 p-4 rounded-lg">
      <p className="text-xs md:text-sm tracking-wider font-bold mb-2">
        Delivery Address
      </p>
      <div className="md:flex justify-between">
        <div>
          {[
            { label: "City", value: data.address.city },
            { label: "Company", value: data.address.companyName },
            { label: "Floor Number", value: data.address.floorNumber },
            { label: "Postal Code", value: data.address.postalCode },
            { label: "Street", value: data.address.street },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-2 items-center mt-1">
              <span className="text-xs md:text-sm font-semibold tracking-wider lowercase">
                {label}
              </span>
              <span className="text-xs md:text-sm capitalize tracking-wider">
                {value || "-"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/updateaddress">
            <button className="bg-primary px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-xs rounded-sm">
              Change address
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
