import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "./src/app/utils/password"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }), Credentials({
    credentials: {
      email:{ label: "Email", type: "text"},
      password:{label: "Password", type: "password"},
    },
  authorize: async (credentials) => {
    const { email, password } = credentials;
    let dummyUser = {
      id: "1",
      name: "user1",
      email: "user1@email.com",
      password:'password'
    };
    if (email === dummyUser.email && password === dummyUser.password) {
      console.log("User authenticated at auth.ts")
      return dummyUser;
    }
    return null;
  }
})],
  pages:{
    signIn:'/login'
  }
})