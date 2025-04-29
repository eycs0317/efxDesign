import { signIn } from '../../../auth';
import SignInGoogle  from '@/ui/patterns/signInGoogle';

export default function MainPage() {
  return (
    <main role="main">
      <div className="bg-neutral-100 grid justify-items-center">
        <section className="py-60 px-4 max-w-7xl flex flex-col items-center justify-center">
          <SignInGoogle />
          <form
            action={async (formData) => {
              'use server'
              await signIn('credentials', formData)
            }}
          >
            <div>
              <label htmlFor="email">Email:</label>
              <input name="email" type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input name="password" type="password" id="password" />
            </div>
            <div>
              <button className="button primary">Sign In</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
