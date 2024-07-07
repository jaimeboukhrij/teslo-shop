import { ProductsOnCart } from './products-cart/ProductsOnCart'
import { Resume } from './resume/Resume'
import Link from 'next/link'

export const Cart = () => {
  return (
    <section className='hidden md:flex flex-col justify-between  pt-8 max-w-[1400px] m-auto h-full '>
      <div className='fle flex-col justify-start p-5'>
        <h2 className='text-3xl font-semibold mb-6 '>Carrito</h2>

        <div className='grid  grid-cols-2 gap-12 mb-20 justify-items-center  w-full  '>

          <div className='overflow-auto w-full '>
            <div className='flex flex-col gap-12 py-8 '>
              <ProductsOnCart />
            </div>
          </div>

          <div className=' flex flex-col px-4 pt-4 pb-2 my-8 h-[min-content]  w-full max-w-[500px] bg-white rounded-md shadow-top'>
            <Resume />
            <Link
              href='/checkout/address'
              className='btn-primary w-full m-auto text-center'
            >Caja
            </Link>
          </div>

        </div>
      </div>

    </section>

  )
}
