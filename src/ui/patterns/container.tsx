// nextjs
import Image from 'next/image';

// ui
import Heading from '../patterns/heading';

export default function Container({containerData}) {
  return (
    <section className="flex-1">
      {(() => {
       if (containerData.image) {
         return <Image src={containerData.image} alt={containerData.title} width={60} height={60} />
       }
      })()}
      <Heading level={3} content={containerData.title} size="text-2xl" />
      <p>{containerData.description}</p>
    </section>
  );
}
