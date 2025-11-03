"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useGetFirstFourProducts } from "@/hooks/useProducts";

export default function Home() {
  const { data, isLoading, error } = useGetFirstFourProducts();

  if (isLoading) return <p>loading...</p>;

  if (error) return <p>error occured {error.message}</p>;

  if (!data || !data.products) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      <Hero />
      <About />
      <Products products={data.products} />
    </div>
  );
}
