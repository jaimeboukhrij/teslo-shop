import { Resume } from '../resume/Resume'
import { ProductsOnCart } from '../products-cart/ProductsOnCart'
import Link from 'next/link'

export const MobileCart = () => {
  return (
    <section className='grid grid-cols-1 pt-8 md:hidden'>
      <div className='px-6 overflow-auto pb-[17vh]'>
        <h2 className='text-2xl font-semibold mb-6'>Carrito</h2>
        <div className='flex flex-col gap-5 py-8 border-t-[1px] border-b-[1px] border-b-black'>
          <ProductsOnCart />
        </div>
        <Resume />

      </div>
      <div className='fixed flex items-center bottom-0 left-0 px-2 h-[15vh] w-full bg-white rounded-md shadow-top'>
        <Link
          href='/checkout/address'
          className='btn-primary w-full m-auto text-center'
        >Caja
        </Link>
      </div>
    </section>

  )
}
