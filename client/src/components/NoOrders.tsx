import React from 'react'

export default function NoOrders() {
  return (
    <div className='font-[family-name:var(--font-poppins)] bg-gray-100 py-12 rounded-lg'>
        <p className='font-bold text-center capitalize text-sm md:text-base'>no orders yet</p>
        <p className='text-xs md:text-sm text-center mt-3 lowercase'>go to the store and place an order</p>
    </div>
  )
}
