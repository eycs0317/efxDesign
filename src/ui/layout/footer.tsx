// nextjs
import Link from 'next/link';

// data
import {getCopyright} from '@/data/static/layout';

export default function Footer() {
  const footer = getCopyright();

  return (
    <footer role="contentinfo" className="bg-primary-1000 text-neutral-000 grid justify-items-center">
      <small className="w-7xl p-4">&copy;{footer.year} <Link href="/">{footer.entity}</Link>. {footer.legal}</small>
    </footer>
  );
}
