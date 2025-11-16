"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

import Protected from "@/components/Protected";
import NoOrders from "@/components/NoOrders";

import { useGetLoggedInUserOrder } from "@/hooks/order";
import { OrderType } from "@/types/types";
import Image from "next/image";

export default function MyOrders() {
  const { data } = useGetLoggedInUserOrder();
  const orders = data?.orders;

  return (
    <Protected>
      <div className="font-[family-name:var(--font-poppins)] mx-8 md:mx-20 my-5 md:my-10 min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-base md:text-xl capitalize">
              order details
            </p>
            <p className="text-xs md:text-sm lowercase">
              check the status of recent orders
            </p>
          </div>
          <div>
            <Link href="/account">
              <ArrowLeftCircleIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {data?.orders && data.orders.length > 0  ? (
          <div>
            {orders.map((order: OrderType) => (
              <div
                key={order.id}
                className="flex border border-1 rounded-lg mt-4 md:mt-7"
              >
                <div className="w-1/3 md:w-1/4 bg-gray-100 px-3 py-3 md:py-5 md:px-5">
                  <div>
                    <p className="text-xs md:text-sm capitalize text-wider">
                      invoice Number
                    </p>
                    <p className="text-[10px] md:text-xs text-wider font-bold">
                      {order.invoiceNumber}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs md:text-sm capitalize text-wider">
                      Date
                    </p>
                    <p className="text-[10px]  md:text-xs capitalize font-bold">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(order.createdAt))}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs md:text-sm capitalize text-wider">
                      V.A.T
                    </p>
                    <p className="text-[10px] md:text-xs text-wider font-bold">
                      Ksh {Number(order.taxPrice).toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs md:text-sm capitalize text-wider">
                      Shipping Fee
                    </p>
                    <p className="text-[10px] md:text-xs text-wider font-bold">
                      Ksh {Number(order.shippingPrice).toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs md:text-sm capitalize text-wider">
                      payment status
                    </p>
                    <p className="text-[10px]  md:text-xs text-wider mt-2">
                      {order.isPaid ? (
                        <span className="bg-green-400 px-2 py-1 text-xs rounded">
                          paid
                        </span>
                      ) : (
                        <span className="bg-red-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          pending
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs md:text-sm capitalize text-wider">
                      delivery
                    </p>
                    <p className="text-[10px]  md:text-xs text-wider mt-2">
                      {order.isDelivered ? (
                        <span className="bg-green-400 px-2 py-1 text-xs rounded">
                          delivered
                        </span>
                      ) : (
                        <span className="bg-red-400 px-2 py-1 text-[10px] md:text-xs rounded">
                          pending
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-2/3 md:w-3/4 px-2 py-3 md:px-5 md:py-5">
                  {order.orderItems.map((orderItem) => (
                    <div key={orderItem.id} className="">
                      <div className="flex items-center gap-1 md:gap-4 w-full py-1 md:py-3">
                        <div className="h-16 w-16 md:h-28 md:w-28 mt-2 relative">
                          <Image
                            src={orderItem.product.images[0]}
                            alt={orderItem.product.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-sm text-wider font-bold">
                              {orderItem.product.name}
                            </p>
                            <p className="text-[10px] md:text-sm font-bold">
                              Ksh {Number(orderItem.price).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 mt-0 md:mt-2">
                            <p className="text-[10px]  md:text-sm">Quantity</p>
                            <p className="text-[10px]  md:text-sm">
                              {orderItem.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}

                  <div className="flex justify-between items-center">
                    <Link href="#">
                      <button className="text-[8px] md:text-xs bg-primary px-1 py-0.5 md:px-2 md:py-1 rounded-sm mt-6">
                        view invoice
                      </button>
                    </Link>
                    <div className="mt-4">
                      <div className="">
                        <p className="text-[8px] md:text-xs capitalize tracking-wider">
                          Total price
                        </p>
                        <p className="text-[8px] md:text-xs tracking-wider font-bold">
                          Ksh {Number(order.itemsPrice).toLocaleString()}
                        </p>
                      </div>
                      <hr className="mt-2" />
                      <div className="mt-2">
                        <p className="text-[8px] md:text-xs capitalize tracking-wider">
                          VAT
                        </p>
                        <p className="text-[8px] md:text-xs tracking-wider font-bold">
                          Ksh {Number(order.taxPrice).toLocaleString()}
                        </p>
                      </div>
                      <hr className="mt-2" />
                      <div className="mt-2">
                        <p className="text-[8px] md:text-sm capitalize tracking-wider mt-2">
                          total amount
                        </p>
                        <p className="text-[8px] md:text-xs tracking-wider font-bold">
                          Ksh {Number(order.totalPrice).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <NoOrders />
          </>
        )}
      </div>
    </Protected>
  );
}
