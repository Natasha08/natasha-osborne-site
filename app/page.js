import Image from 'next/image';

export default function Main() {
  return (
    <main>
      <div className="container place-items-center">
        <Image
          alt="Outer Space background"
          fill
          priority
          src="/unknown_space_location.png"
        />
      </div>

      <p style={{textAlign: 'center'}}>Hello World</p>
    </main>
  );
}
