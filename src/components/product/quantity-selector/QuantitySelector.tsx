'use client'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface Props{
  quantity:number
}

export const QuantitySelector = ({ quantity }:Props) => {
  const [count, setcount] = useState(quantity)
  const onChangeQuantity = (value:number) => {
    if (count + value < 1) return
    setcount(prev => prev + value)
  }
  return (
    <div className='flex flex-col gap-3'>
      <h6 className='font-semibold text-lg'>Cantidad</h6>
      <div className='flex gap-4 items-center'>
        <button onClick={() => onChangeQuantity(-1)}>
          <FaMinus size={10} />
        </button>
        <span className='p-2 bg-gray-200 px-7 rounded'>{count}</span>
        <button onClick={() => onChangeQuantity(1)}>
          <FaPlus size={10} />
        </button>
      </div>
    </div>
  )
}
