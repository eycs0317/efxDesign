// ui
import FormField from '@/ui/foundations/formField';

export default async function address() {
  const states = await prisma.state.findMany({
    select: {
      stateAbbr: true,
    }
  });

  let stateOptions = states.map(function(states) {
    return {
      value: states.stateAbbr,
      id: states.stateAbbr
    };
  });

  console.log(stateOptions);

  return (
    <form className="flex flex-col gap-4 w-6/12" action="">
      <div className="flex gap-4 flex-col md:flex-row">
        <FormField type='input' fieldData={{type: 'text', id: 'street1', label: 'Street Address 1', wrapperClassName: 'w-full md:w-1/2'}} />
        <FormField type='input' fieldData={{type: 'text', id: 'street2', label: 'Street Address 2', wrapperClassName: 'w-full md:w-1/2'}} />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <FormField type='input' fieldData={{type: 'text', id: 'city', label: 'City', wrapperClassName: 'w-full md:w-2/3'}} />
        <FormField type='select' fieldData={{label: 'State', id: 'state', wrapperClassName: 'w-full md:w-1/6', options: stateOptions}} />
        <FormField type='input' fieldData={{type: 'text', id: 'postal', label: 'Postal Code', wrapperClassName: 'w-full md:w-2/6'}} />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <FormField type='button' fieldData={{type: 'submit', id: 'btSubmit', className: 'primary', value: 'Submit'}} />
      </div>
    </form>
  );
}
