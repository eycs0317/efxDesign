// ui
import GoogleSignIn from '../../components/GoogleSignIn';
import Logo from './logo';
import Navigation from './navigation';

import getConfig from 'next/config';

export default function Header() {
  const { publicRuntimeConfig } = getConfig();
  return (
    <header role="banner" className="bg-gray-800 text-white">
      <div className="p-10">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          {/* <GoogleSignIn /> */}
        </div>
      </div>
    </header>
  );
}
