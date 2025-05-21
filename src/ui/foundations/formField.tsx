// ui
import FormButton from '@/ui/foundations/formField/formButton';
import FormCheckbox from '@/ui/foundations/formField/formCheckbox';
import FormHidden from '@/ui/foundations/formField/formHidden';
import FormInput from '@/ui/foundations/formField/formInput';
import FormRadio from '@/ui/foundations/formField/formRadio';
import FormSelect from '@/ui/foundations/formField/formSelect';

export default function FormField({type, fieldData}) {
  return (
    <>
      {(() => {
        switch (type) {
          case 'button':
            return <FormButton fieldData={fieldData} />;
          case 'checkbox':
            return <FormCheckbox fieldData={fieldData} />;
          case 'hidden':
            return <FormHidden fieldData={fieldData} />;
          case 'radio':
            return <FormRadio fieldData={fieldData} />;
          case 'select':
            return <FormSelect fieldData={fieldData} />;
          default:
            return <FormInput fieldData={fieldData} />;
        }
      })()}
    </>
  );
}
