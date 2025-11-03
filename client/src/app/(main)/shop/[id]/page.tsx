"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetSingleProduct } from "@/hooks/useProducts";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const id = params.id as string;

  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetSingleProduct(id);

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.productId === Number(id));
  
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }else{
      setQuantity(1);
    }
  }, [cartItem]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error {error.message}</p>;

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      addToCart({
        productId: Number(id),
        quantity: newQuantity,
      })
    );
  };
  const handleDecrease = () => {
    if (quantity === 1) return; 

      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(
        addToCart({
          productId: Number(id),
          quantity: newQuantity,
        })
      );
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: Number(id),
        quantity,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(Number(id)));
    setQuantity(1);
  };

  if (!data || !data.singleProduct) {
    return <p>No products found.</p>;
  }

  return (
    <div className="md:flex gap-10 my-2 py-12 md:py-24 md:my-5 mx-10 md:mx-20 font-[family-name:var(--font-poppins)]">
      <div className="w-full md:w-1/2 ">
        <div className="relative w-[250px] h-[250px] md:w-[480px] md:h-[480px]">
          <Image
            src={data.singleProduct.image}
            alt={data.singleProduct.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-5 w-full md:w-1/2">
        <div>
          <h5 className="font-semibold text-xl md:text-4xl capitalize tracking-widest">
            {data.singleProduct.name}
          </h5>
          <h5 className="mt-2 md:mt-4 text-sm md:text-2xl font-semibold tracking-wider">
            Ksh {Number(data.singleProduct.price).toLocaleString()}
          </h5>
          <p className="text-[4px] md:text-xs font-semibold tracking-wider mt-[-2px] underline text-blue-500">
            price is exclusive of vat
          </p>
        </div>

        <div className="mt-2 md:mt-6">
          <h6 className="text-xs md:text-sm tracking-wider">select quantity</h6>
          <div className="mt-4 flex items-center">
            <button
              className="bg-gray-100 px-2 md:px-3 py-1 md:py-2 mr-4 cursor-pointer rounded-sm"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className="text-xs md:text-sm">{quantity}</p>
            <button
              className="bg-gray-100 px-2 md:px-3 py-1 md:py-2 ml-4 cursor-pointer rounded-sm"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-4">
           {cartItem ? (
            <button
              className="mt-4 bg-black text-white hover:bg-primary hover:text-black w-full py-3 rounded-xl text-[10px] md:text-sm uppercase"
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="mt-4 bg-black text-white hover:bg-primary hover:text-black w-full py-3 rounded-xl text-[10px] md:text-sm uppercase"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}

          <button className="mt-4 md:mt-6 bg-black text-white hover:bg-primary hover:text-black w-full py-2 md:py-3 rounded-xl text-[10px] md:text-sm uppercase">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
