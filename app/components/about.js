import {useRef, useEffect} from "react";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutItems =
    aboutRef.current.querySelectorAll('.content');

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
    <main ref={aboutRef} className="flex flex-col text-text text-start items-center z-20 pb-48 about">
      <div className="xs:w-auto lg:w-1/2 content">
        <div className="flex col-span-1 flex-col w-full items-center text-gray-300 relative bg-translucent-background z-10">
          <div className="p-12 space-y-4">
            <p>
              In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts. I got first gig as a software engineer 6 months into teaching myself Node and React.
            </p>
            <p>
              Since then, I have worked with many technologies and projects. I love building software! In my latest venture, I am rebuilding the <a href="https://github.com/Natasha08/fitness-tracker" target="_blank" rel="noopener
          noreferrer"className="text-interactive">workout app</a> that started it all with NextJS.
            </p>
            <p>
              When I am not <a href="https://github.com/Natasha08" target="_blank" rel="noopener
          noreferrer"className="text-interactive">writing code</a>, I'm reading or playing the latest Zelda game or <a href="https://github.com/Natasha08/LUA-EditMacroTargets"  target="_blank" rel="noopener
          noreferrer"className="text-interactive">World of Warcraft</a>World of Warcraft.
            </p>
          </div>
        </div>
      </div>
      <div className="xs:w-1/3 lg:w-1/2"></div>
    </main>
  );
}
