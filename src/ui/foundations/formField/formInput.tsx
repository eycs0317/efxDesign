/*
  Required - label, type, id
  Optional - wrapperClassName, isRequired, isError, className, value, placeholder, helper

  Type - text, email, password, date, tel, url
*/

export default function FormInput({fieldData}) {
  const defaultWrapperClassName = 'flex flex-col';
  const defaultClassName = 'border p-2 mb-2';

  return (
    <div className={'formField formInput' + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : ' ' + defaultWrapperClassName) + ((fieldData.isRequired) ? ' formRequired' : '') + ((fieldData.isError) ? ' formError' : '')}>
      <label htmlFor={fieldData.id}>{fieldData.label}:</label>
      <input type={fieldData.type} name={fieldData.id} id={fieldData.id} className={(fieldData.className) ? fieldData.className : defaultClassName} defaultValue={(fieldData.value) ? fieldData.value : null} placeholder={(fieldData.placeholder) ? fieldData.placeholder : null} />
      {(() => {
        return (fieldData.helper) ? <small className="helper">{fieldData.helper}</small> : null;
      })()}
    </div>
  );
}
