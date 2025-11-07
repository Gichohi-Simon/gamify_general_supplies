"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

type childrenProps = {
  children: React.ReactNode;
};

export default function Protected({ children }: childrenProps) {
  const { userInfo, initialized } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (initialized && !userInfo) {
      router.replace("/login");
    }
  }, [initialized, userInfo, router]);

  if (!initialized) {
    return (
      <div className="flex justify-center items-center min-h-[60px]">
        <p className="text-sm">Checking authentication...</p>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="flex justify-center items-center min-h-[60px]">
        <p className="text-sm">Redirecting to login...</p>
      </div>
    );
  }

  return <>{children}</>;
}
