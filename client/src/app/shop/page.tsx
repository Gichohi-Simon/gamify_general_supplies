"use client";

import React from "react";
import MainProducts from "@/components/MainProducts";
import { useProducts } from "../lib/product.api";

const ProductsPage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>loading...</p>;

  if (error) return <p>Error occured: {error.message}</p>;

  return (
    <div>
      <MainProducts products={data.products} />
    </div>
  );
};

export default ProductsPage;
