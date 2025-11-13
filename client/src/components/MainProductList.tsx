import React from "react";
import { useProducts } from "@/hooks/useProducts";
import ShopProductsComponent from "./ShopProductsComponent";

export default function MainProductList() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return(
    <div className='flex items-center justify-center'>
         <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );;

  if (error) return <p>Error occured: {error.message}</p>;
  
  if (!data || !data.products) {
    return <p>No products found.</p>;
  }
  return (
    <div>
      <ShopProductsComponent products={data.products}/> 
    </div>
  );
}
