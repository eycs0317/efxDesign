// authjs
import { signIn } from '../../../auth';

// nextjs
import Image from 'next/image';

// ui
import FormField from '@/ui/patterns/formField';

export default function signInEFX() {
  return (
    <form className="pt-8 border-t mt-8"
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
      }}
    >
      <FormField fieldData={{type: 'email', id: 'email', label: 'Email'}} />
      <FormField fieldData={{type: 'password', id: 'password', label: 'Password'}} />
      <FormField fieldData={{type: 'checkbox', id: 'legal', label: 'I agree with the legal term', value: 'legal', isChecked: true, groupClassName: 'formField flex items-center', className: 'border mr-2'}} />
      <FormField fieldData={{type: 'submit', id: 'password', className: 'button primary', value: 'Sign In', groupClassName: 'flex flex-col mt-4'}} />
    </form>
  );
}
