/*
  USAGE:
  ===========
  <FormField type='select' fieldData={{
    label: 'State',                             @required
    id: 'id_state',                             @required
    wrapperClassName: 'flex flex-col',          @optional | @default: 'flex flex-col'
    className: 'border p-2 w-full',             @optional | @default: 'border p-2 w-full'
    selectedID: 'id_ca',                        @optional
    isRequired: false,                          @optional | @options: true | false
    isError: false,                             @optional | @default: true | false
    helper: 'Select one option',                @optional
    options: [{                                 @optional
      value: 'AK',                              @required
      id: 'id_ak'                               @required
    }, {
      value: 'CA',                              @required
      id: 'id_ca'                               @required
    }]
  }} />
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex flex-col';
  const defaultClassName = 'border p-2 w-full';
  const optionsData = fieldData.options;

  return (
    <div className={defaultWrapperClassName + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : '') + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <label htmlFor={fieldData.id}>{fieldData.label}:</label>
      <select name={fieldData.id} id={fieldData.id} className={defaultClassName + ((fieldData.className) ? ' ' + fieldData.className : '')}  defaultValue={(fieldData.selectedID) ? fieldData.selectedID : null}>
        {optionsData.map((optionData) => (
          <option key={optionData.id} value={optionData.id}>{optionData.value}</option>
        ))}
      </select>
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </div>
  );
}
