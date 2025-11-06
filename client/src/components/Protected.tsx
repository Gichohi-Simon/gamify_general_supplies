"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

type childrenProps = {
  children: React.ReactNode;
};

export default function Protected({ children }: childrenProps) {
  const user = useAppSelector((state) => state.auth.userInfo);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60px]">
        <p className="text-sm">Redirecting to login...</p>
      </div>
    );
  }

  return <>{children}</>;
}
