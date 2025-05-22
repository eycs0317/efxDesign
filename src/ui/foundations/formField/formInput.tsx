/*
  USAGE:
  ===========
  <FormField type='input' fieldData={{
    type: 'text',                               @required | @options: text | email | password | date | tel | url
    id: 'id_firstName',                         @required
    label: 'First Name',                        @required
    wrapperClassName: 'flex flex-col',          @optional | @default: 'flex flex-col'
    isRequired: false,                          @optional | @options: true | false
    isError: false,                             @optional | @default: true | false
    className: 'border p-2 w-full',             @optional | @default: 'border p-2 w-full'
    value: 'John',                              @optional
    placeholder: 'John',                        @optional
    helper: 'Enter first name'                  @optional
  }} />
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex flex-col';
  const defaultClassName = 'border p-2 w-full leading-[1.3]';

  return (
    <div className={defaultWrapperClassName + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : '') + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <label htmlFor={fieldData.id}>{fieldData.label}:</label>
      <input type={fieldData.type} name={fieldData.id} id={fieldData.id} className={(fieldData.className) ? fieldData.className : defaultClassName} defaultValue={(fieldData.value) ? fieldData.value : null} placeholder={(fieldData.placeholder) ? fieldData.placeholder : null} />
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </div>
  );
}
