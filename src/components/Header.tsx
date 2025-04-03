"use client";

import React from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BuildingStorefrontIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <Popover className="h-14 flex justify-between items-center px-2 md:px-5 py-10 font-[family-name:var(--font-poppins)] font-bold bg-primary">
      <div className="text-base md:text-2xl">
        <h1>
          <Link href="/">Gamify General Supplies</Link>
        </h1>
      </div>
      <div className="hidden md:flex gap-4 items-center justify-between">
      <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex justify-between items-center gap-2">
            <BuildingStorefrontIcon className="size-6"/>
            <p>Shop</p>
          </span>
        </Link>
        <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex justify-between items-center gap-2">
            <ShoppingCartIcon className="size-6" />
            <p>Cart</p>
          </span>
        </Link>
        <Link href="/shop" className="capitalize mt-4 hover:text-secondary">
          <span className="flex justify-between items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p>Account</p>
          </span>
        </Link>
      </div>
      <div className="block md:hidden">
        <PopoverButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </PopoverButton>
      </div>
      <PopoverPanel
        className="absolute block inset-x-0 md:hidden bg-secondary px-2 py-5 rounded mt-14 w-40"
        anchor="bottom"
      >
        <PopoverButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </PopoverButton>
        <div className="flex flex-col mt-4">
        <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex gap-2">
            <BuildingStorefrontIcon className="size-6"/>
            <p>Shop</p>
          </span>
        </Link>
        <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex gap-2">
            <ShoppingCartIcon className="size-6" />
            <p>Cart</p>
          </span>
        </Link>
        <Link href="/shop" className="capitalize mt-4 hover:text-secondary">
          <span className="flex gap-2">
            <UserCircleIcon className="size-6" />
            <p>Account</p>
          </span>
        </Link>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Header;
