import { signOut } from '../../../auth';

export default function SignOut() {
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
