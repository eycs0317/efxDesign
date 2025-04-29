// metadata
export const metadata = {
  title: 'Profile',
};

// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// authjs
import {auth} from '../../../auth';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';

// data
import {getHeroData} from '@/data/static/profile';

export default async function MainPage() {
  const heroData = getHeroData();

  const session = await auth();
  if (!session?.user) return null;

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="grid justify-items-center">
        <p>{session.user.name}</p>
      </div>
    </main>
  );
}
