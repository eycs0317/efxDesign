// metadata
export const metadata = {
  title: 'Page Not Found',
};

// styles
import styles from './page.module.css';

// ui
import Heading from '@/ui/patterns/heading';

// data
import {getNotFoundData} from '@/data/static/notFound';

export default function NotFound() {
  const notFoundData = getNotFoundData();

  return (
    <main role="main">
      <div className="bg-neutral-100 grid justify-items-center">
        <section className="justify-items-center py-60 w-large">
          <Heading level={notFoundData.heading.data.level} content={notFoundData.heading.data.content} />
          <p className="mt-8">{notFoundData.content.data.content}</p>
        </section>
      </div>
    </main>
  );
}
