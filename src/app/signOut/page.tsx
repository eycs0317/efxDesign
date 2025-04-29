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
    <form
      action={async () => {
        'use server'
        await signOut({
          redirectTo: '/contact',
        });
      }}
    >
      <p>Are you sure you want to sign out</p>
      <button type="submit" className="button primary">Confirm Sign Out</button>
    </form>
  )
}
