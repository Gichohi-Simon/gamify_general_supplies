import React from "react";

export default function AccountOverview() {
  return (
    <div className="w-full mt-10 md:mt-0">
      <p className="font-semibold text-sm md:text-xl">Account overview</p>
      <div className="border border-1 px-3 py-4 rounded-lg mt-5">
        <h4 className="text-xs md:text-base font-bold">Account Details</h4>
        <hr />
        <div className="mt-5">
          <div className="flex justify-between mb-5">
            <span>
              <h4 className="text-xs md:text-sm font-bold">Phone Number</h4>
              <h4 className="text-xs md:text-sm mt-2">+254706096729</h4>
            </span>
            <span>
              <h4 className="text-xs md:text-sm font-bold">username</h4>
              <h4 className="text-xs md:text-sm mt-2">simon Njogu</h4>
            </span>
          </div>

          <span>
            <h4 className="text-xs md:text-sm font-bold">Date Joined</h4>
            <h4 className="text-xs md:text-sm mt-1">14-1-2025</h4>
          </span>

          <div className="mt-4 flex justify-between">
            <span className="text-xs md:text-sm border border-1 bg-green-500 text-white px-2 py-2 rounded cursor-pointer">
              update account
            </span>
            <span className="text-xs md:text-sm border border-1 bg-red-500 text-white px-2 py-2 rounded cursor-pointer">
              delete account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
