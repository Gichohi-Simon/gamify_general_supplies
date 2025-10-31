import NoOrders from "@/components/NoOrders";
import Protected from "@/components/Protected";

export default function AccounPage() {
  const orders: boolean = false;
  return (
    <Protected>
      <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10 h-screen">
      <p className="text-xl font-bold mb-7">Orders</p>
      {orders ? (
        <>
          <p>your orders</p>
        </>
      ) : (
        <>
          <NoOrders />
        </>
      )}
    </div>
    </Protected>
  );
}
