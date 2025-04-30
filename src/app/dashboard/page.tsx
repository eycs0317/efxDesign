// metadata
export const metadata = {
  title: 'Dashboard',
};

// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';

// data
import {getHeroData} from '@/data/static/dashboard';

import {auth} from '../../../auth';
// import UserAvatar from '../actions/textSession';

export default async function MainPage() {
  const heroData = getHeroData();

  const session = await auth();
  if (!session?.user) return null;

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="grid justify-items-center">
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <p><Image src={session.user.image} width="50" height="50" alt={session.user.name} className="avatar" /></p>
        <p>{session.user.id}</p>
      </div>
    </main>
  );
}
