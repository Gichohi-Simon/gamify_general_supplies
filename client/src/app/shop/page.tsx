import React from "react";
import MainProducts from "@/components/MainProducts";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:8080/product", {
    cache: "no-store",
  });

  const posts = await response.json();
  console.log(posts.products);
  const products = posts.products

  return (
    <div>
      <MainProducts 
        products={products}
      />
    </div>
  );
};

export default ProductsPage;
