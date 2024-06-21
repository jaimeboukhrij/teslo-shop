import { getPaginatedProductWithImages } from '@/actions'
import { ProductGrid, Title } from '@/components'

interface Props {
  searchParams:{
    page?:string
  }
}

export default async function Home ({ searchParams }:Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products } = await getPaginatedProductWithImages({ page })
  return (
    <section className='px-6'>
      <Title
        title='Tienda'
        subtitle='Todos los productos'
      />
      <ProductGrid products={products} />
    </section>

  )
}
