"use client";

import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../store/features/authSlice";
import { initialFormValuesInterface } from "@/types/types";



export default function SignUpPage() {
  const API = process.env.API_URL
  const router = useRouter();
  const dispatch = useDispatch();

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
    onSubmit: async(values) => {
      try {
        await signUp(values);
        formik.resetForm();
        router.push("/shop");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const signUp = async (value: initialFormValuesInterface) => {
    try {
      const response = await fetch(`${API}/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      dispatch(
        setCredentials({
          userInfo: data.user,
          token: data.token,
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
          <p className="text-xl md:text-2xl font-bold">Sign Up</p>
          <p className="text-sm md:text-base font-semibold mt-2">
            welcome to gamify, Register here!
          </p>
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-sm md:text-base">
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
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded "
          />
          {formik.touched.email && formik.errors.email ? (
            <h4 className="text-red-500 mt-1 font-bold text-sm">
              {formik.errors.email}
            </h4>
          ) : null}
        </div>

        <div className="mt-4">
          <label
            htmlFor="username"
            className="font-semibold text-sm md:text-base"
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
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded "
          />
          {formik.touched.username && formik.errors.username ? (
            <h4 className="text-red-500 mt-1 font-bold text-sm">
              {formik.errors.username}
            </h4>
          ) : null}
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
            name="password"
            type="password"
            placeholder="password"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <h4 className="text-red-500 mt-1 font-bold text-sm">
              {formik.errors.password}
            </h4>
          ) : null}
        </div>
        <div className="mt-4">
          <label
            htmlFor="confirmPassword"
            className="font-semibold text-sm md:text-base"
          >
            confirm Password
          </label>
          <br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="confirmPassword"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <h4 className="text-red-500 mt-1 font-bold text-sm">
              {formik.errors.confirmPassword}
            </h4>
          ) : null}
        </div>

        <button
          className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5"
          type="submit"
        >
          Sign up
        </button>
        <Link
          href="/login"
          className="text-xs md:text-sm flex justify-center items-center"
        >
          Already have an account?
          <span className="text-secondary">login</span>
        </Link>
      </form>
    </div>
  );
}
