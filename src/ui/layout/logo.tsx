import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const logo = {
    width: 160,
    height: 41,
    alt: 'efx design logo',
    src: '/assets/i/brand/logo-blue.svg',
  };

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
