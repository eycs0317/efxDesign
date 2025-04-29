export function getLogo(brand_color) {
  return {
    width: 160,
    height: 36,
    alt: 'efx design logo',
    src: '/assets/i/brand/logo_' + brand_color + '.svg',
  };
}

export function getGlobalNav() {
  return [
    { name: 'Home', href: '/', signedIn: false, },
    { name: 'About', href: '/about', signedIn: false, },
    { name: 'Services', href: '/services', signedIn: false, },
    { name: 'Contact', href: '/contact', signedIn: false, },
    { name: 'Sign In', href: '/signIn', signedIn: false, },
    { name: 'Dashboard', href: '/dashboard', signedIn: true, },
    { name: 'Profile', href: '/profile', signedIn: true, },
    { name: 'Sign Out', href: '/signOut', signedIn: true, },
  ];
}

export function getCopyright() {
  const today = new Date();

  return {
    year: today.getFullYear(),
    entity: 'efx design',
    legal: 'All rights reserved.',
  };
}
