import OrderSummary from "@/components/OrderSummary";
import PlaceOrder from "@/components/PlaceOrder";
import UserAddress from "@/components/UserAddress";
import React from "react";

export default function CheckoutPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10 h-auto">
      <UserAddress />
      <OrderSummary />
      <PlaceOrder />
    </div>
  );
}
