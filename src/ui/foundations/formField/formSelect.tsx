/*
  Required - label, id, options[]{id, value}
  Optional - wrapperClassName, isRequired, isError, helper, className, selectedID
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex flex-col';
  const defaultClassName = 'border p-2 mb-2';
  const optionsData = fieldData.options;

  return (
    <div className={'formField formSelect' + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : ' ' + defaultWrapperClassName) + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <label htmlFor={fieldData.id}>{fieldData.label}:</label>
      <select name={fieldData.id} id={fieldData.id} className={(fieldData.className) ? fieldData.className : defaultClassName}  defaultValue={(fieldData.selectedID) ? fieldData.selectedID : null}>
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
