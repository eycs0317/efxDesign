// nextjs
import Image from 'next/image';

// ui
import FormField from '@/ui/patterns/formField';

export default function address() {
  return (
    <form className="pt-8 border-t mt-8" action="">
      <FormField fieldData={{type: 'text', id: 'street1', label: 'Street Address 1', value: ''}} />
      <FormField fieldData={{type: 'text', id: 'street2', label: 'Street Address 2', value: ''}} />
      <FormField fieldData={{type: 'text', id: 'city', label: 'City', value: ''}} />
      <FormField fieldData={{type: 'text', id: 'state', label: 'State', value: ''}} />
      <FormField fieldData={{type: 'text', id: 'postal', label: 'Postal Code', value: ''}} />
      <FormField fieldData={{type: 'submit', id: 'submit', className: 'button primary', value: 'Submit', groupClassName: 'flex flex-col mt-4'}} />
    </form>
  );
}
