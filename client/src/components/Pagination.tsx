"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages }:{currentPage:number, totalPages:number}) {
  const router = useRouter();
  const params = useSearchParams();

  const goToPage = (page:number) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", String(page));
    router.push(`/products?${newParams.toString()}`);
  };
  
  return (
    <div className="font-[family-name:var(--font-poppins)] flex items-center justify-center gap-3 py-10">

      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-2 py-1 rounded-md border text-xs md:text-sm ${
          currentPage <= 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Prev
      </button>

      
      <span className="text-gray-700 font-medium text-xs md:text-sm">
        Page {currentPage} of {totalPages}
      </span>

    
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`px-2 py-1 rounded-md border text-xs md:text-sm ${
          currentPage >= totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </button>

    </div>
  );
}
