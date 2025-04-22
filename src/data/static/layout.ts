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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Sign In', href: '/signIn' },
    { name: 'Sign Out', href: '/signOut' },
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

export function getHeroHome() {
  return {
    heading: 'Crafting Modern Websites for your Business',
    subheading: 'We create visually appealing and user-friendly websites that help your Business stand out in the digital world',
    cta: 'Get Started',
  };
}