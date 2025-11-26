import React from "react";
import { useProducts } from "@/hooks/useProducts";
import ShopProductsComponent from "./ShopProductsComponent";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

export default function MainProductList() {
  const params = useSearchParams();
  const page = Number(params.get("page") || 1);
  const query = params.get("q") || "";
  const router = useRouter();

  const { data, isLoading, error } = useProducts({
    page,
    limit:6,
    query,
  });

  if (isLoading) return(
    <div className='flex items-center justify-center'>
         <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );;

  if (error) return <p>Error occured: {error.message} </p>;
  
 if (!data?.products?.length) {
    return (
      <div className="text-center py-20 font-[family-name:var(--font-poppins)]">
        <h2 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
          No products found
        </h2>

        {query && (
          <p className="text-gray-500 mb-6 text-xs md:text-sm">
            Nothing matched your search for <span className="font-bold">{query}</span>.
          </p>
        )}

        <button
          onClick={() => router.push("/shop?page=1")}
          className="bg-primary text-white py-2 px-4 rounded-lg text-xs"
        >
          Reset Search
        </button>
      </div>
    );
  }


  return (
    <div className="mb-5 md:mb-10">
      <ShopProductsComponent products={data.products}/> 
      <Pagination 
        currentPage={data.currentPage}
        totalPages={data.totalPages}
      />
    </div>
  );
}
