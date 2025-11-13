"use client"

import { useGetFirstFourProducts } from '@/hooks/useProducts';

import React from 'react'
import Products from './Products';

export default function ProductsComponent() {
    const { data, isLoading, error } = useGetFirstFourProducts();

  if (isLoading) return(
    <div className='flex items-center justify-center'>
         <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );

  if (error) return <p>error occured {error.message}</p>;

  if (!data || !data.products) {
    return <p>No products found.</p>;
  }
  return (
    <div>
        <Products 
        products={data.products}
        />
    </div>
  )
}
