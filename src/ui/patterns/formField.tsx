export default function FormField({fieldData}) {
  const groupClassName = (fieldData.groupClassName) ? fieldData.groupClassName : 'formField flex flex-col';
  const fieldClassName = (fieldData.className) ? fieldData.className : 'border p-2 mb-2';
  const fieldValue = (fieldData.value) ? fieldData.value : null;
  const fieldIsChecked = (fieldData.isChecked) ? fieldData.isChecked : null;

  return (
    <div className={groupClassName}>
      {(() => {
        switch (fieldData.type) {
          case 'submit':
          case 'checkbox':
            return null;
          default:
            return <label htmlFor={fieldData.id}>{fieldData.label}:</label>;
        }
      })()}
      {(() => {
        switch (fieldData.type) {
          case 'text':
          case 'email':
          case 'password':
            return <input type={fieldData.type} name={fieldData.id} id={fieldData.id} className={fieldClassName} />;
          case 'checkbox':
            return <input type={fieldData.type} name={fieldData.id} id={fieldData.id} className={fieldClassName} value={fieldValue} defaultChecked={fieldIsChecked} />;
          case 'radio':
            return <input type={fieldData.type} name={fieldData.id} id={fieldData.id} className={fieldClassName} />;
          case 'submit':
            return <button className={fieldClassName}>{fieldValue}</button>;
        }
      })()}
      {(() => {
        switch (fieldData.type) {
          case 'checkbox':
            return <label htmlFor={fieldData.id}>{fieldData.label}</label>;
          default:
            return null;
        }
      })()}
    </div>
  );
}
