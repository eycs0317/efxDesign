/*
  USAGE:
  ===========
  <FormField type='hidden' fieldData={{
    id: 'redirectTo',                     @required
    value: '/dashboard'                   @optional
  }} />
*/

export default function FormHidden({fieldData}) {
  return (
    <input type="hidden" name={fieldData.id} id={fieldData.id} defaultValue={(fieldData.value) ? fieldData.value : null} />
  );
}
