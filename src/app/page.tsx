// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '../ui/patterns/containerGroup';
import Hero from '../ui/layout/hero';

// data
import {getHeroData, getServicesData, getPitchData, getPhilosophyData} from '../data/static/home';

export default function MainPage() {
  const heroData = getHeroData();
  const servicesData = getServicesData();
  const pitchData = getPitchData();
  const philosophyData = getPhilosophyData();

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="bg-neutral-100 grid justify-items-center">
        <ContainerGroup containerGroupData={servicesData} />
      </div>
      <div className="grid justify-items-center">
        <ContainerGroup containerGroupData={pitchData} />
        <ContainerGroup containerGroupData={philosophyData} />
      </div>
    </main>
  );
}
