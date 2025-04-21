// styles
import './globals.css';

// metadata
export const metadata = {
  title: {
    template: '%s | efx design',
    default: 'efx design',
  },
  description: 'efx design specializes in modern, high-converting websites for brands ready to scale. Strategic design, UX, and clean development—all in one studio.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/i/brand/favicon_light.ico',
        href: '/assets/i/brand/favicon_light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/i/brand/favicon_dark.ico',
        href: '/assets/i/brand/favicon_dark.svg',
      },
    ],
  },
};

// ui
import Header from '../ui/layout/header';
import Footer from '../ui/layout/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
