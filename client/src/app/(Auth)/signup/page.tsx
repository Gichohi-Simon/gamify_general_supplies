"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "../../../store/features/authSlice";
import { initialFormValuesInterface, User } from "@/types/types";
import { useSignUp } from "@/hooks/auth";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { toast } from "sonner";

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutateAsync } = useSignUp();

  const initialValues: initialFormValuesInterface = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("email is required"),
      username: Yup.string().required("username is required"),
      password: Yup.string().required("password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("confirm password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const data = await mutateAsync(values);
        console.log("data from signup", data);
        formik.resetForm();
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="font-[family-name:var(--font-poppins)] flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-3/4 md:w-4/12 bg-white px-4 md:px-8 py-6 rounded-xl"
        onSubmit={formik.handleSubmit}
      >
        <p className="text-center font-semibold text-2xl uppercase tracking-wider">
          Gamify
        </p>
        <p className="text-xs text-center text-primary font-bold">
          general supplies.
        </p>
        <div className="mt-5 mb-3">
          <p className="text-lg md:text-2xl tracking-wider font-bold">
            Register
          </p>
          <p className="text-xs md:text-sm">
            welcome to gamify, Register here!
          </p>
        </div>
        <GoogleLoginButton
          onLogin={(user: User) => {
            dispatch(setCredentials({ userInfo: user }));
            toast.success("Google login successful");
            router.push("/shop");
          }}
        />
        <div>
          <label htmlFor="email" className="font-semibold text-xs md:text-sm">
            email
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded-md"
          />
          {formik.touched.email && formik.errors.email ? (
            <h4 className="text-red-500 mt-1 font-bold text-xs">
              {formik.errors.email}
            </h4>
          ) : null}
        </div>

        <div className="mt-4">
          <label
            htmlFor="username"
            className="font-semibold text-xs md:text-sm"
          >
            username
          </label>
          <br />
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded-md"
          />
          {formik.touched.username && formik.errors.username ? (
            <h4 className="text-red-500 mt-1 font-bold text-xs">
              {formik.errors.username}
            </h4>
          ) : null}
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="font-semibold text-xs md:text-sm"
          >
            password
          </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded"
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
        <div className="mt-4">
          <label
            htmlFor="confirmPassword"
            className="font-semibold text-xs md:text-sm lowercase"
          >
            confirm Password
          </label>
          <br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="confirmPassword"
            className="border border-1 py-2 px-2 text-xs md:text-sm w-full mt-2 rounded-md"
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <h4 className="text-red-500 mt-1 font-bold text-xs">
              {formik.errors.confirmPassword}
            </h4>
          ) : null}
        </div>

        <button
          className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5 rounded-md lowercase"
          type="submit"
        >
          Sign up
        </button>
        <Link
          href="/login"
          className="text-xs md:text-sm flex justify-center items-center gap-1 lowercase font-semibold"
        >
          Already have an account?
          <span className="text-secondary">login</span>
        </Link>
      </form>
    </div>
  );
}
