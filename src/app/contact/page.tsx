// metadata
export const metadata = {
  title: 'Contact us',
};

// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '@/ui/patterns/containerGroup';
import Hero from '@/ui/layout/hero';

// data
import {getHeroData} from '@/data/static/contact';

export default async function MainPage() {
  const heroData = getHeroData();

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="grid justify-items-center">
        <p>[Placeholder]</p>
      </div>
    </main>
  );
}
