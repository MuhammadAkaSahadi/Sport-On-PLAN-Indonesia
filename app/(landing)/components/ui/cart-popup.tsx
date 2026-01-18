"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

export const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 1,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 530000,
    qty: 1,
    imgUrl: "product-4.png",
  },
];

export default function CartPopup() {
  const { push } = useRouter();

  const handleCheckout = () => {
    push("/checkout");
  };

  const totalPrice = cartList.reduce(
    // reduce() adalah fungsi array untuk menggabungkan semua isi array menjadi satu nilai.
    (total, item) => total + item.price * item.qty,
    0,
    // total = accumulator, item = currentValue, 0 = nilaiAwal
  );

  return (
    <div className="absolute bg-white right-0 top-16 mr-20 shadow-xl shadow-black shadow/10 border border-gray-200 w-90 z-10">
      <div className="font-bold text-center p-4 border-b border-gray-200">
        Shopping Cart
      </div>
      {cartList.map((item, index) => (
        <div
          className="font-medium text-sm flex gap-4 border-b border-gray-200 p-5"
          key={index}
        >
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="relative self-center">
            <div className="mb-1">{item.name}</div>
            <div className="flex gap-5 text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            className="w-7 h-7 p-0! self-center ml-auto"
            variant="ghost"
            size="small"
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
      <div className="p-5">
        <div className="flex justify-between mb-3 font-semibold">
          <div className="">Total</div>
          <div className="text-primary">{priceFormatter(totalPrice)}</div>
        </div>
        <Button className="size-full font-medium" variant="dark" onClick={handleCheckout}>
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
}
