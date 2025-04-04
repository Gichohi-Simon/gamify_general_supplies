import React from "react";

export default function Categories() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <p className="font-bold text-xs md:text-base flex md:justify-end">Filter by category</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
        <span className="bg-secondary px-3 py-2 md:px-6 rounded-full hover:bg-primary cursor-pointer text-xs md:text-sm">
          stretching film
        </span>
        <span className="bg-secondary px-3 py-2 md:px-6 rounded-full hover:bg-primary cursor-pointer text-xs md:text-sm">
          paint
        </span>
        <span className="bg-secondary px-3 py-2 md:px-6 rounded-full w-auto hover:bg-primary cursor-pointer text-xs md:text-sm">
          tape
        </span>
      </div>
    </div>
  );
}
