import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary font-[family-name:var(--font-poppins)] py-10 px-10">
      <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center md:text-start">
          <p className="font-bold text-2xl md:text-4xl ">
            Gamify General Supplies
          </p>
          <p className="text-sm md:text-base mt-2">
            suppliers of materials used in warehouses
          </p>
        </div>
        <div className="text-center md:text-start">
          <p className="font-bold capitalize text-sm md:text-base">openning hours</p>
          <p className="mt-1 md:mt-2 mb-1 md:mb-2 text-sm md:text-base">Mon-Fri 8:00AM to 5:00PM</p>
          <a href="tel:+254 727 386 878" className="text-sm md:text-base hover:font-bold">+254 727 386 878</a>
          <br/>
          <a href="mailto:gamify100@gmail.com" className="mt-4 hover:font-bold">gamify100@gmail.com</a>
        </div>
        <div className="text-center md:text-start">
          <p className="font-bold capitalize text-sm md:text-base">location</p>
          <p className="mt-1 md:mt-2 text-sm md:text-base">
            Archbishop Makarios Road, Ganjoni
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <p className="text-center font-bold text-xs md:text-sm">
          &copy; copyright Gamify General Supplies and general services 2025,
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
