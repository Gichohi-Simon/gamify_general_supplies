import React from 'react'

export default function Categories() {
  return (
    <div className='font-[family-name:var(--font-poppins)]'>
        <p className='mb-4 font-bold'>Filter by category</p>
        <div className='grid grid-cols-3 gap-3'>
        <span className='bg-secondary px-6 py-2 rounded-full hover:bg-primary cursor-pointer text-sm'>
            stretching film
        </span>
        <span className='bg-secondary px-6 py-2 rounded-full hover:bg-primary cursor-pointer text-sm'>
            paint
        </span>
        <span className='bg-secondary px-6 py-2 rounded-full w-auto hover:bg-primary cursor-pointer text-sm'>
            tape
        </span>
        </div>
    </div>
  )
}
