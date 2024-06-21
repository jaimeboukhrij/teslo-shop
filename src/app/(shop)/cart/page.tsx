import { Cart, MobileCart } from '@/components'
import { initialData } from '@/seed/seed'

const productsOnCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function CartPage () {
  return (
    <>
      <Cart productsOnCart={productsOnCart} />
      <MobileCart productsOnCart={productsOnCart} />
    </>
  )
}
