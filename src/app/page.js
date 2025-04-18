import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/ui/header/header';
import CardSection from '@/ui/card/cardSection';

export default function MainPage() {
  return (
    <>
      <Header />
      <div>
        <CardSection />
      </div>
    </>
  );
}
