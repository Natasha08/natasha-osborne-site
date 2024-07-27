import Image from "next/image";

export default function Main() {
  return (
    <main>
      <div className="container place-items-center">
        <Image
          src="/unknown_space_location.png"
          alt="Outer Space background"
          fill
          priority
        />
      </div>
      <p style={{textAlign: "center"}}>Hello World</p>
    </main>
  );
}
