const SkillBubble = ({
  text,
  textStyle = 'text-sky-400 text-xs',
  textBackground = 'bg-sky-400/10',
}) => (
  <li className="mr-1.5 mt-2">
    <div
      className={`flex items-center justify-center rounded-full ${textBackground} px-3 py-1 font-medium leading-5 ${textStyle} min-w-max max-w-fit`}
    >
      {text}
    </div>
  </li>
);

export default SkillBubble;
