"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartCount = isMounted ? cart.length : 0;

  return (
    <Popover className="flex justify-between items-center px-2 md:px-5 py-4 mx-[20px] md:mx-[40px] font-[family-name:var(--font-poppins)] relative z-50">
      <div className="text-xs md:text-sm">
        <Link href="/" className="flex flex-col">
          <span className="font-bold text-base md:text-xl uppercase tracking-wider">
            Gamify
          </span>
          <span className="text-[10px] md:text-xs text-center text-primary font-bold mt-[-5px] tracking-wider">
            general supplies.
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center justify-between">
        <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-primary"
        >
          <span className="flex justify-between items-center gap-2">
            <BuildingStorefrontIcon className="size-6" />
            <p className="text-sm">Store</p>
          </span>
        </Link>

        <Link href="/account" className="capitalize mt-4 hover:text-primary">
          <span className="flex justify-between items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p className="text-sm">Account</p>
          </span>
        </Link>

        <Link
          href="/cart"
          className="text-base capitalize mt-4 hover:text-primary"
        >
          <span className="flex justify-between items-center gap-2 relative">
            <p className="bg-secondary hover:bg-primary absolute left-3 top-[-12px] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black">
              {cartCount}
            </p>
            <ShoppingCartIcon className="size-6" />
            <p className="text-sm">Cart</p>
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <Popover>
        {({ close }) => (
          <>
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
              <PopoverPanel className="fixed inset-0 md:hidden bg-secondary z-50 px-4 py-6">
                <div className="flex justify-end mb-6">
                  <PopoverButton>
                    <XCircleIcon className="text-black size-6" />
                  </PopoverButton>
                </div>

                <div className="flex flex-col text-white">
                  <Link
                    href="/shop"
                    className="text-base capitalize mt-4 hover:text-primary"
                    onClick={() => close()}
                  >
                    <span className="flex gap-2 items-center">
                      <BuildingStorefrontIcon className="text-black size-6" />
                      <p className="text-sm text-black">Store</p>
                    </span>
                  </Link>

                  <Link
                    href="/account"
                    className="capitalize mt-4 hover:text-primary"
                    onClick={() => close()}
                  >
                    <span className="flex gap-2 items-center">
                      <UserCircleIcon className="text-black size-6" />
                      <p className="text-sm text-black">Account</p>
                    </span>
                  </Link>

                  <Link
                    href="/cart"
                    className="text-base capitalize mt-4 hover:text-primary"
                    onClick={() => close()}
                  >
                    <span className="flex gap-2 items-center relative">
                      <p className="bg-white text-black absolute left-5 top-[-10px] text-sm w-5 h-5 flex justify-center items-center rounded-full">
                        {cartCount}
                      </p>
                      <ShoppingCartIcon className="text-black size-6" />
                      <p className="text-sm text-black">Cart</p>
                    </span>
                  </Link>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover>
  );
};

export default Header;
