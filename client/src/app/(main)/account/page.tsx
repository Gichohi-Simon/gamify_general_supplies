"use client";

import Protected from "@/components/Protected";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLogout } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { useSignOut } from "@/hooks/auth";
import Link from "next/link";
import UserAddress from "@/components/UserAddress";

export default function AccounPage() {
  const user = useAppSelector((state) => state?.auth.userInfo);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {mutateAsync} = useSignOut();

  const handleLogout = async () => {
    try {
      await mutateAsync();
      dispatch(setLogout());
      router.replace("/login");
    } catch (error) {
      console.error("logout error:", error);
    }
  };
  
  return (
    <Protected>
      <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10 h-screen">
        <p className="text-xl font-bold mb-2">Profile</p>
        <div className="font-[family-name:var(--font-poppins)] border border-1 py-6 px-6 rounded-lg flex justify-between">
          <div>
            <div>
              <p className="text-xs md:text-sm font-bold">Name</p>
              <p className="mt-[-5] text-xs md:text-sm">{user?.username}</p>
            </div>
            <div className="mt-2">
              <p className="text-xs md:text-sm font-bold">Email</p>
              <p className="mt-[-5] text-xs md:text-sm ">{user?.email}</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
           <Link href="/orders">
             <button
              className="bg-primary px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-xs rounded-sm"
            >
              view orders
            </button>
           </Link>
            <button
              className="bg-red-500 text-white px-2 py-1 md:px-3 md:py-2 text-[10px] md:text-xs rounded-sm"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>

        <div className="mt-4">
          <UserAddress />
        </div>
      </div>
    </Protected>
  );
}
