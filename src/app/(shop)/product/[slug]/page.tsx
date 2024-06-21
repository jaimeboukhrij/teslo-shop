import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from '@/components'
import { Description } from '@/components/product/description/Description'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'

interface Props{
  params:{
    slug:string
  }
}

export default function ProductPage ({ params }:Props) {
  const { slug } = params
  const product = initialData.products.find(elem => elem.slug === slug)

  if (!product) notFound()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-20 gap-8 py-6'>
      <div className=' col-span-2 '>
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className='block md:hidden '
        />
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className='hidden md:flex flex-col gap-5 '
        />
      </div>
      <div className='flex justify-center pl-4 md:pl-0 flex-col gap-7 '>
        <h1 className='text-xl font-bold '>{product.title}</h1>
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        <QuantitySelector quantity={4} />
        <button className='btn-primary'>Agregar al carrito</button>
        <Description description={product.description} />
      </div>
    </div>
  )
}
