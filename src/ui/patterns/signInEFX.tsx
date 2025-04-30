// authjs
import { signIn } from '../../../auth';

// nextjs
import Image from 'next/image';

export default function signInEFX() {
  return (
    <form className="pt-8 border-t mt-8"
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" id="email" className="border p-2 mb-2" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" id="password" className="border p-2 mb-2" />
      </div>
      <div className="flex flex-col mt-4">
        <button className="button primary">Sign In</button>
      </div>
    </form>
  );
}
