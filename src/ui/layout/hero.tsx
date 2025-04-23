// ui
import Heading from '../patterns/heading';

// data
import {getHeroHome} from '../../data/static/layout';

import Link from 'next/link';


export default function Header() {
  const hero = getHeroHome();

  return (
    <div className="bg-primary-1000 text-neutral-000 p-16 grid justify-items-center">
      <div className="max-w-7xl flex flex-col items-center gap-8">
        <Heading level={1} content={hero.heading} />
        <p className="text-2xl">{hero.subheading}</p>
        <Link href='/api/auth/signin'>
          <button className="bg-white text-black py-3 px-5 rounded-md hover:bg-gray-200">{hero.cta}</button>
        </Link>
      </div>
    </div>
  );
}
