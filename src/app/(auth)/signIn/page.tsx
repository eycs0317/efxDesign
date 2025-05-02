// ui
import SignInGoogle  from '@/ui/patterns/signInGoogle';
import SignInEFX  from '@/ui/patterns/signInEFX';

// authjs
import { signIn } from '../../../auth';

export default function MainPage() {
  return (
    <main role="main">
      <div className="grid justify-items-center">
        <section className="py-40 px-4 w-sm flex flex-col">
          <SignInGoogle />
          <SignInEFX />
        </section>
      </div>
    </main>
  );
}
