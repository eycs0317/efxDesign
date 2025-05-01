import { prisma } from '@/lib/prisma';
console.log('Prisma Client Keys:', Object.keys(prisma));

export default async function DbTesting() {

    const userData = await prisma.user.findMany();
    console.log('User Data:', userData);
    return (
      <div>
        {userData.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}

        <h1>DB Testing</h1>
        <p>Test the database connection and queries here.</p>
      </div>
    )


  // catch (error) {
  //   console.error('Error fetching user data:', error);
  //   return (
  //     <div>
  //       <h1>Error</h1>
  //       <p>Failed to fetch user data.</p>
  //     </div>
  //   )
  // }
}