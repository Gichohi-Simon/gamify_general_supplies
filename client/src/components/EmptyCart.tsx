import React from "react";
import Link from "next/link";

import { ShoppingBagIcon } from "@heroicons/react/20/solid";

export default function EmptyCart() {
  return (
    <div>
      <div className="font-[family-name:var(--font-poppins)] text-center mt-20 text-sm md:text-base min-h-screen flex flex-col justify-start items-center px-5 md:px-10">
        <span>
          <ShoppingBagIcon className="size-12 md:size-24 text-primary" />
        </span>
        <p className="text-xl md:text-2xl capitalize font-bold mt-4 md:mt-5 text-wider">
          Your cart is empty 😢
        </p>
        <p className="text-sm mt-4 md:mt-5">
          Looks like you haven’t added anything yet. <br /> Start exploring our
          products and fill your cart with everything you need!
        </p>
        <Link
          href="/shop"
          className="bg-primary mt-5 md:mt-7 text-xs px-3 py-2 rounded-full hover:bg-secondary"
        >
          Start shopping
        </Link>
      </div>
    </div>
  );
}
