import { getPaginatedProductWithImages } from '@/actions'
import { Pagination, ProductGrid, Title } from '@/components'
import { Category } from '@/interfaces'
import { generatePaginationNumbers } from '@/utils'

interface Props{
  params:{
    gender:Category,
  }
  searchParams:{
    page:number | undefined
  }
}

export default async function CategoryPage ({ params, searchParams }:Props) {
  const { gender } = params
  const { page } = searchParams
  const { products, currentPage, totalPages } = await getPaginatedProductWithImages({ gender, page })
  generatePaginationNumbers(currentPage, totalPages)
  const labels: Record<Category, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
    unisex: 'todos'
  }
  return (
    <section>
      <Title
        title={`Tienda para ${labels[gender]} `}
        subtitle='Todos los productos'
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />

    </section>
  )
}
