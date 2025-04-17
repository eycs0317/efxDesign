import "./globals.css";
import Navigation from "@/components/navigation/navigation";
export const metadata = {
  title: "efx design",
  description: "build websites with efx",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
