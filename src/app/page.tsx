import Image from 'next/image';
import styles from './page.module.css';
import Hero from '../ui/layout/hero';
import CardSection from '../ui/card/cardSection';

export default function MainPage() {
  return (
    <>
      <Hero />
      <div>
        <CardSection />
      </div>
    </>
  );
}
