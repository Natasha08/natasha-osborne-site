import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const PAGES = [
  {'about-me': 'About Me'},
  {posts: 'Blog'},
  {resume: 'Resume'},
  {work: 'Work'},
  {home: 'Home'},
];

/*
  #TODO:
  - mobile navbar
  - make the background image for the navbar change based on which page you're on
  - make loading page background everywhere black
*/

export default function AppNav() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [navInitialized, setNavInitialized] = useState(false);
  const pathname = usePathname().replace(/\//g, '');
  const navigationLink = '-navigation-link-';
  // #TODO: make mobile nav
  // const mobileNavigationLink = '-nmobile-avigation-link-';
  var navigationIncrement = 1;

  const saveSelectedindex = (index) => {
    setSelectedIndex(index);
  };

  const setClassForText = (selectedIndex, index) => {
    if (selectedIndex === index)
      return 'text-interactive border-b-2 font-medium border-blue-500';
    return 'text-white';
  };

  if (!navInitialized) {
    if (pathname) {
      const initialIndex = PAGES.findIndex(
        (page) => Object.keys(page)[0] === pathname,
      );
      setSelectedIndex(initialIndex);
      setNavInitialized(true);
    }
  }

  return (
    <div className="z-2">
      <nav className="flex flex-col sm:flex-row-reverse bg-earth-sky-view bg-opacity-0">
        {PAGES.map((page, index) => (
          <Link
            key={index + navigationLink + navigationIncrement++}
            href={`/${Object.keys(page)[0]}`}
            className={`text-background py-4 px-6 block hover:text-interactive focus:outline-none ${setClassForText(selectedIndex, index)}`}
            aria-current="page"
            onClick={() => saveSelectedindex(index)}
          >
            {Object.values(page)[0]}
          </Link>
        ))}
      </nav>
    </div>
  );
}
