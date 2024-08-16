const SkillBubble = ({
  text,
  textColor = 'text-blue-500',
  textBackground = 'bg-deep-blue',
}) => (
  <li className="mr-1.5 mt-2">
    <div
      className={`flex items-center justify-center rounded-full ${textBackground} px-3 py-1 text-xs font-medium leading-5 ${textColor} min-w-max max-w-fit text-xs`}
    >
      {text}
    </div>
  </li>
);

export default SkillBubble;
