import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary font-[family-name:var(--font-poppins)] py-20 px-4 md:px-[60px]">
      <div className="text-center md:text-start md:flex justify-between">
        <div>
          <div>
            <div>
              <p className="font-bold text-sm md:text-base capitalize tracking-wider">
                Gamify General Supplies
              </p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs capitalize mt-1 md:mt-2 tracking-wider">
                suppliers of materials used in handling <br /> warehouse
                products
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="/shop">
              <span className="bg-black text-white text-[10px] md:text-xs px-4 py-2 rounded-full mt-6 tracking-wider capitalize flex gap-2">
                start shopping
                <ArrowRightCircleIcon className="size-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="text-center md:text-start mt-8 md:mt-0">
          <div className="mt-2">
            <p className="font-bold capitalize text-xs md:text-sm tracking-wider">
              location
            </p>
            <p className="text-[10px] md:text-xs capitalize tracking-wider">
              NSSF Building, 7th Floor
            </p>
          </div>

          <div className="mt-3">
            <p className="font-bold capitalize text-xs md:text-sm tracking-wider">
              store
            </p>
            <p className="text-[10px] md:text-xs capitalize tracking-wider">
              Shimanzi jua kali
            </p>
          </div>

          <div className="mt-3">
            <p className="font-bold capitalize text-xs md:text-sm tracking-wider">
              contact
            </p>
            <a
              href="tel:+254 727 386 878"
              className="text-[10px] md:text-xs hover:font-bold"
            >
              +254 727 386 878
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <p className="font-bold capitalize text-xs md:text-sm tracking-wider">
            openning hours
          </p>
          <p className="text-[10px] md:text-xs capitalize">
            Mon-Fri 8:00AM to 5:00PM
          </p>
          <a
            href="mailto:gamify100@gmail.com"
            className="text-[10px] md:text-xs hover:font-bold"
          >
            gamify100@gmail.com
          </a>
        </div>
      </div>
      <hr className="my-8 border-1 border-black opacity-10" />
      <div className="text-center md:flex justify-between mt-6">
        <p className="font-bold text-xs md:text-sm tracking-wider">
          &copy; 2026 Gamify General Supplies and general services, All rights
          reserved.
        </p>
        <p className="text-xs md:text-sm mt-3 md:mt-0">
          Developed by{" "}
          <a href="https://gichohi.com">
            <span className="font-bold">gichohi</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
