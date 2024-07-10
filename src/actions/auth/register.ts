'use server'

import prisma from '@/lib/prisma'
import bcryptjs from 'bcryptjs'

export const registerUser = async (
  prevState: {},
  formData: FormData
): Promise<{ message: string; success: boolean; user: any }> => {
  try {
    const name = formData.get('name')?.toString()
    if (!name) {
      return {
        message: 'El nombre es obligatorio',
        success: false,
        user: null
      }
    }

    const email = formData.get('email')?.toString()
    if (!email) {
      return {
        message: 'El email es obligatorio',
        success: false,
        user: null
      }
    }

    const password = formData.get('password')?.toString()
    if (!password) {
      return {
        message: 'La contraseña es obligatoria',
        success: false,
        user: null
      }
    }

    const hashedPassword = bcryptjs.hashSync(password, 10) // Agregar sal para mayor seguridad

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword
      },
      select: {
        name: true,
        email: true,
        password: false // No retornar el password
      }
    })

    if (!user) {
      return {
        message: 'Problema al crear el usuario',
        success: false,
        user: null
      }
    }

    return {
      message: 'Usuario creado correctamente',
      success: true,
      user
    }
  } catch (error) {
    console.log(error)
    return {
      message: 'Error inesperado al crear el usuario',
      success: false,
      user: null
    }
  }
}
