// nextjs
import Image from 'next/image';

// ui
import Heading from '../patterns/heading';

export default function Container({containerData}) {
  const containerContent = containerData.content;

  return (
    <section className={containerData.className}>
      {containerContent.map((containerContentData) => (
        <div key={containerContentData.uid}>
          {(() => {
            switch (containerContentData.component) {
              case 'heading':
                return <Heading level={containerContentData.data.level} content={containerContentData.data.content} className={containerContentData.data.className} />;
              case 'image':
                return <Image src={containerContentData.data.src} alt={containerContentData.data.alt} width={containerContentData.data.width} height={containerContentData.data.height} />;
              case 'paragraph':
                return <p>{containerContentData.data.content}</p>;
            }
          })()}
        </div>
      ))}
    </section>
  );
}
