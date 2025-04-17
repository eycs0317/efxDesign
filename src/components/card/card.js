import Image from "next/image";
export default function Card({ title, description, image }) {
  return (
    <div className=''>
      <Image src={image} alt={title} width={100} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
