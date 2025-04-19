'use client';

import Logo from './logo';
import Navigation from './navigation';

export default function Header({brand}) {
  return (
    <header role="banner" className="bg-gray-800 text-white">
      <div className="p-10">
        <div className="flex justify-between items-center">
          <Logo brand={brand}/>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
