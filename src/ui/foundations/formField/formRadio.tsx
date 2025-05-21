/*
  Required - groupLabel, groupName, radios[]{label, id, value}
  Optional - groupClassName, isRequired, isError, helper, radios[]{wrapperClassName, className, isChecked}
*/

export default function FormInput({fieldData}) {
  const defaultGroupClassName = '';
  const defaultWrapperClassName = 'flex items-center';
  const defaultClassName = 'border mr-2';
  const radiosData = fieldData.radios;

  return (
    <fieldset className={'formGroup formGroupRadio' + ((fieldData.groupClassName) ? ' ' + fieldData.groupClassName : ' ' + defaultGroupClassName) + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <legend>{fieldData.groupLabel}</legend>
      {radiosData.map((radioData) => (
        <div key={radioData.id} className={'formField formRadio' + ((radioData.wrapperClassName) ? ' ' + radioData.wrapperClassName : ' ' + defaultWrapperClassName)}>
          <input type="radio" name={fieldData.groupName} id={radioData.id} className={(radioData.className) ? radioData.className : defaultClassName} defaultValue={radioData.value} defaultChecked={(radioData.isChecked) ? radioData.isChecked : false} />
          <label htmlFor={radioData.id}>{radioData.label}:</label>
        </div>
      ))}
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </fieldset>
  );
}
