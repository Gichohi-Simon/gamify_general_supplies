// "use client";

// import { Fragment } from "react";
// import Link from "next/link";
// import {
//   Popover,
//   PopoverButton,
//   PopoverPanel,
//   Transition,
// } from "@headlessui/react";
// import {
//   BuildingStorefrontIcon,
//   ShoppingCartIcon,
//   UserCircleIcon,
//   XCircleIcon,
// } from "@heroicons/react/16/solid";
// import { Bars3Icon } from "@heroicons/react/24/outline";

// import { useAppSelector } from "@/store/hooks";

// const Header = () => {
//   const cart = useAppSelector((cart) => cart.cart.items);

//   return (
//     <Popover className="flex justify-between items-center px-2 md:px-5 py-4 font-[family-name:var(--font-poppins)]">
//       <div className="text-xs md:text-sm">
//         <Link href="/" className="flex flex-col">
//           <span className="font-bold text-base md:text-xl uppercase tracking-wider">
//             Gamify
//           </span>
//           <span className="text-[10px] md:text-xs text-center text-secondary font-bold mt-[-5px]">
//             general supplies.
//           </span>
//         </Link>
//       </div>

//       <div className="hidden md:flex gap-4 items-center justify-between">
//         <Link
//           href="/shop"
//           className="text-base capitalize mt-4 hover:text-secondary"
//         >
//           <span className="flex justify-between items-center gap-2">
//             <BuildingStorefrontIcon className="size-6" />
//             <p className="text-sm">Store</p>
//           </span>
//         </Link>
//         <Link href="/account" className="capitalize mt-4 hover:text-secondary">
//           <span className="flex justify-between items-center gap-2">
//             <UserCircleIcon className="size-6" />
//             <p className="text-sm">Account</p>
//           </span>
//         </Link>
//         <Link
//           href="/cart"
//           className="text-base capitalize mt-4 hover:text-primary"
//         >
//           <span className="flex justify-between items-center gap-2 relative">
//             <p className="bg-primary hover:text-white absolute left-3 top-[-12px] text-sm w-5 h-5 flex justify-center items-center rounded-full ">
//               {cart.length}
//             </p>
//             <ShoppingCartIcon className="size-6" />
//             <p className="text-sm">Cart</p>
//           </span>
//         </Link>
//       </div>
//       <div className="block md:hidden">
//         <PopoverButton>
//           <Bars3Icon className="size-6" />
//         </PopoverButton>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-200"
//         enterFrom="opacity-0 translate-y-1"
//         enterTo="opacity-100 translate-y-0"
//         leave="transition ease-in duration-150"
//         leaveFrom="opacity-100 translate-y-0"
//         leaveTo="opacity-0 translate-y-1"
//       >
//         <PopoverPanel
//           className="absolute block inset-x-0 md:hidden px-2 py-5 mt-6 bg-white"
//           anchor="bottom"
//         >
//           <PopoverButton>
//             <XCircleIcon className="size-6" />
//           </PopoverButton>
//           <div className="flex flex-col">
//             <Link
//               href="/shop"
//               className="text-base capitalize mt-4 hover:text-seconday"
//             >
//               <span className="flex gap-2">
//                 <BuildingStorefrontIcon className="size-6" />
//                 <p className="text-sm">Store</p>
//               </span>
//             </Link>
//             <Link
//               href="/account"
//               className="capitalize mt-4 hover:text-secondary"
//             >
//               <span className="flex gap-2">
//                 <UserCircleIcon className="size-6" />
//                 <p className="text-sm">account</p>
//               </span>
//             </Link>
//             <Link
//               href="/cart"
//               className="text-base capitalize mt-4 hover:text-secondary"
//             >
//               <span className="flex gap-2 bg-transparent">
//                 <p className="bg-secondary absolute left-5 top-[135px] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black hover:bg-pink-500">
//                   {cart.length}
//                 </p>
//                 <ShoppingCartIcon className="size-6" />
//                 <p className="text-sm">Cart</p>
//               </span>
//             </Link>s
//           </div>
//         </PopoverPanel>
//       </Transition>
//     </Popover>
//   );
// };

// export default Header;

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
    <Popover className="flex justify-between items-center px-2 md:px-5 py-4 font-[family-name:var(--font-poppins)]">
      <div className="text-xs md:text-sm">
        <Link href="/" className="flex flex-col">
          <span className="font-bold text-base md:text-xl uppercase tracking-wider">
            Gamify
          </span>
          <span className="text-[10px] md:text-xs text-center text-secondary font-bold mt-[-5px]">
            general supplies.
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 items-center justify-between">
        <Link
          href="/shop"
          className="text-base capitalize mt-4 hover:text-secondary"
        >
          <span className="flex justify-between items-center gap-2">
            <BuildingStorefrontIcon className="size-6" />
            <p className="text-sm">Store</p>
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
          className="text-base capitalize mt-4 hover:text-primary"
        >
          <span className="flex justify-between items-center gap-2 relative">
            <p className="bg-primary absolute left-3 top-[-12px] text-sm w-5 h-5 flex justify-center items-center rounded-full">
              {cartCount}
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
        <PopoverPanel className="absolute block inset-x-0 md:hidden px-2 py-5 mt-6 bg-white">
          <PopoverButton>
            <XCircleIcon className="size-6" />
          </PopoverButton>

          <div className="flex flex-col">
            <Link
              href="/shop"
              className="text-base capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2">
                <BuildingStorefrontIcon className="size-6" />
                <p className="text-sm">Store</p>
              </span>
            </Link>

            <Link
              href="/account"
              className="capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2">
                <UserCircleIcon className="size-6" />
                <p className="text-sm">Account</p>
              </span>
            </Link>

            <Link
              href="/cart"
              className="text-base capitalize mt-4 hover:text-secondary"
            >
              <span className="flex gap-2 bg-transparent relative">
                <p className="bg-secondary absolute left-5 top-[135px] text-sm w-5 h-5 flex justify-center items-center rounded-full text-black">
                  {cartCount}
                </p>
                <ShoppingCartIcon className="size-6" />
                <p className="text-sm">Cart</p>
              </span>
            </Link>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default Header;
