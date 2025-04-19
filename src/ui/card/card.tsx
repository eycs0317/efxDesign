import Image from 'next/image';
export default function Card({cardData}) {
  return (
    <section className="">
      <Image src={cardData.image} alt={cardData.title} width={100} height={200} />
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </section>
  );
}
