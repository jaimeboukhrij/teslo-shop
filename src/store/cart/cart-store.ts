import type { CartProduct } from '@/interfaces'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  cart: CartProduct[]

  addProductToCart: (product: CartProduct) => void

  getTotalItems: () => number

  getSummaryInformation: () => {
    subtotal: number,
    tax: number,
    totalItems: number,
    total: number
  }

  updateQuantityCart: (product:CartProduct, quantity: number) => void

  removeItemCart: (product:CartProduct) => void

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
      },
      getSummaryInformation: () => {
        const { cart } = get()
        const subtotal = cart.reduce((subtotal, product) => (product.quantity * product.price) + subtotal, 0)
        const tax = subtotal * 0.15
        const totalItems = cart.reduce((acc, val) => acc + val.quantity, 0)
        const total = subtotal + tax
        return {
          subtotal, tax, total, totalItems
        }
      },
      updateQuantityCart: (product: CartProduct, quantity:number) => {
        const { cart } = get()
        const updateCartProduct = cart.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity }
          }
          return item
        })
        set({ cart: updateCartProduct })
      },
      removeItemCart: (product: CartProduct) => {
        const { cart } = get()
        const updateCart = cart.filter(item => !(item.id === product.id && item.size === product.size))
        set({ cart: updateCart })
      }
    })
    , {
      name: 'Shopping-cart'
    }
  )
)
