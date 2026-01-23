"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export default function CartPopup() {
  const { push } = useRouter();
  const {items, removeItem} = useCartStore();

  const handleCheckout = () => {
    push("/checkout");
  };

  const totalPrice = items.reduce(
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
      {items.length ? items.map((item, index) => (
        <div
          className="font-medium text-sm flex gap-4 border-b border-gray-200 p-5"
          key={index}
        >
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={getImageUrl(item.imageUrl)}
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
            onClick={()=> removeItem(item._id)}
          >
            <FiTrash2 />
          </Button>
        </div>
      )) : (
        <div className="text-center pt-5 text-gray-400">
          Your cart is empty
        </div>
      )}
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
