const BRAND_COLOR_OPTIONS = ['blue', 'green', 'orange'];
const BRAND_COLOR = BRAND_COLOR_OPTIONS[Math.floor(Math.random() * BRAND_COLOR_OPTIONS.length)];

import './globals.css';
export const metadata = {
  title: {
    template: '%s | efx design',
    default: 'efx design',
  },
  description: 'efx design specializes in modern, high-converting websites for brands ready to scale. Strategic design, UX, and clean development—all in one studio.',
  icons: {
    icon: '/assets/i/brand/favicon_' + BRAND_COLOR + '.ico',
  },
};

import Header from '../ui/layout/header';
import Footer from '../ui/layout/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header brand={BRAND_COLOR} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
