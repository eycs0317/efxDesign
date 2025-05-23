// react
import {Fragment} from 'react';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// ui
import Heading from '@/ui/patterns/heading';

export default function Container({containerData}) {
  const containerContent = containerData.content;

  return (
    <section className={'container ' + containerData.className}>
      {containerContent.map((containerContentData) => (
        <Fragment key={containerContentData.uid}>
          {(() => {
            switch (containerContentData.component) {
              case 'heading':
                return <Heading level={containerContentData.data.level} content={containerContentData.data.content} className={containerContentData.data.className} />;
              case 'image':
                return <Image src={containerContentData.data.src} alt={containerContentData.data.alt} width={containerContentData.data.width} height={containerContentData.data.height} />;
              case 'paragraph':
                return <p className={containerContentData.data.className}>{containerContentData.data.content}</p>;
              case 'link':
                return <Link href={containerContentData.data.href} className={containerContentData.data.className}>{containerContentData.data.content}</Link>;
              case 'quote':
                return <blockquote>{containerContentData.data.content}</blockquote>;
            }
          })()}
        </Fragment>
      ))}
    </section>
  );
}
