import { Product } from '@/interfaces'
import Image from 'next/image'
import { QuantitySelector } from '../../product/quantity-selector/QuantitySelector'

interface Props{
  product: Product
}

export const ProductsOnCart = ({ product }:Props) => {
  return (
    <div className='flex justify-between gap-4  '>
      <Image
        src={`/products/${product.images[0]}`}
        height={90}
        width={90}
        alt={product.title}
        className='col-span-2 lg:w-[110px] '
      />
      <div className='w-[50%] font-medium text-sm flex flex-col  gap-2'>
        <h6 className='text-gray-900 lg:text-xl'>{product.title}</h6>
        <span className='flex gap-6'>
          <QuantitySelector quantity={3} titleClassName='hidden' countClassName='rounded bg-gray-100 p-1' />
          <button className='font-normal underline text-gray-600'>Quitar</button>
        </span>
      </div>
      <span className='w-[25%] flex justify-center  lg:text-lg font-semibold'>{product.price.toFixed(2)} €</span>
    </div>
  )
}
