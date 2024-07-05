'use client'
import { useCartStore } from '@/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'

export const CartIcon = () => {
  const productsOnCart = useCartStore(state => state.getTotalItems())

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Link
      href='/cart'
      className='relative'
    >
      {loaded &&
        <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
          {productsOnCart}
        </span>}
      <IoCartOutline className='w-5 h-5' />
    </Link>
  )
}
