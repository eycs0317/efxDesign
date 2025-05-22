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
    <section className="">
      <form className="flex flex-col items-center py-60 w-sm"
        action={async () => {
          'use server'
          await signOut({
            redirectTo: '/signIn',
          });
        }}
      >
        <div className="flex flex-col gap-4">
          <p>Are you sure you want to sign out?</p>
          <FormField type='button' fieldData={{type: 'submit', id: 'btSignOut', className: 'button primary', value: 'Continue to Sign Out'}} />
        </div>
      </form>
    </section>
  )
}
