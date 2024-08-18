import Image from 'next/image';
import StealthItem from '@/components/stealth-item';
import characterImage from '@/public/character_leaning.png';
import characterAtDesk from '@/public/character_at_desk.jpeg';

const Home = () => (
  <div className="pb-12 h-screen flex flex-col justify-center">
    <div
      className="fixed inset-0 bg-cover bg-center z-0 w-screen h-screen"
      style={{
        background: `radial-gradient(circle at top, rgb(26, 41, 92) 0%, rgb(34, 51, 100) 50%, rgb(19, 30, 67) 100%)`,
      }}
    ></div>
    <div className="pt-10 flex flex-col items-center justify-center mx-auto z-10">
      <header className="text-center text-5xl pb-8 font-extrabold tracking-widest text-white">
        NATASHA OSBORNE
        <StealthItem
          src={characterImage}
          alt="Natasha character that is hidden until mouseover"
          positionClasses="top-32 inset-1/2 w-12 opacity-0 md:opacity-100"
          width="12"
        />
      </header>
      <p className="text-center text-4xl font-semibold pb-4 hover:text-blue-500 transition-colors duration-300 text-muted-gold">
        Full Stack Software Engineer
      </p>
      <p className="text-center text-2xl font-light pt-2 text-white">
        BASED IN COLORADO, USA
      </p>
      <div className="mt-8 h-auto flex justify-center">
        <div className="relative max-w-md rounded-lg shadow-2xl shadow-interactive">
          <Image
            src={characterAtDesk}
            alt="Character at desk"
            width={500}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
