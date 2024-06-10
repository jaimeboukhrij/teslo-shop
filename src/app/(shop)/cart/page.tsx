import { MobileCart } from '@/components'
import { initialData } from '@/seed/seed'

const productsOnCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function MobileCartPage () {
  return (
    <div className='md:hidden'>
      <MobileCart productsOnCart={productsOnCart} />
    </div>
  )
}
