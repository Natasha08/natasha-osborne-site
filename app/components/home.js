import StealthItem from '@/components/stealth-item';
import characterImage from '@/public/character_leaning.png';

const Home = () => (
  <div>
    <div
      className="fixed inset-0 bg-cover bg-center z-0 w-screen home"
      style={{
        background: `radial-gradient(circle at center, rgb(26, 41, 92) 0%, rgb(42, 63, 136) 60%, rgb(19, 30, 67) 100%)`,
      }}
    >
      <div className="pt-40 flex flex-col h-screen w-full items-center"></div>
    </div>
    <div className="pt-40 flex flex-col h-screen w-screen items-center mx-auto">
      <header className="text-center text-4xl pb-10 font-bold z-10 tracking-wider">
        NATASHA OSBORNE
        <StealthItem
          src={characterImage}
          alt="Natasha character that is hidden until mouseover"
          positionClasses="top-32 inset-1/2 w-12 opacity-0 md:opacity-100"
          width="12"
        />
      </header>
      <p className="text-center text-3xl font-semibold pb-6 hover:text-blue-500 transition-colors duration-300 text-muted-gold">
        Full Stack Software Engineer
      </p>
      <p className="text-center text-xl font-light pt-4">
        BASED IN COLORADO, USA
      </p>
    </div>
  </div>
);

export default Home;
