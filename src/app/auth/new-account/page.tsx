import { titleFont } from '@/config/font'
import Link from 'next/link'
import { RegisterForm } from './ui/RegisterForm'

export default function () {
  return (
    <div className='flex flex-col min-h-screen pt-32 sm:pt-52'>

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>

      <RegisterForm />

      <Link
        href='/auth/login'
        className='btn-secondary text-center'
      >
        Ingresar
      </Link>
    </div>
  )
}
