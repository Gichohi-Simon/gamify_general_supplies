import AccountOverview from "@/components/AccountOverview";
import MyInvoices from "@/components/MyInvoices";

export default function AccounPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10">
      <div className="">
        <AccountOverview />
        <MyInvoices />
      </div>
    </div>
  );
}
