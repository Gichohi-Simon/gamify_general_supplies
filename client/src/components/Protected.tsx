"use client";

import React, { useEffect } from "react";
// import { useCheckAuth } from "@/hooks/auth";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/api/auth.api";

type childrenProps = {
  children: React.ReactNode;
};

export default function Protected({ children }: childrenProps) {
  // const { data, isLoading, isError, error } = useCheckAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const checkUser = async () => {
    const data = await checkAuth();
    console.log("data from checkAuth: ", data);
    if(data.user){
      dispatch(
        setCredentials({
          userInfo:data.user
        })
      )
    }else{
      router.replace("/login")
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  // useEffect(() => {
  //   if (!isLoading && data?.user) {
  //     dispatch(
  //       setCredentials({
  //         userInfo: data.user,
  //       })
  //     );
  //   }
  // }, [data?.user, dispatch, isLoading]);

  // useEffect(() => {
  //   if (!isLoading && !data?.user) {
  //     dispatch(setLogout())
  //     router.replace("/login");
  //   }
  // }, [isLoading, data?.user]);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[60px]">
  //       <p className="text-sm">Checking authentication...</p>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   console.error("Auth check failed:", error);
  // }

  // if(!data?.user){
  //   return null
  // }

  return <>{children}</>;
}
