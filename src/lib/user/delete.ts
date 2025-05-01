import { prisma} from  '@/lib/prisma';

export async function deleteUser(id: string){
  return await prisma.user.delete({
    where: { id},
  })
}