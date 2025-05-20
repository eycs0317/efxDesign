import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { saltAndHashPassword } from './src/app/utils/password'

// prisma
import { prisma } from '@/lib/prisma';


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }), 
    Credentials({
      credentials: {
        email:{ label: 'Email', type: 'email'},
        password:{label: 'Password', type: 'password'},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const userFind = await prisma.user.findUnique({
          where: {
            email_provider: {
              email: email,
              provider: 'credentials',
            },
          },
          select: {
            uid: true,
            email: true,
            password: true,
            isEFX: true,
            isActive: true,
          },
        });
        if (userFind) {
          if (userFind.password === password && userFind.isActive) {
            return userFind;
          } else {
            const userIncorrect = {email: 'notFound'}
            return userIncorrect;
          }
        }
        const userCreate = await prisma.user.create({
          data: {
            email: email,
            password: password,
            provider: 'credentials',
            profile: {
              create: {},
            },
          },
        });
        return userCreate;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        if (user.email === 'notFound'){
          token.auth = false;
          return token;
        }
        if (account.provider == 'credentials') {
          token.uid = user.uid;
          token.isEFX = user.isEFX;
          token.isActive = user.isActive;
        } else {
          const userData = await prisma.user.findUnique({
            where: {
              email_provider: {
                email: user.email,
                provider: account.provider,
              },
            },
            select: {
              uid: true,
              isEFX: true,
              isActive: true,
            },
          });
          if (!userData) {
            const userCreate = await prisma.user.create({
              data: {
                email: user.email,
                provider: account.provider,
                profile: {
                  create: {
                    avatar: user.image,
                    firstName: user.name.split(' ')[0],
                    lastName: user.name.split(' ')[1],
                  },
                },
              },
            });
            token.uid = userCreate.uid;
            token.isEFX = userCreate.isActive;
            token.isActive = userCreate.isActive;
          } else {
            token.uid = userData.uid;
            token.isEFX = userData.isActive;
            token.isActive = userData.isActive;
          }
        }
        token.isEFX = token.isEFX;
        token.auth = token.isActive;
      }
      return token;
    },
    session({ session, token }) {
      session.isEFX = token.isEFX;
      session.auth = token.auth;
      session.uid = token.uid;
      return session;
    },
  },
})
