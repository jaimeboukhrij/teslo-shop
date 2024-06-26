'use server'

import prisma from '@/lib/prisma'

interface Props {
  page?:number,
  take?:number
}

export const getPaginatedProductWithImages = async ({ page = 1, take = 12 }:Props) => {
  if (isNaN(Number(page))) page = 1
  if (page < 1) page = 1
  try {
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      }
    })

    return {
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    }
  } catch (error) {
    throw new Error('No se han cargado los productos correctamente')
  }
}
