import "./globals.css";

export const metadata = {
  title: "efx design",
  description: "build websites with efx",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
