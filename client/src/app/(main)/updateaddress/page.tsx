"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import {
  useUpdateDeliverAddress,
  useGetLogedInUserAddress,
} from "@/hooks/address";
import { Address } from "@/types/types";

export default function UpdateAddress() {
  const router = useRouter();
  const { mutate } = useUpdateDeliverAddress();
  const { data } = useGetLogedInUserAddress();

  const initialValues: Address = {
    companyName: data?.address.companyName ?? "",
    street: data?.address.street ?? "",
    floorNumber: data?.address.floorNumber ?? "",
    city: data?.address.city ?? "",
    postalCode: data?.address.postalCode ?? "",
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      companyName: Yup.string().required("company name is required"),
      street: Yup.string().required("street name is required"),
      floorNumber: Yup.string(),
      city: Yup.string().required("city is a required field"),
      postalCode: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const data = mutate(values);
        console.log(data);
        formik.resetForm();
        router.push("/checkout");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="font-[family-name:var(--font-poppins)] flex justify-center mt-8 px-4 mb-14 md:mb-20">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-3/4 lg:w-2/3 bg-gray-100 p-6 md:p-10 rounded-xl shadow-sm space-y-5"
      >
        <p className="text-lg font-semibold tracking-wider capitalize">Update Address</p>
        <div>
          <label
            htmlFor="companyName"
            className="font-semibold text-xs md:text-sm tracking-wider"
          >
            Company Name
          </label>
          <input
            type="text"
            placeholder="Company name"
            name="companyName"
            className="border border-gray-300 tracking-wider py-2 px-3 text-xs md:text-sm w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="street" className="font-semibold text-xs md:text-sm tracking-wider">
            Street
          </label>
          <input
            type="text"
            placeholder="Street name"
            name="street"
            className="tracking-wider border border-gray-300 py-2 px-3 text-xs md:text-sm w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
          {formik.touched.street && formik.errors.street && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.street}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="floorNumber"
            className="font-semibold text-xs md:text-sm tracking-wider"
          >
            Floor Number
          </label>
          <input
            type="text"
            placeholder="Floor number"
            name="floorNumber"
            className="tracking-wider border border-gray-300 py-2 px-3 text-xs md:text-sm w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.floorNumber}
          />
          {formik.touched.floorNumber && formik.errors.floorNumber && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.floorNumber}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="font-semibold text-xs md:text-sm tracking-wider">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            name="city"
            className="tracking-wider border border-gray-300 py-2 px-3 text-xs md:text-sm w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.city}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="postalCode"
            className="font-semibold text-xs md:text-sm tracking-wider"
          >
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Postal code"
            name="postalCode"
            className="tracking-wider border border-gray-300 py-2 px-3 text-xs md:text-sm w-full mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.postalCode}
            </p>
          )}
        </div>

        <div className="pt-4 flex gap-4">
          <button
            type="submit"
            className="tracking-wider bg-primary text-xs font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Update Address
          </button>
          <button
            className="tracking-wider bg-primary text-xs font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            continue to checkout
          </button>
        </div>
      </form>
    </div>
  );
}
