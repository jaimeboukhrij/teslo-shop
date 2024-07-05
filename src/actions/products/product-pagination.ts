import prisma from '@/lib/prisma'
import { Gender } from '@prisma/client'

interface Props {
  page?: number,
  take?: number,
  gender?: Gender
}

export const getPaginatedProductWithImages = async ({ page = 1, take = 12, gender }: Props) => {
  if (isNaN(Number(page))) page = 1
  if (page < 1) page = 1
  try {
    const whereCondition = gender ? { gender } : {}

    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2, // solo tomar 2 imagenes
          select: {
            url: true
          }
        }
      },
      skip: (page - 1) * take,
      take,
      where: whereCondition
    })

    const totalCount = await prisma.product.count({
      where: whereCondition
    })
    const totalPages = Math.ceil(totalCount / take)

    return {
      currentPage: page,
      totalPages,
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    }
  } catch (error) {
    throw new Error('No se han cargado los productos correctamente')
  }
}
