const SectionHeader = ({Icon, text}) => (
  <header className="relative z-10 pl-6 pb-10 flex flex-row items-center">
    <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-gray-500 hover:fill-[#d4af37] lg:mr-2" />
    <span className="pl-2 flex items-center text-lg font-medium text-[#f5f5f5]">
      {text}
    </span>
  </header>
);

export default SectionHeader;
