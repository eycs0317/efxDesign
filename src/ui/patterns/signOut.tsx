// nextjs
import {redirect} from 'next/navigation';

// authjs
import {auth, signOut} from '../../../auth';

// ui
import FormField from '@/ui/foundations/formField';

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
        <FormField type='button' fieldData={{type: 'submit', id: 'btSignOut', className: 'button primary', value: 'Continue to Sign Out'}} />
      </form>
    </section>
  )
}
