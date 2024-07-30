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
  // border-b-2 font-medium border-blue-500

  return (
    <div className="z-2">
      <nav className="flex flex-col sm:flex-row-reverse bg-earth-sky-view bg-opacity-0">
        {PAGES.map((page, index) => (
          <Link
            key={index + navigationLink + navigationIncrement++}
            href={`/${Object.keys(page)[0]}`}
            className={`text-background py-4 px-6 block hover:text-background focus:outline-none ${setClassForText(selectedIndex, index)}`}
            aria-current="page"
            onClick={() => saveSelectedindex(index)}
          >
            {Object.values(page)[0]}
          </Link>
        ))}
      </nav>
    </div>
    // <nav className="bg-background">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* <!-- Mobile menu button--> */}
    //         <button
    //           type="button"
    //           className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="absolute -inset-0.5"></span>
    //           <span className="sr-only">Open main menu</span>
    //           {/* <!--
    //             Icon when menu is closed.

    //             Menu open: "hidden", Menu closed: "block"
    //           --> */}
    //           <svg
    //             className="block h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //             />
    //           </svg>
    //           {/* <!--
    //             Icon when menu is open.

    //             Menu open: "block", Menu closed: "hidden"
    //           --> */}
    //           <svg
    //             className="hidden h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {/* <!-- Current: "bg-background text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
    //             {PAGES.map((page, index) => (
    //               <Link
    //                 key={index + navigationLink + navigationIncrement++}
    //                 href={`/${Object.keys(page)[0]}`}
    //                 className={`rounded-md px-3 py-2 text-sm font-medium ${setClassForText(selectedIndex, index)}`}
    //                 aria-current="page"
    //                 onClick={() => saveSelectedindex(index)}
    //               >
    //                 {Object.values(page)[0]}
    //               </Link>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    //   <div className="sm:hidden" id="mobile-menu">
    //     <div className="space-y-1 px-2 pb-3 pt-2">
    //       {/* <!-- Current: "bg-background text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
    //       {PAGES.map((page, index) => (
    //         <Link
    //           key={index + mobileNavigationLink + navigationIncrement++}
    //           href={`/${Object.keys(page)[0]}`}
    //           className={`rounded-md px-3 py-2 text-sm font-medium ${setClassForText(selectedIndex, index)}`}
    //           aria-current="page"
    //           onClick={() => saveSelectedindex(index)}
    //         >
    //           {Object.values(page)[0]}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </nav>
  );
}
