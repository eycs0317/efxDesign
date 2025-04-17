export default function Header() {
  return (
    <div className='flex flex-col bg-gray-800 text-white items-center p-10 justify-center gap-6'>
      <h1 className='text-5xl'>Crafting Modern Websites for your Business</h1>
      <p>
        We create visually appealing and user-friendly websites that help your
        Business stand out in the digital world
      </p>
      <button className='bg-white text-black py-3 px-5 rounded-md hover:bg-gray-200'>
        Get Started
      </button>
    </div>
  );
}
