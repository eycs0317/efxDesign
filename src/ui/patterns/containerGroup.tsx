// ui// ui
import Heading from '../patterns/heading';
import Container from './container';

export default function ContainerGroup({title, containersData, size}) {
  let className = 'py-8 px-4';
  className += (size) ? ' ' + size : ' max-w-7xl';

  return (
    <section className={className}>
      <Heading level={2} content={title} size="text-4xl" align="text-center" />
      <div className="pt-8 flex justify-center items-start gap-8">
        {containersData.map((containerData) => (
          <Container key={containerData.title} containerData={containerData} />
        ))}
      </div>
    </section>
  );
}
