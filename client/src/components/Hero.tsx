import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat  pt-28 md:pt-72 font-[family-name:var(--font-poppins)] px-2 md:px-14"
      style={{ backgroundImage: "url('/warehouse2.jpg')" }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative text-start mx-4 md:mx-0">
        <p className=" text-3xl md:text-5xl font-bold text-primary tracking-wider">
          Gamify general <span className="text-secondary">supplies</span> 
        </p>
        <p className="mt-2 text-3xl md:text-5xl font-bold text-primary tracking-wider">
          and general services
        </p>
        <p className="mt-4 md:mt-4 text-primary text-base md:text-xl">
          suppliers of materials used in handling{" "}
          <span className="text-secondary">warehouse</span> products
        </p>
        <Link
          href="/shop"
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-2 rounded-full bg-secondary flex justify-center items-center gap-2 w-32"
        >
          <p className="text-sm lowercase">Shop</p>
          <span>
            <ArrowRightCircleIcon className="size-4"/>
          </span>
        </Link>

      </div>
    </div>
  );
};

export default Hero;
