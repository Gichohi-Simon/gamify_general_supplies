"use client";

import Search from "./Search";
import Categories from "./Categories";
import MainProductList from "./MainProductList";

const MainProducts = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] overflow-x-hidden min-h-screen">
      <div
        className="relative bg-primary py-10 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/warehouse.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        <div className="relative z-10 text-start text-white mx-[30px] md:mx-[60px]">
          <p className="my-3 md:my-6 text-base md:text-4xl text-primary font-bold tracking-wider">
            Get the right tools,{" "}
            <span className="text-secondary">equipment</span>, and{" "}
            <span className="text-secondary">supplies </span>
            <br /> to keep your{" "}
            <span className="text-secondary">warehouse </span>
            running smoothly.
          </p>
          <p className="text-sm md:text-base text-secondary tracking-wider">
            Quality you can count on, delivered when you need it.
          </p>
        </div>
      </div>

      <div className="w-full px-8 md:px-[60px] md:flex justify-between items-center mt-6">
        <Search />
        <Categories />
      </div>
      <MainProductList />
    </div>
  );
};

export default MainProducts;
