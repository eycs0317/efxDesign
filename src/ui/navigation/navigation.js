import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <div className="bg-gray-800 text-white">
      <div className=" p-10 ">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl"><Image src="/assets/i/brand/logo-blue.svg" alt="logo" width={160} height={41} /></h2>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
