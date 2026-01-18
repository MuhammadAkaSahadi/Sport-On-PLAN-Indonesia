import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import Footer from "../components/layouts/footer";

export default function Checkout() {
  return (
    <div className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
      <Footer />
    </div>
  );
}
