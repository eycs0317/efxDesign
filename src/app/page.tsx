// styles
import styles from './page.module.css';

// nextjs
import Image from 'next/image';

// ui
import CardSection from '../ui/patterns/cardSection';
import Hero from '../ui/layout/hero';

// data
import {getServicesData} from '../data/static/cards';

export default function MainPage() {
  const servicesData = getServicesData();

  return (
    <>
      <Hero />
      <div>

        <CardSection title="Our Services" cardsData={servicesData} />
      </div>
    </>
  );
}
