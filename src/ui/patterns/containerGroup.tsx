// ui// ui
import Heading from '../patterns/heading';
import Container from './container';

export default function ContainerGroup({containerGroupData}) {
  const headingData = containerGroupData.heading.data;
  const containersData = containerGroupData.containers.data;

  return (
    <section className={containerGroupData.className}>
      <Heading level={headingData.level} content={headingData.content} className={headingData.className} />
      <div className="pt-8 flex justify-center items-start gap-8">
        {containersData.map((containerData) => (
          <Container key={containerData.uid} containerData={containerData} />
        ))}
      </div>
    </section>
  );
}
