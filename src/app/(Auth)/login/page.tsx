import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="font-[family-name:var(--font-poppins)] flex justify-center items-center">
      <form className="w-3/4 md:w-1/2 py-10 mt-0 md:mt-10">
       <div className="my-5">
       <p className="text-xl md:text-2xl font-bold">login</p>
       <p className="text-sm md:text-base font-semibold mt-2">welcome to gamify store, login to continue.</p>
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
          <label htmlFor="password" className="font-semibold text-sm md:text-base">
            password
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            className="border border-1 py-2 px-2 text-sm md:text-base w-full mt-2 rounded"
          />
        </div>
        <button className="bg-primary mt-8 py-2 w-full text-xs md:text-sm mb-5">login</button>
        <Link href="/signup" className="text-xs md:text-sm flex justify-center items-center">
        Don&apos;t have an account? <span className="text-secondary">sign up</span>
        </Link>
      </form>
    </div>
  );
}
