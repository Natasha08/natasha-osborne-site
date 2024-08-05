export default function About() {
  return (
    <main className="flex flex-col text-text text-start items-center z-20 pb-48">
      <div className="xs:w-auto lg:w-1/2">
        <div className="flex col-span-1 flex-col w-full items-center text-gray-300 relative bg-translucent-background z-10">
          <div className="p-12 space-y-4">
            <p>
              {`In 2016, I built an Excel spreadsheet that evolved into a PHP app
              to track my workouts. I pivoted to learning how to build apps. I got
              first gig as a software engineer 6 months into teaching myself Node and React.`}
            </p>
            <p>
              {`Since then, I have worked with Ruby on Rails, firmware, Ethereum, mobile apps
              (native and cross-platform technologies), and many other technologies, projects
              and companies. I love building software! In my latest venture, I'm rebuilding the
              workout app that started it all with NextJS.`}
            </p>
            <p>
              {`When I'm not writing code, I'm hanging out with my husband and
              cats, playing the latest Zelda game or World of Warcraft. I'm currently reading the Expanse series, and when I'm not in the mountains, I'm scuba diving at some reef in
              the Cayman Islands.`}
            </p>
          </div>
        </div>
      </div>
      <div className="xs:w-1/3 lg:w-1/2"></div>
    </main>
  );
}
