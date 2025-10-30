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
  const API = process.env.NEXT_PUBLIC_API_URL;

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
    <div className="font-[family-name:var(--font-poppins)] flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-3/4 md:w-4/12  bg-white px-4 md:px-8 py-6 rounded-xl"
        onSubmit={formik.handleSubmit}
      >
        <p className="text-center font-semibold text-2xl uppercase tracking-wider">
          Gamify
        </p>
        <p className="text-xs text-center text-primary font-bold">
          general supplies.
        </p>
        <div className="mt-5 mb-3">
          <p className="text-lg md:text-2xl tracking-wider font-bold">login</p>
          <p className="text-xs md:text-sm">
            welcome to gamify store, login to continue.
          </p>
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-xs md:text-sm">
            email
          </label>
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
           {formik.touched.email && formik.errors.email ? (
            <h4 className="text-red-500 mt-1 font-bold text-xs">
              {formik.errors.email}
            </h4>
          ) : null}
        </div>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="font-semibold text-xs md:text-sm"
          >
            password
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
           {formik.touched.password && formik.errors.password ? (
            <h4 className="text-red-500 mt-1 font-bold text-xs">
              {formik.errors.password}
            </h4>
          ) : null}
        </div>
        <button
          className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5 rounded-md lowercase"
          type="submit"
        >
          login
        </button>

        <Link
          href="/signup"
          className="text-xs md:text-sm flex justify-center items-center gap-1 lowercase font-semibold"
        >
          Don&apos;t have an account ?{" "}
          <span className="text-secondary">sign up</span>
        </Link>
      </form>
    </div>
  );
}
