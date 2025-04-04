"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowRightCircleIcon,
  BuildingStorefrontIcon,
  LockClosedIcon,
  LockOpenIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [LoggedIn, toggleLoggedIn] = useState(false);

  const handleLogout = () => {
    toggleLoggedIn(!LoggedIn);
  };

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
            <BuildingStorefrontIcon className="size-6" />
            <p>Shop</p>
          </span>
        </Link>
        <Link
          href="/cart"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex justify-between items-center gap-2 relative">
          <p className="bg-secondary absolute left-3 top-[-10] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black">4</p>
            <ShoppingCartIcon className="size-6" />
            <p>Cart</p>
          </span>
        </Link>
        <Link href="/account" className="capitalize mt-4 hover:text-secondary">
          <span className="flex justify-between items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p>Account</p>
          </span>
        </Link>
        {LoggedIn ? (
          <>
            <Link
              href="/signup"
              className="capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2" onClick={() => handleLogout()}>
                <ArrowRightCircleIcon className="size-6" />
                <p>Sign up</p>
              </span>
            </Link>
            <Link
              href="/login"
              className="capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2" onClick={() => handleLogout()}>
                <LockClosedIcon className="size-6" />
                <p>Login</p>
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/" className="capitalize mt-4 hover:text-secondary">
              <span className="flex gap-2" onClick={() => handleLogout()}>
                <LockOpenIcon className="size-6" />
                <p>Logout</p>
              </span>
            </Link>
          </>
        )}
      </div>
      <div className="block md:hidden">
        <PopoverButton>
          <Bars3Icon className="size-6" />
        </PopoverButton>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          className="absolute block inset-x-0 md:hidden bg-primary px-2 py-5 mt-6"
          anchor="bottom"
        >
          <PopoverButton>
            <XCircleIcon className="size-6" />
          </PopoverButton>
          <div className="flex flex-col">
            <Link
              href="/shop"
              className="text-base capitalize mt-4 hover:text-seconday"
            >
              <span className="flex gap-2">
                <BuildingStorefrontIcon className="size-6" />
                <p>Shop</p>
              </span>
            </Link>
            <Link
              href="/cart"
              className="text-base capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2 bg-transparent">
                <p className="bg-secondary absolute left-5 top-30 text-sm w-5 h-5 flex justify-center items-center rounded-full text-black hover:bg-pink-500">4</p>
                <ShoppingCartIcon className="size-6" />
                <p>Cart</p>
              </span>
            </Link>
            <Link href="/account" className="capitalize mt-4 hover:text-secondary">
              <span className="flex gap-2">
                <UserCircleIcon className="size-6" />
                <p>Account</p>
              </span>
            </Link>
            {LoggedIn ? (
              <>
                <Link
                  href="/signup"
                  className="capitalize mt-4 hover:text-secondary"
                >
                  <span className="flex gap-2" onClick={() => handleLogout()}>
                    <ArrowRightCircleIcon className="size-6" />
                    <p>Sign up</p>
                  </span>
                </Link>
                <Link
                  href="/login"
                  className="capitalize mt-4 hover:text-secondary"
                >
                  <span className="flex gap-2" onClick={() => handleLogout()}>
                    <LockClosedIcon className="size-6" />
                    <p>Login</p>
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/" className="capitalize mt-4 hover:text-secondary">
                  <span className="flex gap-2" onClick={() => handleLogout()}>
                    <LockOpenIcon className="size-6" />
                    <p>Logout</p>
                  </span>
                </Link>
              </>
            )}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default Header;
