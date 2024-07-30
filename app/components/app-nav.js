import {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const PAGES = [
  {'about-me': 'About Me'},
  {posts: 'Blog'},
  {resume: 'Resume'},
  {work: 'Work'},
  {home: 'Home'},
];

const PagesList = ({
  selectedIndex,
  setSelectedIndex,
  navigationLink,
  isMobile = false,
}) =>
  PAGES.map((page, index) => (
    <Link
      key={`${index}-${navigationLink}`}
      href={`/${Object.keys(page)[0]}`}
      className={`text-background py-4 px-6 block hover:text-interactive focus:outline-none ${setClassForText(selectedIndex, index, isMobile)}`}
      aria-current="page"
      onClick={() => setSelectedIndex(index)}
    >
      {Object.values(page)[0]}
    </Link>
  ));

const setClassForText = (selectedIndex, index, isMobile) => {
  if (selectedIndex === index)
    return `text-interactive font-medium ${!isMobile ? 'border-blue-500 border-b-2' : ''}`;
  return 'text-white';
};

const navBackgroundClasses = () => {
  return 'bg-black bg-opacity-50 text-text fixed top-0 left-0 w-full z-10';
};

export default function AppNav() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [navInitialized, setNavInitialized] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const parsedPathname = usePathname().replace(/\//g, '');
  const [pathname, setPathname] = useState(parsedPathname);
  const navigationLink = '-navigation-link-';
  const mobileNavigationLink = '-nmobile-avigation-link-';

  if (!navInitialized) {
    if (pathname) {
      const initialIndex = PAGES.findIndex(
        (page) => Object.keys(page)[0] === pathname,
      );
      setSelectedIndex(initialIndex);
      setNavInitialized(true);
    }
  }

  useEffect(() => {
    if (parsedPathname != pathname) {
      setPathname(parsedPathname);
      setToggleMobileMenu(false);
    }
  }, [pathname, parsedPathname]);

  const NavigationList = ({containerClasses, navClasses}) => (
    <div className={containerClasses}>
      <nav className={navClasses}>
        <PagesList
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          navigationLink={navigationLink}
        />
      </nav>
    </div>
  );

  const MobileNavigationList = ({containerClasses, navClasses, navId}) => (
    <div className={containerClasses}>
      <div className={navClasses} id={navId}>
        <button
          className="fixed text-blue-600 p-3 z-10"
          aria-controls={navId}
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        >
          <svg
            className="block h-4 w-4 fill-current text-white"
            viewBox="0 0 20 20"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <div className={`m-5 ${toggleMobileMenu ? 'shown' : 'hidden'}`}>
          <PagesList
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            mobileNavigationLink={mobileNavigationLink}
            isMobile={true}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavigationList
        containerClasses="hidden md:block"
        navClasses={`flex flex-col sm:flex-row-reverse ${navBackgroundClasses()}`}
        ariaControls="mobile-menu"
      />
      <MobileNavigationList
        containerClasses="shown md:hidden"
        navClasses={`flex flex-col sm:flex-row ${navBackgroundClasses()}`}
        navId="mobile-menu"
      />
    </>
  );
}
