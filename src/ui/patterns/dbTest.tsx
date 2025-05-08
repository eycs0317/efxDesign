import { prisma } from '@/lib/prisma';

export default async function DbTesting() {

    // 1) find many
    // const userData = await prisma.user.findMany();
    // console log
    // console.log('User Data:', userData);

    // 2) find one
    const userData = await prisma.user.findUnique({
      where: { email: 'john@doe2.com' },
      select: {
        uid: true,
        firstName: true,
        lastName: true,
      },
    });

    // 3) create
    // const userData = await prisma.user.create({
    //   data: {
    //     firstName: 'John',
    //     lastName: 'Doe 2',
    //     email: 'john@doe2.com',
    //   },
    // });
    // const allUsers = await prisma.user.findMany();

    // 4) list table name
    // const tableNames = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type = "table";`;
    // console.log(tableNames);

    // 5) list table name
    // const tableNames = await prisma.$queryRaw`CREATE TABLE users (uid TEXT PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, updatedAt NUMERIC, createdAt NUMERIC DEFAULT CURRENT_TIMESTAMP);`;

    return (
      <div>
        <h1>DB Testing</h1>
        <p>Test the database connection and queries here.</p>

        {/*1)*/}
        {/*{userData.map((user, index) => (
          <div key={user.uid}>
            <h2>{index} - {user.firstName} {user.lastName} ({user.email})</h2>
          </div>
        ))}*/}

        {/*2)*/}
        <p>{userData.firstName} {userData.lastName}</p>

        {/*{3)}*/}
        {/*{allUsers.map((user, index) => (
          <div key={user.uid}>
            <h2>{index} - {user.firstName} {user.lastName} ({user.email})</h2>
          </div>
        ))}*/}
        
      </div>
    );


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
