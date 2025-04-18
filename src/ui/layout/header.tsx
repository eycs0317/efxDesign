import Link from 'next/link';
import Image from 'next/image';
import Navigation from './navigation';

export default function Header() {
  return (
    <header role="banner" className="bg-gray-800 text-white">
      <div className="p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl"><Image src="/assets/i/brand/logo-blue.svg" alt="logo" width={160} height={41} /></h2>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
