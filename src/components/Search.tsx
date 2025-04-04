import React from 'react'

export default function Search() {
  return (
    <div className='mb-4 font-[family-name:var(--font-poppins)] flex justify-center items-center mt-6 gap-2'>
        <input 
            type='text'
            placeholder='search products'
            className='w-full border border-1 border-primary rounded-xl md:rounded-lg py-2 px-2 md:py-3 md:px-3 text-xs md:text-sm'
        />
        <button className='bg-primary py-2 md:py-3 px-2 rounded-lg text-xs md:text-sm'>
            search
        </button>
    </div>
  )
}
