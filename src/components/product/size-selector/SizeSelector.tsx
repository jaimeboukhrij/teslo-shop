import clsx from 'clsx'
import type { Size } from '../../../interfaces/product-interface'

interface Props{
  selectedSize: Size,
  availableSizes: Size[]
}

export function SizeSelector ({ availableSizes, selectedSize }:Props) {
  return (
    <div>
      <h6 className='font-semibold text-lg'>Tamaño</h6>
      <div className='flex gap-2'>
        {
          availableSizes.map(size => (
            <button
              key={size}
              className={
                clsx(
                  'text-lg hover:underline',
                  {
                    underline: size === selectedSize
                  }
                )
              }
            >{size}
            </button>
          ))
        }
      </div>

    </div>
  )
}
