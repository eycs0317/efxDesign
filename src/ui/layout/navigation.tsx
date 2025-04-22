// nextjs
import Link from 'next/link';
import Image from 'next/image';

// data
import {getGlobalNav} from '../../data/static/layout';

export default function Navigation() {
  const globalNav = getGlobalNav();

  return (
    <ul className="flex gap-x-2">
      {globalNav.map((item) => (
        <li key={item.name}>
          <Link href={item.href} className="p-2">{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
