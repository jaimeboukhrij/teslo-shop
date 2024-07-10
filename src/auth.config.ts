import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import prisma from './lib/prisma'
import bcryptjs from 'bcryptjs'

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account'
  },
  providers: [
    Credentials({
      async authorize (credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(5) })
          .safeParse(credentials)

        if (parsedCredentials.success !== true) return null

        const { email, password } = parsedCredentials.data

        try {
          const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } })
          if (!user) return null

          const comparePassword = bcryptjs.compareSync(password, user.password)
          if (!comparePassword) return null

          // Omitir el campo 'password' del usuario antes de devolverlo
          const { password: _, ...rest } = user
          return rest
        } catch (error) {
          console.error('Error al autenticar usuario:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt ({ token, user }) {
      if (user) {
        token.data = user
      }
      return token
    },

    session ({ session, token, user }) {
      session.user = token.data as any
      console.log({ session })
      return session
    }
  }
}

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)
