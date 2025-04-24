// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '../ui/patterns/containerGroup';
import Hero from '../ui/layout/hero';

// data
import {getServicesData, getPitchData} from '../data/static/container';

export default function MainPage() {
  const servicesData = getServicesData();
  const pitchData = getPitchData();

  return (
    <main role="main">
      <Hero />
      <div className="grid justify-items-center">
        <ContainerGroup containerGroupData={servicesData} />
        <ContainerGroup containerGroupData={pitchData} />
      </div>
    </main>
  );
}
