export default function About({isAboutVisible}) {
  return (
    <main className="flex flex-col h-full w-full text-text text-start items-center">
      <div className="grid grid-cols-1 w-3/5 h-full">
        <div
          className={`flex col-span-1 flex-col h-screen w-full items-center ${isAboutVisible ? 'overflow-y-auto' : 'overflow-hidden'}`}
        >
          <div className="p-12 space-y-4">
            <p>
              {`In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts while I awaited news for my Master's in
              Occupational Therapy.`}
            </p>
            <p>
              {`When I wasn't selected, I pivoted to learning how to build apps.`}
            </p>
            <p>
              {`Little did I know that in the year that I waited to reapply for my
              master's, I would go on to learn Angular, Node, React, Ruby on
              Rails and get my first gig as a software engineer 6 months into
              learning.`}
            </p>
            <p>
              {`Since then, I have worked with firmware, Ethereum, mobile apps
              (native and cross-platform technologies), and many other projects
              and companies, the latest of which is one of the best EdTech
              companies out there.`}
            </p>
            <p>
              {`I love building software! In my latest venture, I'm rebuilding the
              workout app that started it all with NextJS.`}
            </p>
            <p>
              {`When I'm not writing code, I'm hanging out with my husband and
              cats, playing the latest Zelda game or World of Warcraft.`}
            </p>
            <p>
              {`I'm currently reading the Expanse series, and when I'm not in the
              mountains, I'm scuba diving at some reef in the Cayman Islands.`}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
