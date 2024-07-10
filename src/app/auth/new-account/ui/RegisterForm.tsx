'use client'

import { registerUser } from '@/actions'
import React, { useActionState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'

export const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser,
    {
      message: '',
      success: false,
      user: null
    })
  return (
    <form action={formAction} className='flex flex-col'>

      <label htmlFor='name'>Nombre completo</label>
      <input
        className='px-5 py-2 border bg-gray-200 rounded mb-5'
        type='text'
        name='name'
        autoFocus
      />

      <label htmlFor='email'>Correo electrónico</label>
      <input
        className='px-5 py-2 border bg-gray-200 rounded mb-5'
        type='email'
        name='email'
      />

      <label htmlFor='password'>Contraseña</label>
      <input
        className='px-5 py-2 border bg-gray-200 rounded mb-5'
        type='password'
        name='password'
      />

      {state.message && !state.success && (
        <div className='flex gap-2 my-4'>
          <BsExclamationCircle className='h-5 w-5 text-red-500' />
          <p className='text-sm text-red-500'>{state.message}</p>
        </div>
      )}
      <button
        className='btn-primary'
        disabled={isPending}
      >
        Crear cuenta
      </button>

      {/* divisor l ine */}
      <div className='flex items-center my-5'>
        <div className='flex-1 border-t border-gray-500' />
        <div className='px-2 text-gray-800'>O</div>
        <div className='flex-1 border-t border-gray-500' />
      </div>

    </form>
  )
}
