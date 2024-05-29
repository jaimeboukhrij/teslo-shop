import { titleFont } from '@/config/font'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'

const sections = [
  {
    name: 'Hombres',
    href: '/category/men'
  },
  {
    name: 'Mujeres',
    href: '/category/women'
  },
  {
    name: 'Niños',
    href: '/category/kids'
  }
]

export const TopMenu = () => {
  return (
    <nav className='flex flex-row px-5  p-2 justify-between items-center w-full'>
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

        <div className='relative'>
          <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
            3
          </span>
          <IoCartOutline className='w-5 h-5' />
        </div>

        <div>
          <IoMenuOutline className='w-5 h-5' />
        </div>

      </div>
    </nav>
  )
}
