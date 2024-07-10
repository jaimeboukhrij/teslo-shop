'use client'

import { authenticate } from '@/actions'
import clsx from 'clsx'
import Link from 'next/link'
import { useActionState, useEffect } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'

export const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(authenticate, {
    message: '',
    success: false
  })
  useEffect(() => {
    if (state.success) {
      window.location.replace('/')
    }
  }, [state.message, state.success])

  return (
    <form action={formAction} className='flex flex-col'>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        className='px-5 py-2 border bg-gray-200 rounded mb-5'
        type='email'
        id='email'
        name='email'
        defaultValue='jaime@gmail.com'
      />

      <label htmlFor='password'>Contraseña</label>
      <input
        className='px-5 py-2 border bg-gray-200 rounded mb-5'
        type='password'
        id='password'
        name='password'
        defaultValue='12345'
      />

      <button
        className={clsx({
          'btn-primary': !isPending,
          'btn-disabled': isPending
        })}
        aria-disabled={isPending}
        disabled={isPending}
      >
        Ingresar
      </button>

      {state.message && !state.success && (
        <div className='flex gap-2 mt-4'>
          <BsExclamationCircle className='h-5 w-5 text-red-500' />
          <p className='text-sm text-red-500'>{state.message}</p>
        </div>
      )}

      {/* divisor línea */}
      <div className='flex items-center my-5'>
        <div className='flex-1 border-t border-gray-500' />
        <div className='px-2 text-gray-800'>O</div>
        <div className='flex-1 border-t border-gray-500' />
      </div>

      <Link href='/auth/new-account' className='btn-secondary text-center'>
        Crear una nueva cuenta
      </Link>
    </form>
  )
}
