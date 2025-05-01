import { prisma } from '@/lib/prisma'

export async function createUser(name: string, email: string) {
  return await prisma.user.create({
    data: { name, email },
  })
}

// How to use this function
// import { createUser } from '@/lib/user/createUser'

// await createUser('Alice', 'alice@example.com')

