"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useGetFirstFourProducts } from "./lib/product.api";

export default function Home() {
  const { data, isLoading, error } = useGetFirstFourProducts();

  if (isLoading) return <p>loading...</p>;

  if (error) return <p>error occured {error.message}</p>;

  return (
    <div>
      <Hero />
      <About />
      <Products products={data.products} />
    </div>
  );
}
