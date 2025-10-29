import React from "react";

export default function Search() {
  return (
    <div className="mb-4 font-[family-name:var(--font-poppins)] flex justify-start items-center mt-6 gap-2 w-full">
      <input
        type="text"
        placeholder="search products"
        className="w-full md:w-3/4 border border-1 border-primary rounded-lg md:rounded-lg py-2 px-2 text-xs md:text-sm"
      />
      <button className="bg-primary py-2 px-2 rounded-lg text-xs md:text-sm">
        search
      </button>
    </div>
  );
}
