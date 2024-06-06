'use client'
import { useUIStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

const navSection = [
  {
    icon: <IoPersonOutline size={25} />,
    name: 'Perfil'
  },
  {
    icon: <IoTicketOutline size={25} />,
    name: 'Ordenes'
  },
  {
    icon: <IoLogInOutline size={25} />,
    name: 'Ingresar'
  },
  {
    icon: <IoLogOutOutline size={25} />,
    name: 'Salir'
  }
]
const navSectionProd = [
  {
    icon: <IoShirtOutline size={25} />,
    name: 'Productos'
  },
  {
    icon: <IoTicketOutline size={25} />,
    name: 'Ordenes'
  },

  {
    icon: <IoPeopleOutline size={25} />,
    name: 'Usuarios'
  }
]
export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeMenu = useUIStore((state) => state.closeSideMenu)
  return (
    <div>

      {
        isSideMenuOpen && (
          <>
            <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
            <div
              onClick={closeMenu}
              className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm'
            />
          </>
        )
      }

      <nav className={
        clsx(
          `fixed p-5 right-0 top-0 w-[20%] sm:w-[50%] max-w-[450px] h-screen bg-white z-20 
      shadow-2xl transform transition-all duration-300 flex flex-col items-center gap-6 `,
          {
            'translate-x-full': !isSideMenuOpen
          }
        )
        }
      >
        <div className='flex justify-between  w-full '>
          <span className='hidden  sm:flex justify-center items-center gap-2 w-[80%]'>
            <IoSearchOutline size={20} className='absolute left-8' />
            <input
              type='text'
              placeholder='Buscar'
              className='w-full bg-gray-50 rounded pl-10 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
            />
          </span>
          <span onClick={closeMenu} className='w-full sm:w-[50px] flex justify-center sm:pr-3'>
            <IoCloseOutline size={30} className='cursor-pointer' />
          </span>
        </div>

        <div className=' flex flex-col  items-center sm:items-start gap-2 w-full'>
          {
            navSection.map(({ name, icon }) => (
              <Link
                key={name}
                href='/'
                className='flex items-center p-2 hover:bg-gray-100 rounded transition-all gap-2'
              >
                {icon}
                <span className='hidden sm:block text-xl'>{name}</span>
              </Link>
            ))
          }

        </div>

        <div className=' w-full h-px bg-gray-200 ' />

        <div className=' flex flex-col  items-center sm:items-start gap-2 w-full'>
          {
            navSectionProd.map(({ name, icon }) => (
              <Link
                key={name}
                href='/'
                className='flex items-center p-2 hover:bg-gray-100 rounded transition-all gap-2'
              >
                {icon}
                <span className='hidden sm:block text-xl'>{name}</span>
              </Link>
            ))
          }

        </div>

      </nav>

    </div>
  )
}
