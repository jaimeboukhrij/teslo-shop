'use client'

import { QuantitySelector, SizeSelector } from '@/components'
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import { CartProduct, Size } from '../../../../../interfaces/product-interface'
import { useCartStore } from '@/store'

interface Props {
  product: Product
}

export const AddToCart = ({ product }:Props) => {
  const [size, setSize] = useState<Size | undefined>()
  const [quantity, setQuantity] = useState<number>(1)
  const [post, setPost] = useState<boolean>(false)

  const addProductToCart = useCartStore(state => state.addProductToCart)

  const addToCart = () => {
    setPost(true)
    if (!size) return

    const { id, slug, title, price, images } = product
    const productToCart: CartProduct = {
      id,
      slug,
      title,
      price,
      image: images[0],
      size,
      quantity
    }

    addProductToCart(productToCart)
    setPost(false)
    setQuantity(1)
    setSize(undefined)
  }

  return (
    <>
      {
      post && !size && (
        <p className='text-red-500'>Debe seleccionar una talla *</p>
      )
      }
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChanged={setSize}
      />
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
      />
      <button
        onClick={addToCart}
        className='btn-primary'
      >Agregar al carrito
      </button>
    </>
  )
}
