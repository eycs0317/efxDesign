// metadata
export const metadata = {
  title: 'Dashboard',
};

// nextjs
import {redirect} from 'next/navigation';
import Image from 'next/image';

// authjs
import {auth} from '../../../../auth';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';

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
        <p>Placeholder</p>
      </div>
    </main>
  );
}
