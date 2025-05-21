/*
  Required - type, id, value
  Optional - wrapperClassName, className

  Type - submit, button
*/

// nextjs
import Image from 'next/image';

export default function FormButton({fieldData}) {
  const defaultWrapperClassName = 'flex flex-col mt-4';
  const defaultClassName = 'border p-2 mb-2';

  return (
    <div className={'formField formButton' + ((fieldData.wrapperClassName) ? ' ' + fieldData.wrapperClassName : ' ' + defaultWrapperClassName)}>
      <button type={fieldData.type} name={fieldData.id} id={fieldData.id} className={(fieldData.className) ? fieldData.className : defaultClassName}>{fieldData.value}
        {(() => {
          return (fieldData.image) ? <Image src={fieldData.image.src} alt={fieldData.image.alt} width={fieldData.image.width} height={fieldData.image.height} priority={true} /> : null;
        })()}
      </button>
    </div>
  );
}
