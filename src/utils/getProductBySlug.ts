import prisma from '@/lib/prisma'

export async function getProductBySlug (slug: string) {
  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        slug
      }
    })
    if (!product) return null

    return {
      ...product,
      images: product.ProductImage.map(img => img.url)
    }
  } catch (error) {
    console.log(error)
    throw new Error('producto no encontrado por slug')
  }
}
