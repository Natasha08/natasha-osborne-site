import Image from 'next/image';
import StealthItem from '@/components/stealth-item';
import characterImage from '@/public/character_leaning.png';
import characterAtDesk from '@/public/character_at_desk.jpeg';

const Home = () => (
  <div className="">
    <div
      className="fixed inset-0 bg-cover bg-center z-0"
      style={{
        background: `radial-gradient(circle at center, rgb(16, 26, 72) 20%, rgb(22, 38, 86) 60%, rgb(9, 14, 47) 100%)`,
      }}
    ></div>
  </div>
);

export default Home;
