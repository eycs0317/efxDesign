// ui
import Logo from '@/ui/layout/logo';
import Navigation from './navigation';

// authjs
import { auth } from '../../../auth';

export default async function Header() {
  const session = await auth()
  return (
    <header role="banner" className="bg-primary-1000 p-(--padding-container) flex justify-between items-center">
        <Logo session={session} />
        <Navigation session={session} />
    </header>
  );
}
