"use client";

import { Fragment, useEffect } from "react";
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
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/authSlice";

const Header = () => {
  const API = process.env.API_URL;
  console.log("api from header: ", API);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API}/auth/check`, {
          credentials: "include",
        });
        const data = await response.json();
        console.log({ tokenId: data });
        dispatch(
          setCredentials({
            userId: data.userId,
            token: data.token,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, []);

  return (
    <Popover className="flex justify-between items-center px-2 md:px-5 py-4 font-[family-name:var(--font-poppins)] font-bold bg-primary">
      <div className="text-base">
        <h1 className="uppercase font-bold">
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
            <p className="text-sm">Shop</p>
          </span>
        </Link>
        <Link href="/account" className="capitalize mt-4 hover:text-secondary">
          <span className="flex justify-between items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p className="text-sm">Account</p>
          </span>
        </Link>
        <Link
          href="/cart"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex justify-between items-center gap-2 relative">
            <p className="bg-secondary absolute left-3 top-[-12] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black">
              4
            </p>
            <ShoppingCartIcon className="size-6" />
            <p className="text-sm">Cart</p>
          </span>
        </Link>
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
              href="/account"
              className="capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2">
                <UserCircleIcon className="size-6" />
                <p>Account</p>
              </span>
            </Link>
             <Link
              href="/cart"
              className="text-base capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2 bg-transparent">
                <p className="bg-secondary absolute left-5 top-[135px] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black hover:bg-pink-500">
                  4
                </p>
                <ShoppingCartIcon className="size-6" />
                <p>Cart</p>
              </span>
            </Link>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default Header;
