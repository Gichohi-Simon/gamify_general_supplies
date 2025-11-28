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
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function UpdateAddress() {
  const router = useRouter();
  const { mutateAsync } = useUpdateDeliverAddress();
  const { data } = useGetLogedInUserAddress();

  const initialValues: Address = {
    companyName: data?.address.companyName ?? "",
    street: data?.address.street ?? "",
    floorNumber: data?.address.floorNumber ?? "",
    city: data?.address.city ?? "",
    postalCode: data?.address.postalCode ?? "",
    phoneNumber: data?.address.phoneNumber ?? "",
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
      phoneNumber: Yup.string().required("phone number is required")
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync(values);
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
        className="w-full md:w-3/4 lg:w-2/3 border border-1 p-6 md:px-6 md:py-8 rounded-xl shadow-sm space-y-5"
      >
        <div>
          <div className="mb-2">
            <Link href="/">
            <span>
              <ArrowLeftCircleIcon className="size-4" />
            </span>
          </Link>
          </div>
          <p className="text-sm font-bold tracking-wider capitalize">
            Update Address
          </p>
          <p className="text-xs">manage your address details here</p>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="companyName"
              className="text-[10px] md:text-xs tracking-wider"
            >
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company name"
              name="companyName"
              className="border border-gray-300 tracking-wider py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          <div className="w-1/2">
            <label
              htmlFor="street"
              className="font-semibold text-[10px] md:text-xs tracking-wider"
            >
              Street
            </label>
            <input
              type="text"
              placeholder="Street name"
              name="street"
              className="tracking-wider border border-gray-300 py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="floorNumber"
              className="text-[10px] md:text-xs tracking-wider"
            >
              Floor Number
            </label>
            <input
              type="text"
              placeholder="Floor number"
              name="floorNumber"
              className="tracking-wider border border-gray-300 py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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

          <div className="w-1/2">
            <label
              htmlFor="city"
              className="text-[10px] md:text-xs tracking-wider"
            >
              City
            </label>
            <input
              type="text"
              placeholder="City"
              name="city"
              className="tracking-wider border border-gray-300 py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
          <label
            htmlFor="postalCode"
            className="text-[10px] md:text-xs tracking-wider"
          >
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Postal code"
            name="postalCode"
            className="tracking-wider border border-gray-300 py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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

        <div className="w-1/2">
          <label
            htmlFor="phoneNumber"
            className="text-[10px] md:text-xs tracking-wider"
          >
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            className="tracking-wider border border-gray-300 py-2 px-3 text-[10px] md:text-xs w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-500 mt-1 font-medium text-xs">
              {formik.errors.phoneNumber}
            </p>
          )}
        </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <button
            type="submit"
            className="tracking-wider bg-secondary hover:bg-primary text-[10px] md:text-xs py-2 px-6 rounded-full transition duration-200"
          >
            Update Address
          </button>
          <button className="tracking-wider bg-secondary hover:bg-primary text-[10px] md:text-xs py-2 px-6 rounded-full transition duration-200">
            continue to checkout
          </button>
        </div>
      </form>
    </div>
  );
}
