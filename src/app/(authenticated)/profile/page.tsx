// metadata
export const metadata = {
  title: 'Profile',
};

// nextjs
import {redirect} from 'next/navigation';
import Image from 'next/image';

// authjs
import {auth} from '../../../../auth';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Address  from '@/ui/patterns/address';
// import DbTesting from '@/utils/dbTest';

// util
import {getProfile} from '@/utils/authenticated';

export default async function MainPage() {
  let session = await auth();
  if (!session?.auth) redirect('/signIn');
  
  const profile = await getProfile(session);

console.log(profile);

  return (
    <main role="main">
      <div className="grid justify-items-center">
        <Address />

      </div>
      <div className="grid justify-items-center">
        {/*<DbTesting />*/}
      </div>
    </main>
  );
}
