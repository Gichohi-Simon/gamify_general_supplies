"use client";

import Protected from "@/components/Protected";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLogout } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { useSignOut } from "@/hooks/auth";
import Link from "next/link";
import UserAddress from "@/components/UserAddress";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export default function AccounPage() {
  const user = useAppSelector((state) => state?.auth.userInfo);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mutateAsync } = useSignOut();

  const handleLogout = async () => {
    try {
      await mutateAsync();
      dispatch(setLogout());
      toast.success("logout succesful");
      router.replace("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong login failed");
      }
    }
  };

  return (
    <Protected>
      <div className="font-[family-name:var(--font-poppins)] mx-[30px] md:mx-[60px] my-5 md:my-10 h-screen">
        <div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <div className="my-4">
                <div className="mb-2 flex justify-between">
                  <div>
                    <p className="text-base md:text-lg font-bold">Orders</p>
                    <p className="text-xs md:text-sm">view orders here</p>
                  </div>
                  <Link href="/">
                    <span>
                      <ArrowLeftCircleIcon className="size-5" />
                    </span>
                  </Link>
                </div>
                <Link href="/orders">
                  <button className="bg-black text-white px-2 py-2 md:px-3 text-xs md:text-sm rounded-lg w-full">
                    view orders
                  </button>
                </Link>
              </div>
              <div className="flex justify-between">
                <div className="mb-2">
                  <p className="text-base md:text-lg font-bold">Profile</p>
                  <p className="text-xs md:text-sm">my profile settings</p>
                </div>
              </div>
              <div className="font-[family-name:var(--font-poppins)] border border-1 py-4 px-6 rounded-lg flex justify-between w-full">
                <div className="flex justify-between w-full">
                  <div className="w-3/4">
                    <div>
                      <p className="text-xs md:text-sm font-bold">Name</p>
                      <p className="text-xs md:text-sm">{user?.username}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs md:text-sm font-bold">Email</p>
                      <p className="text-xs md:text-sm ">{user?.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end items-end w-1/4">
                    <span
                      className="cursor-pointer flex justify-center items-center gap-1 group bg-primary py-2 pl-3 pr-2 rounded-md w-fit font-bold"
                      onClick={handleLogout}
                    >
                      <ArrowRightEndOnRectangleIcon className="size-4" />
                      <p className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[50px] group-hover:opacity-100 transition-all duration-300 text-[10px] md:text-xs whitespace-nowrap">
                        logout
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-4 w-full md:w-1/2">
              <div className="mb-2">
                <p className="text-base md:text-lg font-bold">
                  Customer Address
                </p>
                <p className="text-xs md:text-sm">manage delivery address</p>
              </div>
              <UserAddress />
            </div>
          </div>
        </div>
      </div>
    </Protected>
  );
}
