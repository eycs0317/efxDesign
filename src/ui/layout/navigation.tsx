'use client';
// react
import {Fragment} from 'react';

// nextjs
import Link from 'next/link';
import Image from 'next/image';
import {getGlobalNav} from '@/data/static/layout';
import { usePathname } from 'next/navigation';

export default function Navigation({session}) {
  const globalNav = getGlobalNav();
  const pathname = usePathname()

  return (
    <ul className="flex gap-x-2">
      {globalNav.map((item) => (
        <Fragment key={item.name}>
          {(() => {
            if ((session?.user && !item.signedIn) || (!session?.user && item.signedIn)) {
              return null;
            } else {
              return (
                <li>
                  <Link href={item.href} className={`p-2 ${pathname === item.href ? 'font-bold' : ''}`}>{item.name}</Link>
                </li>
              )
            }
          })()}
        </Fragment>
      ))}
    </ul>
  );
}
