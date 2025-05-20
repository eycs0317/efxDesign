// metadata
export const metadata = {
  title: 'Sign Out',
};

// ui
import SignOut from '@/ui/patterns/signOut';

// authjs
import { signOut } from '../../../auth';

export default function MainPage() {
  return (
    <main role="main">
      <div className="bg-neutral-100 grid justify-items-center">
        <SignOut />
      </div>
    </main>
  );
}
