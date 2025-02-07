"use client";

import React from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  return (
    <Popover className="h-14 flex justify-between items-center px-2 md:px-5 py-10 font-[family-name:var(--font-poppins)] font-bold bg-primary">
      <div className="text-base md:text-2xl">
        <h1>Gamify General Supplies</h1>
      </div>
      <div className="hidden md:block">
        <Link
          href="/"
          className="text-base mr-2 capitalize hover:text-secondary"
        >
          home
        </Link>
        <Link
          href="/products"
          className="text-base capitalize hover:text-secondary"
        >
          Products
        </Link>
      </div>
      <div className="block md:hidden">
        <PopoverButton>☰</PopoverButton>
      </div>
      <PopoverPanel
        className="absolute block inset-x-0 md:hidden bg-secondary px-2 py-5 rounded mt-14 w-40"
        anchor="bottom"
      >
        <PopoverButton>⛌</PopoverButton>
        <div className="flex flex-col mt-4">
          <Link
            href="/"
            className="text-base mr-2 capitalize hover:text-secondary"
          >
            home
          </Link>
          <Link
            href="/products"
            className="text-base capitalize mt-4 hover:text-secondary"
          >
            products
          </Link>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Header;
