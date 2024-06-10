'use client'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface Props{
  quantity:number,
  titleClassName?:string,
  countClassName?:string
}

export const QuantitySelector = ({ quantity, titleClassName, countClassName }:Props) => {
  countClassName = countClassName || 'p-2 bg-gray-200 px-7 rounded'
  const [count, setcount] = useState(quantity)
  const onChangeQuantity = (value:number) => {
    if (count + value < 1) return
    setcount(prev => prev + value)
  }
  return (
    <div className='flex flex-col gap-3'>
      <h6 className={`font-semibold text-lg ${titleClassName} `}>Cantidad</h6>
      <div className='flex gap-2 items-center'>
        <button onClick={() => onChangeQuantity(-1)}>
          <FaMinus size={10} />
        </button>
        <span className={countClassName}>{count}</span>
        <button onClick={() => onChangeQuantity(1)}>
          <FaPlus size={10} />
        </button>
      </div>
    </div>
  )
}
