import Card from './card';

export default function CardSection({title, cardsData}) {
  return (
    <section>
      <h1 className="text-3xl">{title}</h1>
      <div className="flex justify-center items-center gap-6">
        {cardsData.map((cardData) => (
          <Card cardData={cardData} />
        ))}
      </div>
    </section>
  );
}
