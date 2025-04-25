// metadata
export const metadata = {
  title: 'Our services',
}

// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import ContainerGroup from '../../ui/patterns/containerGroup';
import Hero from '../../ui/layout/hero';

// data
import {getHeroData, getAboutData, getWhatWeDoData, getPhilosophyData, getHowWeWorkData, getWhoWeWorkWithData, getCTAData} from '../../data/static/services';

export default function MainPage() {
  const heroData = getHeroData();
  const aboutData = getAboutData();
  const whatWeDoData = getWhatWeDoData();
  const philosophyData = getPhilosophyData();
  const howWeWorkData = getHowWeWorkData();
  const whoWeWorkWithData = getWhoWeWorkWithData();
  const ctaData = getCTAData();

  return (
    <main role="main">
      <Hero heroData={heroData} />
      <div className="bg-neutral-100 grid justify-items-center">
        <ContainerGroup containerGroupData={aboutData} />
      </div>
      <div className="grid justify-items-center">
        <ContainerGroup containerGroupData={whatWeDoData} />
        <ContainerGroup containerGroupData={philosophyData} />
      </div>
      <div className="bg-neutral-100 grid justify-items-center">
        <ContainerGroup containerGroupData={howWeWorkData} />
      </div>
      <div className="grid justify-items-center">
        <ContainerGroup containerGroupData={whoWeWorkWithData} />
        <ContainerGroup containerGroupData={ctaData} />
      </div>
    </main>
  );
}
