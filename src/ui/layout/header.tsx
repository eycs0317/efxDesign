// ui
import GoogleSignIn from '@/components/GoogleSignIn';
import Logo from '@/ui/layout/logo';
import Navigation from '@/ui/layout/navigation';

export default function Header() {
  return (
    <header role="banner" className="bg-primary-1000 p-(--padding-container) flex justify-between items-center">
        <Logo />
        <Navigation />
    </header>
  );
}
