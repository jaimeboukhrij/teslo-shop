'use client'
import { titleFont } from '@/config/font'
import { useUIStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { CartIcon } from './cartIcon/cart-icon'

const sections = [
  {
    name: 'Hombres',
    href: '/gender/men'
  },
  {
    name: 'Mujeres',
    href: '/gender/women'
  },
  {
    name: 'Niños',
    href: '/gender/kid'
  }
]

export const TopMenu = () => {
  const openMenu = useUIStore(state => state.openSideMenu)

  return (
    <nav className='flex flex-row px-5  py-4 justify-between items-center w-full'>
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>Testlo</span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className='hidden gap-5 sm:flex'>
        {
              sections.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className='rounded-md transition-all  hover:bg-gray-100 '
                >
                  {name}
                </Link>
              ))
            }

      </div>

      <div className='flex items-center gap-2'>
        <Link href='/search'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>

        <CartIcon />

        <div
          className='cursor-pointer'
          onClick={openMenu}
        >
          <IoMenuOutline className='w-5 h-5' />
        </div>

      </div>
    </nav>
  )
}
