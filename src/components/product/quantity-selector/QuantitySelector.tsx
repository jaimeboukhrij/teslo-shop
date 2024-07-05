'use client'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface Props{
  quantity:number,
  titleClassName?:string,
  countClassName?:string

  onQuantityChanged: (quantity:number) => void
}

export const QuantitySelector = ({ quantity, titleClassName, countClassName, onQuantityChanged }:Props) => {
  countClassName = countClassName || 'p-2 bg-gray-200 px-7 rounded'
  const onChangeValue = (value:number) => {
    if (quantity + value < 1) return
    onQuantityChanged(quantity + value)
  }
  return (
    <div className='flex flex-col gap-3'>
      <h6 className={`font-semibold text-lg ${titleClassName} `}>Cantidad</h6>
      <div className='flex gap-2 items-center'>
        <button onClick={() => onChangeValue(-1)}>
          <FaMinus size={10} />
        </button>
        <span className={countClassName}>{quantity}</span>
        <button onClick={() => onChangeValue(1)}>
          <FaPlus size={10} />
        </button>
      </div>
    </div>
  )
}
