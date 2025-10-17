import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home() {
  const API = process.env.API_URL;
  console.log("API :", API);
  const response = await fetch(`${API}/product/getFirstThree`, {
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
