import Link from 'next/link';
import Image from 'next/image';

const Footer = ({sectionRefs}) => (
  <footer className="bg-black bg-opacity-50 text-text fixed bottom-0 left-0 w-full z-10 font-bold">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-row">
      {/* <div className="flex justify-start flex-col"> */}
      <span className="text-sm sm:text-center justify-start flex-col">
        © 2024{' '}
        <Link
          href="https://natasha-osborne.dev"
          className="hover:underline hover:text-muted-gold"
        >
          Natasha Osborne
        </Link>
        . All Rights Reserved.
      </span>
      <Link
        href="https://github.com/natasha08"
        target="_blank"
        className="justify-start flex-col"
      >
        <Image src="/octocat.png" alt="Github Logo" height="40" width="40" />
      </Link>
      {/* </div> */}
      {/* <div className="flex justify-end"> */}
      <ul className="text-sm font-medium sm:mt-0 space-x-4 flex flex-row">
        <li>
          <button
            className="hover:underline hover:text-muted-gold justify-start flex"
            onClick={() => {
              sectionRefs
                .find((ref) => ref.current.id == 'about')
                .current.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
          >
            About
          </button>
        </li>
        <li>
          <Link
            href="mailto: admin@natasha-osborne.dev"
            className="font-medium hover:text-muted-gold hover:underline justify-start flex"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </div>
  </footer>
);

export default Footer;
