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
            email: true,
            password: true,
          },
        });
        if (userFind) {
          if (userFind.password === password) {
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
        const userData = await prisma.user.findUnique({
          where: {
            email_provider: {
              email: user.email,
              provider: account.provider,
            },
          },
          select: {
            uid: true,
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
        } else {
          token.uid = userData.uid;
        }
        token.auth = true;
      }
      return token;
    },
    session({ session, token }) {
      session.auth = token.auth;
      session.uid = token.uid;
      return session;
    },
  },
})
