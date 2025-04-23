// ui
import Heading from '../patterns/heading';

// data
import {getHeroHome} from '../../data/static/layout';

import Link from 'next/link';


export default function Header() {
  const hero = getHeroHome();

  return (
    <div className="flex flex-col bg-gray-800 text-white items-center p-10 justify-center gap-6">
      <Heading level={1} content={hero.heading} />
      <p>{hero.subheading}</p>
      <Link href='/login'>
      <button className="bg-white text-black py-3 px-5 rounded-md hover:bg-gray-200">{hero.cta}</button>
      </Link>
    </div>
  );
}
