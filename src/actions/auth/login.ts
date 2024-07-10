'use server'

import { signIn } from '@/auth.config'
import { AuthError } from 'next-auth'

export async function authenticate (
  prevState: { message: string; success: boolean },
  formData: FormData
): Promise<{ message: string; success: boolean }> {
  try {
    const result = await signIn('credentials', {
      redirect: false,
      email: formData.get('email'),
      password: formData.get('password')
    })

    if (result?.error) {
      return {
        message: result.error,
        success: false
      }
    }

    return {
      message: 'Login successful.',
      success: true
    }
  } catch (error) {
    console.error('Authentication error:', error)
    if (error instanceof AuthError) {
      return {
        message: 'Invalid credentials.',
        success: false
      }
    }
    return {
      message: 'Something went wrong.',
      success: false
    }
  }
}
