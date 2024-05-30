import { ProductGrid, Title } from '@/components'
import { Product, Category } from '@/interfaces'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'

interface Props{
  params:{
    id:Category
  }
}

export default function CategoryPage ({ params }:Props) {
  const { id } = params
  //  if (id !== Validc) notFound()
  const products:Product[] = initialData.products.filter(elem => elem.gender === id)
  const labels: Record<Category, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
    unisex: 'todos'
  }
  return (
    <section>
      <Title
        title={`Tienda para ${labels[id]} `}
        subtitle='Todos los productos'
      />
      <ProductGrid products={products} />
    </section>
  )
}
