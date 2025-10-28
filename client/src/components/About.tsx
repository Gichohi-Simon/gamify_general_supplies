import React from "react";

const About = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] px-2 md:px-24 py-16 md:py-24 rounded-xl">
      <h1 className="text-center text-base md:text-xl font-bold underline underline-offset-8 decoration-black capitalize tracking-wider">
        what we offer
      </h1>

      <div className="md:flex justify-center items-center mt-8 md:mt-24 w-full gap-0 md:gap-12">
        <div className="w-full md:w-1/2 px-8">
          <p className="mt-4 text-center text-base md:text-lg font-bold">
            {" "}
            Trusted suppliers of high-quality materials for efficient warehouse operations.
          </p>
          <p className="mt-4 text-center text-sm md:text-base">
            {" "}
            Suppliers of premium materials and equipment for efficient warehouse handling, including top and bottom capping, strapping, stretch wrapping film, stitching thread, slip sheets, dust masks, and other essential warehouse operations.
          </p>
        </div>

        <div className="relative bg-primary h-52 md:h-96 mt-12 md:mt-0 w-3/4 md:w-1/2 rounded-xl mx-4">
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
