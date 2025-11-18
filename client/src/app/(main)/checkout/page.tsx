import OrderSummary from "@/components/OrderSummary";
import PlaceOrder from "@/components/PlaceOrder";
import Protected from "@/components/Protected";
import UserAddress from "@/components/UserAddress";
import React from "react";

export default function CheckoutPage() {
  return (
   <Protected>
     <div className="font-[family-name:var(--font-poppins)] mx-[30px] md:mx-[60px] my-5 md:my-10 h-auto">
      <h4 className="text-sm md:text-base font-bold mb-6 capitalize tracking-wider">Order Summary</h4>
      <div className="md:flex w-full gap-10">
        <div className="w-full">
          <UserAddress />
        </div>
        <div className="w-full">
          <OrderSummary />
           <PlaceOrder />
        </div>
      </div>
    </div>
   </Protected>
  );
}
