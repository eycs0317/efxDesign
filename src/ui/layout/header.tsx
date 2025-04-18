'use client';

import Logo from './logo';
import Navigation from './navigation';

export default function Header() {
  return (
    <header role="banner" className="bg-gray-800 text-white">
      <div className="p-10">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
