import StealthItem from '@/components/stealth-item';
import characterImage from '@/public/character_leaning.png';
import shipImage from '@/public/satellite_1.jpg';
import satelliteImage from '@/public/starbuck_ship.png';
// import { HomeIcon, UserIcon, FolderIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

const Home = () => (
  <div>
    <div className="bg-surface-of-europa bg-cover bg-fixed fixed w-screen grid grid-cols-2 gap-4">
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
      <div className="pt-40 flex col-span-1 flex-col h-screen w-full items-center"></div>
    </div>
    <div className="pt-40 flex col-span-1 flex-col h-screen w-full items-center">
      <header className="block h-3 text-text text-xl pb-10 font-extralight z-10">
        NATASHA OSBORNE
        <StealthItem
          src={characterImage}
          alt="Natasha character that is hidden until mouseover"
          positionClasses="top-32 inset-1/2 w-12"
          width="12"
        />
      </header>
      <p className="block h-3 text-text text-2l xs:text-2xl font-bold">
        Full Stack Software Engineer
      </p>
      <p className="pt-12 block h-3 text-text text-1l xs:text-xl pt-5 font-extralight">
        BASED IN COLORADO, USA
      </p>
    </div>
  </div>
);

export default Home;
