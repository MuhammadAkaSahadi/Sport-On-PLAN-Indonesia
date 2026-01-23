"use client";

import { useRouter } from "next/navigation";
import CardWithHeader from "../ui/card-with-header";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void; 
}

export default function CartItems({handlePayment} : TCartItems) {
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
        <div className="overflow-auto max-h-[300px]">
          {items.length ? (
            items.map((item) => (
              <div
                className="font-medium text-sm flex gap-4 border-b border-gray-200 py-5"
                key={item._id}
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
                    <div className="text-primary">
                      {priceFormatter(item.price)}
                    </div>
                  </div>
                </div>
                <Button
                  className="w-7 h-7 p-0! self-center ml-auto"
                  variant="ghost"
                  size="small"
                  onClick={() => removeItem(item._id)}
                >
                  <FiTrash2 />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center pt-5 text-gray-400">
              Your cart is empty
            </div>
          )}
        </div>

        <div className="">
          <div className="flex justify-between pt-3 font-semibold">
            <div className="">Total</div>
            <div className="text-primary">{priceFormatter(totalPrice)}</div>
          </div>
          <Button
            variant="dark"
            className="w-full mt-4"
            onClick={handlePayment}
          >
            <FiCreditCard />
            Proceed to Payment
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
}
