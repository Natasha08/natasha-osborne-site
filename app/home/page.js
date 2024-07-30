export default function Home() {
  return (
    <main className="h-full flex flex-col md:block">
      <div className="pt-40 flex flex-col bg-surface-of-europa bg-cover h-full w-full text-center">
        <header className="block h-3 text-white text-xl pb-10 font-extralight">
          NATASHA OSBORNE
        </header>
        <p className="block h-3 text-white text-2l xs:text-6xl pb-10 font-bold">
          Software Engineer
        </p>
      </div>
      <div className="pt-40 flex flex-col bg-mobile-rocky-mountain-1 bg-cover h-full w-full text-center">
        <header className="block h-3 text-white text-1l xs:text-xl pt-5 font-extralight">
          BASED IN COLORADO, USA
        </header>
      </div>
    </main>
  );
}

/*
  #TODO:
https://trello.com/c/Bd5V9tUw/24-home-page
*/
