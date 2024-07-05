import { getPaginatedProductWithImages } from '@/actions'
import { Pagination, ProductGrid, Title } from '@/components'
import { redirect } from 'next/navigation'
export const revalidate = 60

interface Props {
  searchParams:{
    page?:string
  }
}

export default async function Home ({ searchParams }:Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products, totalPages } = await getPaginatedProductWithImages({ page })

  if (products.length === 0) {
    redirect('/')
  }
  return (
    <section className='px-6'>

      <Title
        title='Tienda'
        subtitle='Todos los productos'
      />
      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </section>

  )
}
