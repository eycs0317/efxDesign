export default function Header() {
  const hero = {
    heading: 'Crafting Modern Websites for your Business',
    subheading: 'We create visually appealing and user-friendly websites that help your Business stand out in the digital world',
    cta: 'Get Started',
  };

  return (
    <div className="flex flex-col bg-gray-800 text-white items-center p-10 justify-center gap-6">
      <h1 className="text-5xl">{hero.heading}</h1>
      <p>{hero.subheading}</p>
      <button className="bg-white text-black py-3 px-5 rounded-md hover:bg-gray-200">{hero.cta}</button>
    </div>
  );
}
