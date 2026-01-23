// app\(landing)\products\[id]\page.tsx

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import { getProductsById } from "@/app/services/product";
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
  params: Promise<{id: string}>;
};

export default async function Product({params}: TPageProps)  {
  const {id} = await params;
  
  const product = await getProductsById(id);

  return (
    <main className="container mx-auto h-screen py-40 flex gap-12 overflow-hidden">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={getImageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl py-5">{product.name}</h1>
        <div className="inline-block bg-primary/10 rounded-full py-[6px] px-[16px] text-primary">
          {product.category.name}
        </div>
        <p className="inline-block py-5">{product.description}</p>
        <div className="text-primary font-semibold text-3xl py-5">
          {priceFormatter(product.price)}
        </div>
        <ProductActions product={product} stock={product.stock}/>
      </div>
    </main>
  );
}