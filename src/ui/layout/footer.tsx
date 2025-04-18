import Link from 'next/link';

export default function Footer() {
  const today = new Date();
  return (
    <footer role="contentinfo" className="bg-gray-800 text-white">
      <small>&copy;{today.getFullYear()} <Link href="/">efx design</Link>. All rights reserved.</small>
    </footer>
  );
}
