// ui
import GoogleSignIn from '../../components/GoogleSignIn';
import Logo from './logo';
import Navigation from './navigation';

export default function Header() {
  return (
    <header role="banner" className="bg-primary-1000 p-(--padding-container) flex justify-between items-center">
        <Logo />
        <Navigation />
    </header>
  );
}
