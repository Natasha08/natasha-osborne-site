'use client';

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
  <div className="pt-40 flex col-span-1 flex-col items-center">
    <ul className={`pt-12 items-center menu ${isMobile ? 'mobile' : ''}`}>
      {pages.map((page, index) => {
        const Icon = page.icon;
        return (
          <li key={index} className="group">
            <button
              key={page.id}
              data-tooltip-target={`tooltip-default-${index}`}
              className={`${setClassForText(activeSection, page.id, isMobile)}`}
              onClick={() => {
                sectionRefs[index].current.scrollIntoView({behavior: 'smooth'});
              }}
            >
              <Icon
                className={`size-6 hover:text-interactive ${setClassForText(activeSection, page.id, isMobile)}`}
              />
            </button>
            <span
              id={`tooltip-default-${index}`}
              role="tooltip"
              className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-deep-blue rounded-lg shadow-sm opacity-0 tooltip z-20 hover:visible group-hover:opacity-100"
            >
              {page.label}
            </span>
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
  const NavigationList = ({containerClasses, navClasses}) => (
    <div className={containerClasses}>
      <nav className={navClasses}>
        <Menu
          activeSection={activeSection ? activeSection : 'home'}
          sectionRefs={sectionRefs}
          pages={pages}
        />
      </nav>
    </div>
  );

  return (
    <NavigationList
      containerClasses="hidden md:block"
      navClasses={`flex flex-col sm:flex-row ${navBackgroundClasses()}`}
      ariaControls="mobile-menu"
    />
  );
}
