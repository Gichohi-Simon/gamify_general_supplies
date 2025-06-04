import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] flex justify-center items-center">
      <form className="w-3/4 md:w-1/2 py-10 mt-0 md:mt-10">
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
            placeholder="email"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded "
          />
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
            type="text"
            placeholder="username"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded "
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
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
          />
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
            type="password"
            placeholder="confirmPassword"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
          />
        </div>

        <button className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5">
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
