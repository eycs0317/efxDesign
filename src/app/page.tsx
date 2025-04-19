import Image from 'next/image';
import styles from './page.module.css';
import Hero from '../ui/layout/hero';
import CardSection from '../ui/card/cardSection';

export default function MainPage() {
  const cardsData = [
    { title: 'Customer Website Design', image: '/assets/i/icons/image1.png', description: 'We create visually appealing and user-friendly websites that help your Business stand out in the digital world' },
    { title: 'Customer Website Design', image: '/assets/i/icons/image2.png', description: 'We create visually appealing and user-friendly websites that help your Business stand out in the digital world' },
    { title: 'Customer Website Design', image: '/assets/i/icons/image3.png', description: 'We create visually appealing and user-friendly websites that help your Business stand out in the digital world' },
  ];

  return (
    <>
      <Hero />
      <div>
        <CardSection title="Our Services" cardsData={cardsData} />
      </div>
    </>
  );
}
