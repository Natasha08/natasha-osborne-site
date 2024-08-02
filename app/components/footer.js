const Footer = () => (
  <footer className="bg-black bg-opacity-50 text-text fixed bottom-0 left-0 w-full z-10 font-bold">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://natashaosborne.com" className="hover:underline">Natasha Osborne</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
          <a href="/about" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
          <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
    </div>
  </footer>
);

export default Footer;
