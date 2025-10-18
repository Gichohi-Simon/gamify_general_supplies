import React from "react";
import MainProducts from "@/components/MainProducts";

const ProductsPage = async () => {
  const API = process.env.API_URL
  const response = await fetch(`${API}/product/all-products`, {
    cache: "no-store",
  });

  const posts = await response.json();
 
  const products = posts.products;

  return (
    <div>
      <MainProducts products={products} />
    </div>
  );
};

export default ProductsPage;
