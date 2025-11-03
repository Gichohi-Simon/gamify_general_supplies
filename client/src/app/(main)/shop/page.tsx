"use client";

import React from "react";
import MainProducts from "@/components/MainProducts";
import { useProducts } from "../../../hooks/useProducts";

const ProductsPage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>loading...</p>;

  if (error) return <p>Error occured: {error.message}</p>;

  if (!data || !data.products) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <MainProducts products={data.products} />
    </div>
  );
};

export default ProductsPage;
