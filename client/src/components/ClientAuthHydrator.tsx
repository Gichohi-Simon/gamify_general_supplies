"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/features/authSlice";

const ClientAuthHydrator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      dispatch(setCredentials(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return null; // this component does not render anything.
};

export default ClientAuthHydrator;
