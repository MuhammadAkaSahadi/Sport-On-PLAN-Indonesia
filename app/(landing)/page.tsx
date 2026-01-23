import { getAllCategories } from "../services/category";
import { getAllProducts } from "../services/product";
import Categories from "./components/home/categories";
import Hero from "./components/home/hero";
import Products from "./components/home/products";
import Footer from "./components/layouts/footer";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])

  return (
    <main>
      <Hero/>
      <Categories categories={categories}/>
      <Products products={products}/>
      <Footer/>
    </main>
  );
}
