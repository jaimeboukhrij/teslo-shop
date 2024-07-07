'use client'

import { useCartStore } from '@/store'
import { useEffect, useState } from 'react'

export const Resume = () => {
  const { subtotal, tax, total } = useCartStore(state => state.getSummaryInformation())
  const [loaded, setLoaded] = useState(true)

  useEffect(() => setLoaded(false), [])
  if (loaded) {
    return <p>Cargando...</p>
  }
  return (
    <div className='flex flex-col  gap-6 min-h-[250px]'>
      <div className='flex flex-col gap-6 py-8'>
        <h3 className='font-semibold md:text-2xl'>Resumen del pedido</h3>
        <div>
          <div className='flex justify-between text-sm md:text-sm '>
            <span>Envio</span>
            <span>Gratis</span>
          </div>
          <div className='flex justify-between  md:text-sm'>
            <span>Subtotal</span>
            <span>{subtotal}€</span>
          </div>
          <div className='flex justify-between   md:text-sm'>
            <span>Impuestos (15%)</span>
            <span>{tax}€</span>
          </div>
        </div>
        <div className='flex justify-between font-semibold  md:text-xl'>
          <span>Subtotal</span>
          <span>{total}€</span>
        </div>
      </div>

    </div>
  )
}
