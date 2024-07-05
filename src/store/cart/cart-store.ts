import type { CartProduct } from '@/interfaces'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  cart: CartProduct[]

  addProductToCart: (product: CartProduct) => void

  getTotalItems: () => number
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart: (product: CartProduct) => {
        const { cart } = get()

        const productInCart = cart.some(elem => elem.id === product.id && elem.size === product.size)

        if (!productInCart) {
          set({ cart: [...cart, product] })
          return
        }

        const updateCartProduct = cart.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity }
          }
          return item
        })
        set({ cart: updateCartProduct })
      },
      getTotalItems: () => {
        return get().cart.reduce((acc, val) => acc + val.quantity, 0)
      }
    })
    , {
      name: 'Shopping-cart'
    }
  )
)
