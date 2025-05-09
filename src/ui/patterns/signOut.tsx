// nextjs
import {redirect} from 'next/navigation';

// authjs
import {auth, signOut} from '../../../auth';

export default async function SignOut() {
  let session = await auth();
  if (!session?.auth) redirect('/signIn');

  return (
    <section className="py-60 px-4 w-sm">
      <form className="flex flex-col items-center"
        action={async () => {
          'use server'
          await signOut({
            redirectTo: '/signIn',
          });
        }}
      >
        <p className="mb-4">Are you sure you want to sign out?</p>
        <button type="submit" className="button primary w-fit">Continue to Sign Out</button>
      </form>
    </section>
  )
}
