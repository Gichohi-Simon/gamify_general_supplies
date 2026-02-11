"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCartUser } from "@/store/features/cartSlice";

export default function CartUserSync() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state?.auth.userInfo?.id ?? null);

  const hydratedOnce = useRef(false);
  const previousUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!hydratedOnce.current) {
      hydratedOnce.current = true;
      previousUserId.current = userId;
      dispatch(setCartUser(userId));
      return;
    }

    if (userId !== previousUserId.current) {
      previousUserId.current = userId;
      dispatch(setCartUser(userId));
    }
  }, [userId, dispatch]);

  return null;
}
