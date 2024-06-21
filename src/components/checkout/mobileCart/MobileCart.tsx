import React from 'react'
import { Resume } from '../resume/Resume'
import { Product } from '@/interfaces'
import { ProductsOnCart } from '../products-cart/ProductsOnCart'
import Link from 'next/link'

interface Props{
  productsOnCart: Product[]
}

export const MobileCart = ({ productsOnCart }:Props) => {
  return (
    <section className='grid grid-cols-1 pt-8 md:hidden'>
      <div className='px-6 overflow-auto pb-[17vh]'>
        <h2 className='text-2xl font-semibold mb-6'>Carrito</h2>
        <div className='flex flex-col gap-5 py-8 border-t-[1px] border-b-[1px] border-b-black'>
          {productsOnCart.map((product) => (
            <ProductsOnCart product={product} key={product.slug} />
          ))}
        </div>
        <Resume />
        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='text-sm text-gray-500'>Tesla @ 2024</p>
          <p className='text-sm text-gray-500'>Privacidad y legal</p>
        </div>
      </div>
      <div className='fixed flex items-center bottom-0 left-0 px-2 h-[15vh] w-full bg-white rounded-md shadow-top'>
        <Link
          href='/order/123'
          className='btn-primary w-full m-auto text-center'
        >Proceder al pago
        </Link>
      </div>
    </section>

  )
}
