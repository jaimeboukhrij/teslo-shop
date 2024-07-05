import { ProductMobileSlideshow, ProductSlideshow, StockLabel } from '@/components'
import { Description } from '@/components/product/description/Description'
import { getProductBySlug } from '@/utils'
import { notFound } from 'next/navigation'

import type { Metadata, ResolvingMetadata } from 'next'
import { AddToCart } from './ui/AddToCart'

export const revalidate = 604800

interface Props{
  params:{
    slug:string
  }
}

export async function generateMetadata ({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = params

  const product = await getProductBySlug(slug)

  return {
    title: product?.slug ?? 'Producto no encontrado',
    description: product?.description,
    openGraph: {
      title: product?.slug ?? 'Producto no encontrado',
      description: product?.description,
      images: [`/prodcuts/${product?.images[1]}`]
    }
  }
}

export default async function ProductPage ({ params }:Props) {
  const { slug } = params
  const product = await getProductBySlug(slug)

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
        <StockLabel slug={product.slug} />
        <div>
          <h1 className='text-xl font-bold '>{product.title}</h1>
          <h3 className='text-lg '>{product.price}€</h3>
        </div>

        <AddToCart product={product} />

        <Description description={product.description} />
      </div>
    </div>
  )
}
