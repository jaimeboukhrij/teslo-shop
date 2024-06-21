import React from 'react'
import { Product } from '@/interfaces'
import { ProductsOnCart } from './products-cart/ProductsOnCart'
import Link from 'next/link'
import { Resume } from './resume/Resume'

interface Props{
  productsOnCart: Product[]
}

export const Cart = ({ productsOnCart }:Props) => {
  return (
    <section className='hidden md:flex flex-col justify-between  pt-8 max-w-[1400px] m-auto h-full'>
      <div className='fle flex-col justify-start p-5'>
        <h2 className='text-3xl font-semibold mb-6 '>Carrito</h2>

        <div className='grid  grid-cols-2 gap-12 mb-20 justify-items-center  w-full  '>

          <div className='overflow-auto w-full '>
            <div className='flex flex-col gap-12 py-8 '>
              {productsOnCart.map((product) => (
                <ProductsOnCart product={product} key={product.slug} />
              ))}
            </div>
          </div>

          <div className=' flex flex-col px-4 pt-4 pb-2 my-8 h-[min-content]  w-full max-w-[500px] bg-white rounded-md shadow-top'>
            <Resume />
            <Link
              href='/order/123'
              className='btn-primary w-full m-auto text-center'
            >Proceder al pago
            </Link>
          </div>

        </div>
      </div>

      <div className=' w-full bottom-4 flex flex-col justify-center items-center gap-2'>
        <p className='text-sm text-gray-500'>Tesla @ 2024</p>
        <p className='text-sm text-gray-500'>Privacidad y legal</p>
      </div>

    </section>

  )
}
