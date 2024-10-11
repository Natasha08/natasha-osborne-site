import {useRef} from 'react';
import Link from 'next/link';
import {UserIcon} from '@heroicons/react/24/outline';

import useObserver from './use-observer';

export default function About() {
  const aboutRef = useRef(null);
  useObserver(aboutRef, '.content');

  return (
    <main ref={aboutRef} className="main-container overflow-hidden">
      <div className="w-screen  lg:max-w-lg xl:max-w-xl max-w-2xl content">
        <header className="relative z-10 pl-6 flex flex-row items-center">
          <UserIcon className="h-7 w-7 lg:h-8 lg:w-8 text-gray-500 hover:fill-[#d4af37] lg:mr-2" />
          <span className="pl-2 flex items-center text-lg font-medium text-[#f5f5f5]">
            About
          </span>
        </header>

        <div className="relative z-10">
          <div className="p-4 md:p-6 lg:py-12 2xl:py-0 space-y-4 text-wrap leading-loose 2xl:leading-relaxed">
            <p>
              In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts. I obtained my first gig as a software
              engineer 6 months into teaching myself Node and React.
            </p>
            <p>
              Since then, I&apos;ve worked with many technologies and projects.
              I love building software! In my latest personal project, I built a{' '}
              <a
                href={process.env.NEXT_PUBLIC_SPACE_URL}
                className="text-[#ffcc80] hover:text-interactive"
              >
                3d animation scene{' '}
              </a>
              with ThreeJS.
            </p>
            <p>
              When I&apos;m not{' '}
              <Link
                href="https://github.com/Natasha08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffcc80] hover:text-interactive"
              >
                writing code
              </Link>
              , I&apos;m reading, playing the latest Zelda game or{' '}
              <Link
                href="https://github.com/Natasha08/LUA-EditMacroTargets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffcc80] hover:text-interactive"
              >
                World of Warcraft.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
