import { titleFont } from '@/config/font'

interface Props{
  title: string,
  subtitle?: string,
  className?: string
}

export const Title = ({ title, className, subtitle }:Props) => {
  return (
    <div className={`mt-6 ${className}`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-2`}>
        {title}
      </h1>
      {
        subtitle && (
          <h3 className='text-xl mb-5'>{subtitle}</h3>
        )
      }
    </div>
  )
}
