// data
import {getHeroHome} from '../../data/static/layout';

export default function Header() {
  const hero = getHeroHome();

  return (
    <div className="flex flex-col bg-gray-800 text-white items-center p-10 justify-center gap-6">
      <h1 className="text-5xl">{hero.heading}</h1>
      <p>{hero.subheading}</p>
      <button className="bg-white text-black py-3 px-5 rounded-md hover:bg-gray-200">{hero.cta}</button>
    </div>
  );
}
