import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { saltAndHashPassword } from './src/app/utils/password'
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
        let testUser = {
          id: '1',
          name: 'User One',
          email: 'user1@email.com',
          password:'password'
        };
        if (email === testUser.email && password === testUser.password) {
          console.log('User authenticated at auth.ts')
          return testUser;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = 'efx-uid-00001';
        token.auth = true;
      }
      return token;
    },
    session({ session, token }) {
      session.auth = token.auth;
      session.user.id = token.id;
      return session;
    },
  },
})
