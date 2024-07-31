import MouseGlow from '@/components/mouse-glow';
import StealthItem from '@/components/stealth-item';
import shipImage from '@/public/satellite_1.jpg';
import satelliteImage from '@/public/starbuck_ship.png';
import characterImage from '@/public/character_leaning.png';

export default function Home() {
  return (
    <main className="h-full flex flex-col md:block">
      <StealthItem
        src={shipImage}
        alt="satellite in orbit that is hidden until mousever"
        positionClasses="top-40 right-36"
      />
      <StealthItem
        src={satelliteImage}
        alt="ship that is hidden until mouseover"
        positionClasses="top-40 left-20"
      />
      <div className="pt-40 flex flex-col h-full w-full text-center bg-surface-of-europa bg-cover">
        <header className="block h-3 text-white text-xl pb-10 font-extralight">
          NATASHA OSBORNE
          <StealthItem
            src={characterImage}
            alt="Natasha character that is hidden until mouseover"
            positionClasses="top-32 inset-1/2 w-12"
            width="12"
          />
        </header>
        <p className="block h-3 text-white text-2l xs:text-6xl pb-10 font-bold">
          Software Engineer
        </p>
      </div>
      <div
        className="pt-40 flex flex-col h-full w-full text-center bg-mobile-rocky-mountain-1 bg-cover"
        alt="rocky mountains photo background"
      >
        <header className="block h-3 text-white text-1l xs:text-xl pt-5 font-extralight">
          BASED IN COLORADO, USA
        </header>
      </div>
      <MouseGlow />
    </main>
  );
}
