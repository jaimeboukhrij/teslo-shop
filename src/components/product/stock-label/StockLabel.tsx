'use client'
import { titleFont } from '@/config/font'
import { getProductStock } from '@/utils'
import { useEffect, useState } from 'react'

interface Props {
  slug:string
}

export const StockLabel = ({ slug }:Props) => {
  const [stock, setStock] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    getProductStock(slug)
      .then((data) => setStock(data))
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [slug])
  if (loading) {
    return (
      <h1
        className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse `}
      >
      &nbsp;
      </h1>
    )
  }
  return (
    <h1 className={` ${titleFont.className} antialiased  text-lg`}>
      Stock: {stock}
    </h1>
  )
}
