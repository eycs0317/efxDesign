// authjs
import { signIn } from '../../../auth';

// nextjs
import Image from 'next/image';

// ui
import FormField from '@/ui/foundations/formField';

export default function signInEFX() {
  return (
    <form className="flex flex-col border-t pt-8 mt-8" action={async (formData) => {
      'use server'
      await signIn('credentials', formData);
    }}>
      <div className="flex flex-col gap-4">
        <FormField type='hidden' fieldData={{id: 'redirectTo', value: '/dashboard'}} />
        <FormField type='input' fieldData={{type: 'email', id: 'email', label: 'Email', value: 'john@doe.com'}} />
        <FormField type='input' fieldData={{type: 'password', id: 'password', label: 'Password', value: 'password'}} />
        <FormField type='checkbox' fieldData={{id: 'legal', label: 'I agree with the legal term', value: 'legal', isChecked: true}} />
        <FormField type='button'  fieldData={{type: 'submit', id: 'btSignIn', className: 'button primary', value: 'Sign In'}} />
      </div>
    </form>
  );
}
