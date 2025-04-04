import React from 'react'

export default function Search() {
  return (
    <div className='font-[family-name:var(--font-poppins)] flex justify-center items-center mt-6 gap-2'>
        <input 
            type='text'
            placeholder='search products'
            className='w-full border border-1 border-primary rounded-lg py-3 px-3'
        />
        <button className='bg-primary py-3 px-2 rounded-lg'>
            search
        </button>
    </div>
  )
}
