import { ProductGrid, Title } from '@/components'
import { initialData } from '@/seed/seed'

const products = initialData.products

export default function Home () {
  return (
    <section>
      <Title
        title='Tienda'
        subtitle='Todos los productos'
      />
      <ProductGrid products={products} />
    </section>

  )
}
