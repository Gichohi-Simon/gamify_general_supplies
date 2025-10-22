import { BuildingStorefrontIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-[600px] bg-cover bg-center bg-no-repeat justify-center py-44 md:py-60 font-[family-name:var(--font-poppins)]"
      style={{ backgroundImage: "url('/warehouse.jpg')" }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="relative flex flex-col justify-center items-center mx-4 md:mx-0">
        <p className=" text-3xl md:text-5xl font-bold text-primary text-center tracking-wider">
          Gamify general <span className="text-secondary">supplies</span> and
          general services
        </p>
        <p className="mt-8 md:mt-10 text-primary text-base md:text-xl text-center">
          suppliers of materials used in handling{" "}
          <span className="text-secondary">warehouse</span> products
        </p>
        <Link
          href="/shop"
          className="mt-8 md:mt-10 px-4 md:px-6 py-2 md:py-2 rounded bg-secondary flex gap-2 items-center justify-center text-xs md:text-sm"
        >
          <span>
            <BuildingStorefrontIcon className="size-4 md:size-6"/>
          </span>
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Hero;
