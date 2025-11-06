"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCartUser } from "@/store/features/cartSlice";

export default function CartUserSync() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.auth.userInfo);
  const previousUserId = useRef<string | null>(null);
  
  useEffect(() => {
    if(user?.id !== previousUserId.current){
      previousUserId.current = user?.id || null;
      dispatch(setCartUser(user?.id || null))
    }
  }, [user?.id, dispatch]);

  return null;
}
