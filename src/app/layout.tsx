const BRAND_COLOR_OPTIONS = ['blue', 'green', 'orange'];
const BRAND_COLOR = BRAND_COLOR_OPTIONS[Math.floor(Math.random() * BRAND_COLOR_OPTIONS.length)];

import './globals.css';
import Header from '../ui/layout/header';
export const metadata = {
  title: {
    template: '%s | efx design',
    default: 'efx design',
  },
  description: 'efx design specializes in modern, high-converting websites for brands ready to scale. Strategic design, UX, and clean development—all in one studio.',
  icons: {
    icon: '/assets/i/brand/favicon_' + BRAND_COLOR + '.ico?' + Date.now(),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
