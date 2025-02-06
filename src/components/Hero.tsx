import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex h-96 bg-cover bg-center bg-no-repeat justify-center py-44 md:py-60"
      style={{ backgroundImage: "url('/warehouse.jpg')" }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="relative flex flex-col justify-center items-center mx-4 md:mx-0">
        <p className=" font-[family-name:var(--font-poppins)] text-2xl md:text-4xl font-bold text-primary text-center">
          Gamify general <span className="text-secondary">supplies</span> and general services
        </p>
        <p className="font-[family-name:var(--font-poppins)] mt-4 md:mt-6 text-primary text-base md:text-xl text-center">
          suppliers of materials used in handling <span className="text-secondary">warehouse</span> products
        </p>
        <button className="font-[family-name:var(--font-poppins)] text-center mt-6 md:mt-6 px-4 md:px-8 py-2 md:py-3 rounded bg-secondary text-sm md:text-base">
          products
        </button>
      </div>
    </div>
  );
};

export default Hero;
