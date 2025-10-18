"use client";

import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { loginInitialValues } from "@/types/types";
import { setCredentials } from "@/store/features/authSlice";

export default function LoginPage() {
  const API = process.env.API_URL
  
  const router = useRouter();
  const dispatch = useAppDispatch();

  const initialValues: loginInitialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("email is required"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values);
        formik.resetForm();
        router.push("/shop");
      } catch (error) {
        console.error(error);
      }
    },
  });

  const login = async (values: loginInitialValues) => {
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      dispatch(
        setCredentials({
          userInfo: data.user,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="font-[family-name:var(--font-poppins)] flex justify-center items-center">
      <form
        className="w-3/4 md:w-1/2 py-10 mt-0 md:mt-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-5">
          <p className="text-xl md:text-2xl font-bold">login</p>
          <p className="text-sm md:text-base font-semibold mt-2">
            welcome to gamify store, login to continue.
          </p>
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-sm md:text-base">
            email
          </label>
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="font-semibold text-sm md:text-base"
          >
            password
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <button
          className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5"
          type="submit"
        >
          login
        </button>

        <Link
          href="/signup"
          className="text-xs md:text-sm flex justify-center items-center"
        >
          Don&apos;t have an account?{" "}
          <span className="text-secondary">sign up</span>
        </Link>
      </form>
    </div>
  );
}
