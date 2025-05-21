/*
  Required - id
  Optional - value
*/

export default function FormHidden({fieldData}) {
  return (
    <input type="hidden" name={fieldData.id} id={fieldData.id} defaultValue={(fieldData.value) ? fieldData.value : null} />
  );
}
