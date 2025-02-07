import Image from "next/image";
import React from "react";
import { FullCatalog } from "@/utils/fullcatalog";

const MainProducts = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] my-8 md:my-20 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-3xl font-bold text-secondary">
        Our Products
      </h1>
      <div className="flex justify-center items-center mt-8 md:mt-12 mx-2 md:mx-0 py-2 md:py-6">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20">
          {FullCatalog.map((catalog) => (
            <div key={catalog.name}>
              <div className="w-44 md:w-72 flex flex-col items-center rounded-xl">
                <Image
                  src={catalog.image}
                  alt={catalog.name}
                  height="96"
                  width="288"
                  className="rounded max-h-36 md:max-h-60"
                />
                <div className="py-4 md:py-8 text-sm px-2 md:px-4">
                  <p className="font-bold">{catalog.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
