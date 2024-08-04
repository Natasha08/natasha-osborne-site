'use client';

import {useEffect, useState} from 'react';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';

export const PAGES = [
  {id: 'home', label: 'Home', icon: HomeIcon},
  {id: 'about', label: 'About', icon: UserIcon},
  {id: 'resume', label: 'Resume', icon: FolderIcon},
  {id: 'skills', label: 'Skills', icon: ComputerDesktopIcon},
];

const Menu = ({activeSection, sectionRefs, pages, isMobile = false}) => (
  <div className="pt-40 flex col-span-1 flex-col h-screen w-full items-center">
    <ul className="pt-12 menu items-center">
      {pages.map((page, index) => {
        const Icon = page.icon;
        return (
          <li key={index}>
            <button
              key={page.id}
              className={`${setClassForText(activeSection, page.id, isMobile)}`}
              onClick={() => {
                sectionRefs[index].current.scrollIntoView({behavior: 'smooth'});
              }}
            >
              <Icon
                className={`size-6 ${setClassForText(activeSection, page.id, isMobile)}`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

const setClassForText = (activeSection, id, isMobile) => {
  if (activeSection === id)
    return `text-interactive font-medium ${!isMobile ? 'border-blue-500 border-b-2' : ''}`;
  return 'text-text';
};

const navBackgroundClasses = () => {
  return 'text-text fixed top-0 left-0 w-full z-10';
};

export default function AppNav({activeSection, sectionRefs, pages = PAGES}) {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => {
    setToggleMobileMenu(false);
  }, []);

  const NavigationList = ({containerClasses, navClasses}) => (
    <div className={containerClasses}>
      <nav className={navClasses}>
        <Menu
          activeSection={activeSection}
          sectionRefs={sectionRefs}
          pages={pages}
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
            className="block h-4 w-4 fill-current text-text"
            viewBox="0 0 20 20"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <div
          className={`m-5 bg-black fixed ${toggleMobileMenu ? 'shown' : 'hidden'}`}
        >
          <Menu
            activeSection={activeSection}
            sectionRefs={sectionRefs}
            isMobile={true}
            pages={pages}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavigationList
        containerClasses="hidden md:block"
        navClasses={`flex flex-col sm:flex-row ${navBackgroundClasses()}`}
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
