import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home() {
  const response = await fetch("http://localhost:8080/product/getFirstThree", {
    cache: "no-store",
  });
  const productsResponse = await response.json();
  const products = productsResponse.products;
  
  return (
    <div>
      <Hero />
      <About />
      <Products products={products} />
    </div>
  );
}
