import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat  pt-28 md:pt-72 font-[family-name:var(--font-poppins)] px-2 md:px-14"
      style={{ backgroundImage: "url('/warehouse.jpg')" }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="relative text-center md:text-start mx-4 md:mx-0">
        <p className=" text-2xl md:text-5xl font-bold text-primary tracking-wider">
          Gamify general <span className="text-secondary">supplies</span>
        </p>
        <p className="mt-0 md:mt-2 text-2xl md:text-5xl font-bold text-primary tracking-wider">
          and services
        </p>
        <p className="mt-4 text-secondary  text-xs md:text-base tracking-wider">
          suppliers of materials used in handling <span>warehouse</span>{" "}
          products
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="/shop"
            className="mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-2 rounded-full bg-primary flex justify-center items-center gap-2 w-24 md:w-32 hover:bg-secondary"
          >
            <p className="text-xs md:text-sm lowercase font-bold">Shop</p>
            <span>
              <ArrowRightCircleIcon className="size-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
