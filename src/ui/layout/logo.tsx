// nextjs
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// data
import {getLogo} from '../../data/static/layout';

export default function Logo({brand}) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const logo = getLogo({brand});

  return (
    <>
      {isHomePage ? (
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
      ) : (
        <Link href="/"><Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} /></Link>
      )}
    </>
  );
}
