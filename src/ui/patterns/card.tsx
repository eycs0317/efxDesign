// nextjs
import Image from 'next/image';

// ui
import Heading from '../patterns/heading';

export default function Card({cardData}) {
  return (
    <section className="">
      <Image src={cardData.image} alt={cardData.title} width={100} height={200} />
      <Heading level={3} content={cardData.title} />
      <p>{cardData.description}</p>
    </section>
  );
}
