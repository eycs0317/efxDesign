// metadata
export const metadata = {
  title: 'Sign Out',
};

// styles
import styles from './page.module.css';

// authjs
import { signOut } from '../../../auth';

export default function MainPage() {
  return (
    <main role="main">
      <div className="bg-neutral-100 grid justify-items-center">
        <section className="py-60 px-4 max-w-7xl flex flex-col items-center">
          <form
            action={async () => {
              'use server'
              await signOut({
                redirectTo: '/signIn',
              });
            }}
          >
            <p>Are you sure you want to sign out?</p>
            <button type="submit" className="button primary">Confirm Sign Out</button>
          </form>
        </section>
      </div>
    </main>
  );
}
