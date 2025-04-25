// nextjs
import Link from 'next/link';

// ui
import Heading from '../patterns/heading';
import Container from './container';

export default function ContainerGroup({containerGroupData}) {
  const headingData = (containerGroupData.heading) ? containerGroupData.heading.data : null;
  const containersData = containerGroupData.containers.data;
  const footerData = (containerGroupData.footer) ? containerGroupData.footer.data : null;

  return (
    <section className={containerGroupData.className}>
      {(() => {
        return (containerGroupData.heading) ? <Heading level={headingData.level} content={headingData.content} className={headingData.className} /> : '';
      })()}
      <div className="pt-8 flex justify-center items-start gap-8">
        {containersData.map((containerData) => (
          <Container key={containerData.uid} containerData={containerData} />
        ))}
      </div>
      <div className="pt-8 flex justify-center items-start gap-8">
        {(() => {
          return (containerGroupData.footer) ? <Link href={footerData.href} className={footerData.className}>{footerData.content}</Link> : '';
        })()}
      </div>
    </section>
  );
}
