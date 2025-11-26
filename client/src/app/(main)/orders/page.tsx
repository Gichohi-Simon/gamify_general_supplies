"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

import Protected from "@/components/Protected";
import NoOrders from "@/components/NoOrders";

import { useGetLoggedInUserOrder } from "@/hooks/order";
import { OrderType } from "@/types/types";

export default function MyOrders() {
  const { data } = useGetLoggedInUserOrder();
  const orders = data?.orders;

  return (
    <Protected>
      <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10 min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-base md:text-xl capitalize">
              My Orders
            </p>
            <p className="text-xs md:text-sm lowercase">
              View your previous order history
            </p>
          </div>

          <Link href="/account">
            <ArrowLeftCircleIcon className="w-5 h-5" />
          </Link>
        </div>

        {orders && orders.length > 0 ? (
          <div className="mt-6 overflow-x-auto border rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Invoice No.</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Date</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">VAT</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Shipping</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Payment</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Delivery</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Total</th>
                  <th className="px-4 py-3 text-xs md:text-sm font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order: OrderType) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-[10px] md:text-xs font-semibold">
                      {order.invoiceNumber}
                    </td>

                    <td className="px-4 py-3 text-[10px] md:text-xs">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(order.createdAt))}
                    </td>

                    <td className="px-4 py-3 text-[10px] md:text-xs">
                      Ksh {Number(order.taxPrice).toLocaleString()}
                    </td>

                    <td className="px-4 py-3 text-[10px] md:text-xs">
                      Ksh {Number(order.shippingPrice).toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      {order.isPaid ? (
                        <span className="bg-green-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          Paid
                        </span>
                      ) : (
                        <span className="bg-red-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          Pending
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {order.isDelivered ? (
                        <span className="bg-green-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          Delivered
                        </span>
                      ) : (
                        <span className="bg-red-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          Pending
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3 text-[10px] md:text-xs font-bold">
                      Ksh {Number(order.totalPrice).toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      <Link
                        href={`/orders/${order.id}`}
                        className="bg-primary text-white text-[10px] md:text-xs px-3 py-1 rounded-full hover:bg-secondary transition"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <NoOrders />
        )}
      </div>
    </Protected>
  );
}
