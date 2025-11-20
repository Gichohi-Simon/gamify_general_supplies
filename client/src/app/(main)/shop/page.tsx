"use client";

import React, { Suspense } from "react";
import MainProducts from "@/components/MainProducts";

const ProductsPage = () => {
  return (
    <div>
     <Suspense fallback={<div>Loading...</div>}>
       <MainProducts />
     </Suspense>
    </div>
  );
};

export default ProductsPage;
