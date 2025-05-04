import AccountOverview from "@/components/AccountOverview";
import MyInvoices from "@/components/MyInvoices";
import React from "react";

export default function AccounPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10">
      <div className="md:flex justify-between gap-10">
        <MyInvoices />
        <AccountOverview />
      </div>
    </div>
  );
}
