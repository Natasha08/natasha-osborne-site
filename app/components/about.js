import {useRef, useEffect} from 'react';
import Link from 'next/link';

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
    <main ref={aboutRef} id="about-me" className="main-container">
      <div className="content">
        <header className="pb-12">ABOUT</header>
        <div className="flex col-span-1 flex-col w-full items-center relative bg-translucent-background z-10">
          <div className="p-12 space-y-4">
            <p>
              In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts. I obtained my first gig as a software
              engineer 6 months into teaching myself Node and React.
            </p>
            <p>
              Since then, I&apos;ve worked with many technologies and projects.
              I love building software! In my latest personal project, I built a{' '}
              <Link href="/space" className="text-interactive">
                3d animation scene{' '}
              </Link>
              with ThreeJS.
            </p>
            <p>
              When I&apos;m not{' '}
              <Link
                href="https://github.com/Natasha08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-interactive"
              >
                writing code
              </Link>
              , I&apos;m reading, playing the latest Zelda game or{' '}
              <Link
                href="https://github.com/Natasha08/LUA-EditMacroTargets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-interactive"
              >
                World of Warcraft.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="xs:w-1/3 lg:w-1/2"></div>
    </main>
  );
}
