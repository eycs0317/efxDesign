// metadata
export const metadata = {
  title: 'Dashboard',
};

// styles
import styles from './page.module.css';

// nextjs
import {redirect} from 'next/navigation';
import Image from 'next/image';

// authjs
import {auth} from '../../../auth';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';
import DbTesting from '@/ui/patterns/dbTest';

// data
import {getHeroData} from '@/data/static/dashboard';

export default async function MainPage() {
  let session = await auth();
  if (!session?.auth) redirect('/signIn');
  
  const heroData = getHeroData();

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="grid justify-items-center">
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        {(!session.user.image)? null : <p><Image src={session.user.image} width="50" height="50" alt={session.user.name} className="avatar" /></p>}
        <p>{session.user.id}</p>
      </div>
      <div className="grid justify-items-center">
        <DbTesting />
      </div>
    </main>
  );
}
