'use client'
import Image from 'next/image'
import { QuantitySelector } from '../../product/quantity-selector/QuantitySelector'
import { useCartStore } from '@/store'
import Link from 'next/link'

export const ProductsOnCart = () => {
  const productsOnCart = useCartStore(state => state.cart)

  return (
    productsOnCart.map(product => (
      <div
        key={product.id}
        className='flex justify-between gap-4  '
      >
        <Link
          href={`/product/${product.slug}`}
        >
          <Image
            src={`/products/${product.image}`}
            height={90}
            width={90}
            alt={product.title}
            className='col-span-2 lg:w-[110px] '
          />
        </Link>
        <div className='w-[50%] font-medium text-sm flex flex-col  gap-2'>
          <Link
            href={`/product/${product.slug}`}
          >
            <h6 className='text-gray-900 lg:text-xl'>{product.title}</h6>

          </Link>
          <span className='flex gap-6'>
            <QuantitySelector
              quantity={product.quantity}
              titleClassName='hidden'
              countClassName='rounded bg-gray-100 p-1'
              // onQuantityChanged={onQuantityChange}
            />
            <button className='font-normal underline text-gray-600'>Quitar</button>
          </span>
        </div>
        <span className='w-[25%] flex justify-center  lg:text-lg font-semibold'>{product.price.toFixed(2)} €</span>
      </div>
    ))

  )
}
