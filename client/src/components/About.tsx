import React from "react";

const About = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] px-8 md:px-[60px] py-16 md:py-24 rounded-xl">
      <div className="md:flex justify-center items-center mt-8 md:mt-24 w-full">
        <div className="w-full md:w-1/2">
          <p className="text-xl md:text-3xl font-bold tracking-wider capitalize">
            Trusted suppliers of high-quality materials.
          </p>
          <p className="mt-8 text-start text-sm md:text-base lowercase">
            Suppliers of premium materials and equipment for efficient warehouse handling, including top and bottom capping, strapping, stretch wrapping film, stitching thread, slip sheets, dust masks, and other essential warehouse operations.
          </p>
        </div>
        
        <div className="relative bg-primary h-52 md:h-96 mt-12 md:mt-0 w-3/4 md:w-1/2 rounded-xl mx-10 md:mx-[60px]">
          <div
            className="bg-cover bg-center bg-no-repeat h-52 md:h-96 w-full absolute top-12 md:top-20 left-12 md:left-16 rounded-xl"
            style={{ backgroundImage: "url('/warehouse2.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
