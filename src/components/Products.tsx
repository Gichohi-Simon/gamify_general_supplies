import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] my-8 md:my-20 overflow-x-hidden">
      <h1 className="text-center text-xl md:text-3xl font-bold text-secondary">
        Our Products
      </h1>
      <div className="flex justify-center items-center mt-8 md:mt-12 mx-2 md:mx-0 py-2 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-20">
          <div className="w-44 md:w-72 flex flex-col items-center rounded-xl">
            <Image
              src="/warehouse2.jpg"
              alt="strapping manilla"
              height="96"
              width="288"
              className="rounded-xl rounded-lg"
            />
            <div className="py-4 md:py-8 text-sm px-2 md:px-4">
              <p className="font-bold">Strapping Manilla (9mm & 15mm)</p>
              <p className="mt-2">
                strong, durable rope or strap made from Manila hemp fibers
              </p>
              <p className="font-bold mt-2">KSH 3000</p>
            </div>
          </div>

          {/*  */}
          <div className="w-44 md:w-72 flex flex-col items-center rounded-xl">
            <Image
              src="/warehouse.jpg"
              alt="strapping manilla"
              height="96"
              width="288"
              className="rounded-xl rounded-lg"
            />
            <div className="py-4 md:py-8 text-sm px-2 md:px-4">
              <p className="font-bold">Strapping Manilla (9mm & 15mm)</p>
              <p className="mt-2">
                strong, durable rope or strap made from Manila hemp fibers
              </p>
              <p className="font-bold mt-2">KSH 3000</p>
            </div>
          </div>

          <div className="w-44 md:w-72 flex flex-col items-center rounded-xl">
            <Image
              src="/van1.jpg"
              alt="strapping manilla"
              height="96"
              width="288"
              className="rounded-xl rounded-lg"
            />
            <div className="py-4 md:py-8 text-sm px-2 md:px-4">
              <p className="font-bold">Strapping Manilla (9mm & 15mm)</p>
              <p className="mt-2">
                strong, durable rope or strap made from Manila hemp fibers
              </p>
              <p className="font-bold mt-2">KSH 3000</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
