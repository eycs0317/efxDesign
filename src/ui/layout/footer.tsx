// nextjs
import Link from 'next/link';

// data
import {getCopyright} from '../../data/static/layout';

export default function Footer() {
  const footer = getCopyright();

  return (
    <footer role="contentinfo" className="bg-gray-800 text-white">
      <small>&copy;{footer.year} <Link href="/">{footer.entity}</Link>. {footer.legal}</small>
    </footer>
  );
}
