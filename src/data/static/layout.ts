export function getLogo({brand}) {
  return {
    width: 160,
    height: 41,
    alt: 'efx design logo',
    src: '/assets/i/brand/logo_' + brand + '.svg',
  };
}

export function getGlobalNav() {
  return [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
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