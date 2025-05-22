/*
  USAGE:
  ===========
  <FormField type='radio' fieldData={{
    groupLabel: 'Please select a color',        @required
    groupName: 'colorName',                     @required
    groupClassName: 'flex flex-row gap-6',      @optional | @default: 'flex flex-row gap-6'
    isRequired: false,                          @optional | @options: true | false
    isError: false,                             @optional | @default: true | false
    helper: 'Select one option',                @optional
    radios: [{                                  @required
      label: 'Red',                             @required
      value: 'value_red',                       @required
      id: 'id_red',                             @required
      wrapperClassName: 'flex flex-row',        @optional | @default: 'flex flex-row'
      className: 'border mr-2',                 @optional | @default: 'border mr-2'
      isChecked: true                           @optional | @default: true | false
    }, {
      label: 'Orange',                          @required
      value: 'value_orange',                    @required
      id: 'id_orange',                          @required
      wrapperClassName: 'flex flex-row',        @optional | @default: 'flex flex-row'
      className: 'border mr-2',                 @optional | @default: 'border mr-2'
      isChecked: false                          @optional | @default: true | false
    }]
  }} />
*/

export default function FormInput({fieldData}) {
  const defaultGroupClassName = 'flex flex-row gap-6';
  const defaultWrapperClassName = 'flex flex-row';
  const defaultClassName = 'border mr-2';
  const radiosData = fieldData.radios;

  return (
    <fieldset className={defaultGroupClassName + ((fieldData.groupClassName) ? ' ' + fieldData.groupClassName : '') + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <legend className="w-full">{fieldData.groupLabel}</legend>
      {radiosData.map((radioData) => (
        <div key={radioData.id} className={defaultWrapperClassName + ((radioData.wrapperClassName) ? ' ' + radioData.wrapperClassName : '')}>
          <input type="radio" name={fieldData.groupName} id={radioData.id} className={defaultClassName + ((radioData.className) ? ' ' + radioData.className : '')} defaultValue={radioData.value} defaultChecked={(radioData.isChecked) ? radioData.isChecked : false} />
          <label htmlFor={radioData.id} className="block w-full">{radioData.label}</label>
        </div>
      ))}
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </fieldset>
  );
}
