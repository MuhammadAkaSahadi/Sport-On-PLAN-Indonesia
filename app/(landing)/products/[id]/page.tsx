// app\(landing)\products\[id]\page.tsx
"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";

export default function Product()  {
    return (
      <main className="container mx-auto h-screen py-40 flex gap-12 overflow-hidden">
        <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
          <Image
            src="/images/products/product-4.png"
            width={550}
            height={550}
            alt="product 4 image"
            className="aspect-square object-contain w-full"
          />
        </div>
        <div className="w-full py-7">
          <h1 className="font-bold text-5xl py-5">SportsOn HyperSoccer v2</h1>
          <div className="inline-block bg-primary/10 rounded-full py-[6px] px-[16px] text-primary">
            Football
          </div>
          <p className="inline-block py-5">
            The SportsOn HyperSoccer v2 is engineered for the player who demands
            precision, power, and unrivaled speed on the pitch. Featuring a
            striking, two-toned black and white design with deep crimson
            accents, these cleats dont just perform—they make a statement.
            Experience the future of football footwear with v2s enhanced fit and
            cutting-edge traction.
          </p>
          <div className="text-primary font-semibold text-3xl py-5">
            {priceFormatter(1499999)}
          </div>
          <ProductActions />
        </div>
      </main>
    );
}