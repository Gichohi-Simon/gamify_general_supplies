"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useGetOrderById } from "@/hooks/order";
import { OrderType } from "@/types/types";

type OrderItemType = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: string | number;
  product: {
    name: string;
    images: string[];
  };
};

export default function PremiumOrderPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;
  const { data, isLoading, isError } = useGetOrderById(orderId);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (isError || !data?.order) return <div className="min-h-screen flex items-center justify-center">Error fetching order</div>;

  const order: OrderType & { orderItems: OrderItemType[] } = data.order;

  return (
    <div className="min-h-screen px-4 md:px-12 py-8 font-[family-name:var(--font-poppins)] bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
            <ArrowLeftIcon className="w-5 h-5" /> Back
          </button>
          <div className="text-right">
            <div className="text-xs text-gray-500">Placed</div>
            <div className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-primary">
            <div className="mb-3">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Invoice</div>
              <div className="font-bold text-lg text-gray-800">{order.invoiceNumber}</div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-700"><span className="text-gray-500">Items Price</span><span className="font-medium">KSh {Number(order.itemsPrice).toLocaleString()}</span></div>
              <div className="flex justify-between text-gray-700"><span className="text-gray-500">Tax</span><span className="font-medium">KSh {Number(order.taxPrice).toLocaleString()}</span></div>
              <div className="flex justify-between text-gray-700"><span className="text-gray-500">Shipping</span><span className="font-medium">KSh {Number(order.shippingPrice).toLocaleString()}</span></div>
              <div className="border-t pt-3 flex justify-between items-center font-semibold text-gray-800">
                <span>Total</span>
                <span className="text-lg">KSh {Number(order.totalPrice).toLocaleString()}</span>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {order.isPaid ? 'Paid' : 'Payment Pending'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.isDelivered ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {order.isDelivered ? 'Delivered' : 'Not Delivered'}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            {order.orderItems.map((orderItem: OrderItemType) => (
              <div key={orderItem.id} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-md border-l-4 border-primary hover:shadow-lg transition">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src={orderItem.product.images[0]} alt={orderItem.product.name} fill className="object-cover rounded-md" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-gray-800">{orderItem.product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Qty: {orderItem.quantity}</p>
                </div>
                <div className="text-right min-w-[100px]">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-semibold text-gray-800">KSh {Number(orderItem.price).toLocaleString()}</div>
                  <div className="text-xs text-gray-400 mt-1">Subtotal: KSh {(Number(orderItem.price) * orderItem.quantity).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
