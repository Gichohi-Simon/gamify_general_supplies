"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/features/cartSlice";

export default function CartUserSync() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.userInfo);

  useEffect(() => {
    dispatch(clearCart());
  }, [user?.id, dispatch]);

  return null;
}
