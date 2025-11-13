import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary font-[family-name:var(--font-poppins)] py-10 md:py-14 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
        <div className="text-center md:text-start">
          <div>
            <p className="font-bold text-sm md:text-base capitalize tracking-wider">
              Gamify General Supplies
            </p>
          </div>
          <div>
            <p className="text-xs md:text-sm capitalize mt-1 md:mt-2 tracking-wider">
              suppliers of materials used in handling <br /> warehouse products
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-bold capitalize text-sm md:text-base tracking-wider">location</p>
          <p className="text-xs md:text-sm capitalize tracking-wider">
            Archbishop Makarios Road, Ganjoni
          </p>
        </div>

        <div className="text-center">
          <p className="font-bold capitalize text-sm md:text-base tracking-wider">contact</p>
          <a
            href="tel:+254 727 386 878"
            className="text-xs md:text-sm hover:font-bold"
          >
            +254 727 386 878
          </a>
        </div>

        <div className="text-center">
          <p className="font-bold capitalize text-sm md:text-base tracking-wider">
            openning hours
          </p>
          <p className="text-xs md:text-sm capitalize">
            Mon-Fri 8:00AM to 5:00PM
          </p>
          <a
            href="mailto:gamify100@gmail.com"
            className="text-xs md:text-sm hover:font-bold"
          >
            gamify100@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-center font-bold text-xs md:text-sm tracking-wider">
          &copy; copyright Gamify General Supplies and general services 2025,
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
