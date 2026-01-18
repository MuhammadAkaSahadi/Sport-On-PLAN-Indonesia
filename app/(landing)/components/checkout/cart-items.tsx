"use client";

import { useRouter } from "next/navigation";
import { cartList } from "../ui/cart-popup";
import CardWithHeader from "../ui/card-with-header";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";

export default function CartItems() {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const payment = () => {};

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px]">
        {cartList.map((item, index) => (
          <div
            className="font-medium text-sm flex gap-4 border-b border-gray-200 py-5"
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
      </div>

      <div className="">
        <div className="flex justify-between pt-3 font-semibold">
          <div className="">Total</div>
          <div className="text-primary">{priceFormatter(totalPrice)}</div>
        </div>
        <Button
          variant="dark"
          className="w-full mt-4"
          onClick={() => push("/payment")}
        >
          <FiCreditCard />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
}
