import React from "react";

const About = () => {
  return (
    <div className="font-[family-name:var(--font-poppins)] px-4 md:px-24 py-12 md:py-24 rounded-xl">
      <h1 className="text-center text-xl md:text-3xl font-bold text-secondary">
        Our Services
      </h1>

      <div className="md:flex justify-center items-center mt-6 md:mt-12 w-full">
        <div className="w-full md:w-1/2 px-8">
          <p className="mt-4 text-center text-base md:text-lg">
            {" "}
            Suppliers of materials for warehouse handling.
          </p>
          <p className="mt-4 text-center text-base md:text-lg">
            {" "}
            For example: top and bottom capping, strapping manila, stretch wrapping film, stitching thread, slip sheets, dust masks, and various warehouse operations.
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
