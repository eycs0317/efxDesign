// ui// ui
import Heading from '../patterns/heading';
import Card from './card';

export default function CardSection({title, cardsData}) {
  return (
    <section>
      <Heading level={2} content={title} />
      <div className="flex justify-center items-center gap-6">
        {cardsData.map((cardData) => (
          <Card key={cardData.title} cardData={cardData} />
        ))}
      </div>
    </section>
  );
}
