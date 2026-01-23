import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import Footer from "../../components/layouts/footer";
import { getTransactionById } from "@/app/services/transaction";
import OrderRejected from "../../components/order-status/order-rejected";

type TPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderStatus({ params }: TPageProps) {
  const { id } = await params;
  const transaction = await getTransactionById(id);

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto pt-20 pb-10">
        <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
      </div>
      {transaction.status === "pending" && <OrderSubmitted />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderRejected />}
      <Footer />
    </main>
  );
}
