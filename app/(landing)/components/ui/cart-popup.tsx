import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./button";
import { FiTrash2 } from "react-icons/fi";

export default function CartPopop() {
  const cartList = [
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

  const { push } = useRouter();

  const handleCheckout = () => {
    push("/checkout");
  };

  const totalPrice = cartList.reduce(
    // reduce() adalah fungsi array untuk menggabungkan semua isi array menjadi satu nilai.
    (total, item) => total + item.price * item.qty,
    0
    // total = accumulator, item = currentValue, 0 = nilaiAwal
  );

  return (
    <div className="">
      <div className="">Shopping Cart</div>
      {cartList.map((item, index) => (
        <div className="" key={index}>
          <div>
            <Image
                src={`/images/public/${item.imgUrl}`}
                width={63}
                height={63}
                alt=""
                className=""
            />
          </div>
          <div className="">
            <div className="">{item.name}</div>
            <div className="">
              <div>{item.qty}</div>
              <div className="">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button className="">
            <FiTrash2 />
          </Button>
        </div>
      ))}
    </div>
  );
}
