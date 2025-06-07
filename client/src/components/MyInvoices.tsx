import React from "react";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function MyOrders() {
  return (
    <div className="w-full mt-10 md:mt-30">
      <p className="font-semibold text-sm md:text-xl">My invoices</p>
      <div className="border border-1 px-3 py-4 rounded-lg mt-5">
        <h4 className="text-xs md:text-base font-bold">All invoices</h4>
        <hr />

        <div className="overflow-x-auto">
          <table className="table-auto min-w-full text-left">
            <thead>
              <tr>
                <th className="text-xs md:text-base px-4 py-2">
                  Invoice Number
                </th>
                <th className="text-xs md:text-base px-4 py-2">Date</th>
                <th className="text-xs md:text-base px-4 py-2">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xs md:text-sm px-4 py-2">#345612</td>
                <td className="text-xs md:text-sm px-4 py-2">14-6-2013</td>
                <td className="text-xs md:text-sm px-4 py-2">
                  <span className="flex items-center text-blue-500 hover:underline">
                    <ArrowDownIcon className="size-4" />
                    <a href="#" className="">
                      Download
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-xs md:text-sm px-4 py-2">#345678</td>
                <td className="text-xs md:text-sm px-4 py-2">14-5-2013</td>
                <td className="text-xs md:text-sm px-4 py-2">
                  <span className="flex items-center text-blue-500 hover:underline">
                    <ArrowDownIcon className="size-4" />
                    <a href="#" className="">
                      Download
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-xs md:text-sm px-4 py-2">#436749</td>
                <td className="text-xs md:text-sm px-4 py-2">14-9-2014</td>
                <td className="text-xs md:text-sm px-4 py-2">
                  <span className="flex items-center text-blue-500 hover:underline">
                    <ArrowDownIcon className="size-4" />
                    <a href="#" className="">
                      Download
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-xs md:text-sm px-4 py-2">#436749</td>
                <td className="text-xs md:text-sm px-4 py-2">14-9-2014</td>
                <td className="text-xs md:text-sm px-4 py-2">
                  <span className="flex items-center text-blue-500 hover:underline">
                    <ArrowDownIcon className="size-4" />
                    <a href="#" className="">
                      Download
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
