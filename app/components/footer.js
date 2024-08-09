import Link from 'next/link';

const Footer = ({sectionRefs}) => (
  <footer className="bg-black bg-opacity-50 text-text fixed bottom-0 left-0 w-full z-10 font-bold">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm sm:text-center">
        © 2024{' '}
        <Link
          href="https://natasha-osborne.dev"
          className="hover:underline hover:text-interactive"
        >
          Natasha Osborne
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
          <button
            href="#about"
            className="hover:underline hover:text-interactive me-4 md:me-6"
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
            className="font-medium hover:text-interactive hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
