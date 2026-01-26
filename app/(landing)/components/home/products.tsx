// app\(landing)\components\home\products.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { toast } from "react-toastify";

type TProductsProps = {
  products: Product[];
};

export default function Products({ products }: TProductsProps) {
  const { addItem } = useCartStore();

  const handleAddCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation(); // Agar tambah item ke chart dan bukan alih-alih membuka detail product
    addItem(product); // Sudah di set default 1 di useCartStore, jika belum -> product.1
    toast.dismiss(); // Menghindari SPAM klik
    toast.success("Produk berhasil ditambahkan");
  };

  return (
    <section
      id="products-section"
      className="container flex flex-col mx-auto items-center mb-60"
    >
      <h2 className="italic font-bold text-4xl py-17">
        <span className="text-primary">OUR </span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <Link
            href={`/products/${product._id}`}
            className="duration-300 cursor-pointer hover:scale-105 hover:shadow-lg p-2 w-90"
            key={product._id}
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                width={300}
                height={300}
                alt="productList"
                className="aspect-square object-contain"
              />
              <Button
                className="w-10 h-10 p-2! absolute right-3 top-3"
                onClick={(e) => handleAddCart(e, product)}
              >
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="size-3.5 text-[#A0A0A0]">
                {product.category ? product.category.name : "-"}
              </div>
              <div className="text-primary font-medium">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
