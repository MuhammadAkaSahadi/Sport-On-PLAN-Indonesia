// app\(landing)\components\home\products.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { useRouter } from "next/navigation";

export default function Products() {
  const productList = [
    {
      id : 1,
      name: "SportsOn Product 1",
      category: "Running",
      price: 450000,
      imgUrl: "product-7.png",
    },
    {
      name: "SportsOn Product 2",
      category: "Running",
      price: 250000,
      imgUrl: "product-1.png",
    },
    {
      name: "SportsOn Product 3",
      category: "Running",
      price: 230000,
      imgUrl: "product-3.png",
    },
    {
      name: "SportsOn Product 4",
      category: "Running",
      price: 440000,
      imgUrl: "product-4.png",
    },
    {
      name: "SportsOn Product 5",
      category: "Running",
      price: 550000,
      imgUrl: "product-5.png",
    },
    {
      name: "SportsOn Product 6",
      category: "Running",
      price: 650000,
      imgUrl: "product-6.png",
    },
    {
      name: "SportsOn Product 1",
      category: "Running",
      price: 450000,
      imgUrl: "product-8.png",
    },
    {
      name: "SportsOn Product 5",
      category: "Running",
      price: 550000,
      imgUrl: "product-2.png",
    },
  ];

  const {push} = useRouter();

  return (
    <section
      id="products-section"
      className="container flex flex-col mx-auto items-center mb-60"
    >
      <h2 className="italic font-bold text-4xl py-17">
        <span className="text-primary">OUR </span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {productList.map((product, index) => (
          <Link
            href={`/products/${product.id}`}
            className="duration-300 cursor-pointer hover:scale-105 hover:shadow-lg p-2 w-90"
            key={index}
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                width={300}
                height={300}
                alt="productList"
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3" >
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="size-3.5 text-[#A0A0A0]">{product.category}</div>
              <div className="text-primary font-medium">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
