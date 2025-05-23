/*
  USAGE:
  ===========
  <FormField type='checkbox' fieldData={{
    id: 'legal',                              @required
    label: 'I agree with the legal term',     @required
    value: 'legal',                           @required
    wrapperClassName: 'flex items-center',    @optional | @default: 'flex items-center'
    isRequired: false,                        @optional | @options: true | false
    isError: false,                           @optional | @default: true | false
    className: 'border mr-2',                 @optional | @default: 'border mr-2'
    isChecked: true,                          @optional | @options: true | false
    helper: 'Select accept legal term'        @optional
  }} />
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex items-center';
  const defaultClassName = 'border mr-2';

  return (
    <div className={defaultWrapperClassName + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : '') + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <input type="checkbox" name={fieldData.id} id={fieldData.id} className={defaultClassName + ((fieldData.className) ? ' ' + fieldData.className : '')} defaultValue={fieldData.value} defaultChecked={(fieldData.isChecked) ? fieldData.isChecked : false} />
      <label htmlFor={fieldData.id}>{fieldData.label}</label>
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </div>
  );
}
