import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Header from "@/components/header/header";
export const metadata = {
  title: "efx design",
  description: "build websites with efx",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Navigation />
      <Header />
      <body>{children}</body>
    </html>
  );
}
