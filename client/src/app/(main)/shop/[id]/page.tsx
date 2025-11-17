"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetSingleProduct } from "@/hooks/useProducts";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ShoppingCartIcon,
  CheckCircleIcon
} from "@heroicons/react/16/solid";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const params = useParams();
  const id = params.id as string;

  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetSingleProduct(id);

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.productId === id);

  useEffect(() => {
    if (cartItem) setQuantity(cartItem.quantity);
    else setQuantity(1);
  }, [cartItem]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error {error.message}</p>;
  if (!data?.singleProduct) return <p>No product found</p>;

  const product = data.singleProduct;

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="md:flex gap-6 md:gap-12 pt-6 pb-6 md:pt-16 md:pb-24 mx-5 md:mx-12 font-[family-name:var(--font-poppins)]">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="relative w-[150px] h-[150px] md:w-[350px] md:h-[350px]">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex items-center mt-4">
          <button
            onClick={prevImage}
            className="px-3 py-2 rounded-full text-lg mr-2 md:mr-5"
          >
            <ArrowLeftCircleIcon className="size-4 md:size-7" />
          </button>
          <div className="flex gap-4 justify-center flex-wrap">
            {product.images.map((img: string, idx: number) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-14 md:w-28 h-12 md:h-24 border rounded md:rounded-2xl cursor-pointer ${
                  idx === selectedImage ? "border-black" : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-contain rounded-md px-1 py-1 md:px-2 md:py-2"
                />
              </div>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="px-3 py-2 rounded-full text-lg ml-2 md:ml-5"
          >
            <ArrowRightCircleIcon className="size-4 md:size-7" />
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-5 w-full md:w-1/2">
        <h5 className="font-bold text-lg md:text-3xl tracking-widest capitalize mb-1 md:mb-3">
          {product.name}
        </h5>
        <span className="text-[10px] md:text-xs bg-primary px-2 py-1 rounded-sm">{product.category}</span>

        <h5 className="mt-3 md:mt-6 tracking-wider text-xs md:text-sm">
          {product.description}
        </h5>

        <h5 className="mt-2 md:mt-4 text-sm md:text-xl font-semibold tracking-wider">
          Ksh {Number(product.price).toLocaleString()}
        </h5>

        <p className="text-[6px] md:text-xs font-semibold text-blue-500 mt-[-2px] tracking-wider">
          price is exclusive of vat
        </p>

        <div className="mt-2 md:mt-5">
          <div className="mt-2 md:mt-3 flex items-center">
            <button
              className="bg-gray-100 px-3 md:px-4 py-1 md:py-2 mr-2 md:mr-4 rounded-full hover:bg-primary"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </button>

            <p className="text-xs md:text-sm">{quantity}</p>

            <button
              className="bg-gray-100 px-3 md:px-4 py-1 md:py-2 ml-2 md:ml-4 rounded-full hover:bg-primary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-3 md:mt-4">
          {cartItem ? (
            <button
              className="flex justify-center items-center gap-2 mt-2 md:mt-4 bg-primary hover:bg-secondary hover:text-black px-4 py-2 md:py-2 rounded-full text-[10px] md:text-xs uppercase"
              onClick={() => {
                dispatch(removeFromCart(id));
                setQuantity(1);
              }}
            >
              <ShoppingCartIcon className="size-3 md:size-4"/>
              Remove from cart
            </button>
          ) : (
            <button
              className="flex justify-center items-center gap-2 mt-2 md:mt-4 bg-primary  hover:bg-secondary hover:text-black px-4 py-2 md:py-2 rounded-full text-[10px] md:text-xs uppercase"
              onClick={() => dispatch(addToCart({ productId: id, quantity }))}
            >
              <ShoppingCartIcon className="size-3 md:size-4"/>
              Add to Cart
            </button>
          )}

          <Link href="/cart">
            <button className="flex items-center gap-2 mt-2 ml-2 md:mt-4 bg-primary hover:bg-secondary hover:text-black px-4 py-2 md:py-2 rounded-full text-[10px] md:text-xs uppercase">
              <CheckCircleIcon className="size-3 md:size-4"/>
              checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
