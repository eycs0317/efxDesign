// react
import {Fragment} from 'react';

// nextjs
import Link from 'next/link';
import Image from 'next/image';
import Signout from '../../components/signout-button'
import {getGlobalNav} from '@/data/static/layout';

// authjs
import {auth} from '../../../auth';

export default async function Navigation() {
  const globalNav = getGlobalNav();
  const session = await auth();

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
                  <Link href={item.href} className="p-2">{item.name}</Link>
                </li>
              )
            }
          })()}
        </Fragment>
      ))}
    </ul>
  );
}
