// ui
import FormField from '@/ui/foundations/formField';

export default function address() {
  return (
    <form className="pt-8 border-t mt-8" action="">
      <FormField type='input' fieldData={{type: 'text', id: 'street1', label: 'Street Address 1'}} />
      <FormField type='input' fieldData={{type: 'text', id: 'street2', label: 'Street Address 2'}} />
      <FormField type='input' fieldData={{type: 'text', id: 'city', label: 'City'}} />
      <FormField type='input' fieldData={{type: 'text', id: 'state', label: 'State'}} />
      <FormField type='input' fieldData={{type: 'text', id: 'postal', label: 'Postal Code'}} />
      <FormField type='button' fieldData={{type: 'submit', id: 'submit', className: 'button primary', value: 'Submit'}} />
    </form>
  );
}
