import Categories from "./components/home/categories";
import Hero from "./components/home/hero";
import Products from "./components/home/products";
import Footer from "./components/layouts/footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Categories/>
      <Products/>
      <Footer/>
    </main>
  );
}
