'use client';

export const PAGES = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About'},
  {id: 'resume', label: 'Resume'},
  {id: 'skills', label: 'Skills'},
];

export default function AppNav({activeSection, sectionRefs, pages = PAGES}) {
  const setNavColors = () => {
    if (activeSection != 'home') {
      return "border-interactive ";
    } else {
      return "border-blue-500 ";
    }
  }

  const Menu = ({activeSection, sectionRefs, pages}) => (
    <div className="pt-40 flex col-span-1 flex-col items-center">
      <ul className="pt-12 items-center menu">
        {pages.map((page, index) => {
          return (
            <li key={index} className="group">
              <input
                type="radio"
                key={page.id}
                name="nav-menu"
                defaultChecked={activeSection === page.id}
                data-tooltip-target={`tooltip-default-${index}`}
                className={`appearance-none w-4 h-4 border-2 rounded-full ${setNavColors()} ${activeSection == page.id ? 'bg-white' : ''}`}
                onClick={() => {
                  sectionRefs[index].current.scrollIntoView({behavior: 'smooth'});
                }}
              />
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

  const navBackgroundClasses = () => {
    return 'text-text fixed top-0 left-0 w-full z-10';
  };

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
