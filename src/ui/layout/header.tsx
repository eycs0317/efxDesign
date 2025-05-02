// ui
import Logo from '@/ui/layout/logo';
import ServerNav from './serverNav';

export default function Header() {
  return (
    <header role="banner" className="bg-primary-1000 p-(--padding-container) flex justify-between items-center">
        <Logo />
        <ServerNav />
    </header>
  );
}
