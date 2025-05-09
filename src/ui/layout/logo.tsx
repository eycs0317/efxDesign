'use client';

// nextjs
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// data
import {getLogo} from '@/data/static/layout';

export default function Logo({session}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const brand_color_options = ['blue', 'green', 'orange'];
  const [brand_color, setRandomBrandColor] = useState(brand_color_options[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * brand_color_options.length);
    setRandomBrandColor(brand_color_options[Math.floor(Math.random() * brand_color_options.length)]);
  }, []);
  const logo = getLogo(brand_color);

  return (
    <>
      {isHomePage ? (
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} priority={true} />
      ) : (
        <Link href={session?.auth ? '/dashboard' : '/'}><Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} priority={true} /></Link>
      )}
    </>
  );
}
