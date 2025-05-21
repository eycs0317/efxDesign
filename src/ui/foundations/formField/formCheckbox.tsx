/*
  Required - label, id, value
  Optional - wrapperClassName, isRequired, isError, className, isChecked, helper
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex items-center';
  const defaultClassName = 'border mr-2';

  return (
    <div className={'formField formCheckbox' + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : ' ' + defaultWrapperClassName) + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <input type="checkbox" name={fieldData.id} id={fieldData.id} className={(fieldData.className) ? fieldData.className : defaultClassName} defaultValue={fieldData.value} defaultChecked={(fieldData.isChecked) ? fieldData.isChecked : false} />
      <label htmlFor={fieldData.id}>{fieldData.label}:</label>
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </div>
  );
}
