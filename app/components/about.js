import {useRef, useEffect} from 'react';
import Link from 'next/link';
import {UserIcon} from '@heroicons/react/24/outline';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutItems = aboutRef.current.querySelectorAll('.content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    aboutItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      aboutItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <main ref={aboutRef} className="main-container lg:ml-52 lg:pt-36">
      <div className="lg:ml-48 w-full lg:w-3/4">
        <header className="relative z-10 ml-10 lg:ml-16 flex flex-row items-center">
          <UserIcon className="h-7 w-7 lg:h-8 lg:w-8 text-gray-500 hover:fill-[#d4af37] lg:mr-2" />
          <span className="pl-2 flex items-center text-lg lg:text-xl font-medium text-[#f5f5f5]">
            About
          </span>
        </header>

        <div className="relative z-10 px-5">
          <div className="p-4 md:p-6 lg:p-12 space-y-12 text-wrap leading-loose">
            <p>
              In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts. I obtained my first gig as a software
              engineer 6 months into teaching myself Node and React.
            </p>
            <p>
              Since then, I&apos;ve worked with many technologies and projects.
              I love building software! In my latest personal project, I built a{' '}
              <Link
                href="/space"
                className="text-[#ffcc80] hover:text-interactive"
              >
                3d animation h-ene{' '}
              </Link>
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
              , I&apos;m reading or playing the latest Zelda game or{' '}
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
