import {useEffect, useRef} from 'react';
import Link from 'next/link';

const SkillBubble = ({text}) => (
  <li className="mr-1.5 mt-2">
    <div className="flex items-center justify-center rounded-full bg-deep-blue px-3 py-1 text-xs font-medium leading-5 text-blue-500 min-w-max">
      {text}
    </div>
  </li>
);

const ResumeTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems =
      timelineRef.current.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div
      ref={timelineRef}
      className="timeline text-start text-text z-20 flex flex-col pb-48"
    >
      <div className="timeline-item mb-8">
        <a
          href="https://parentsquare.com"
          target="_blank"
          rel="noopener
          noreferrer"
          className="timeline-content w-1/2 hover:bg-deep-blue"
        >
          <h2 className="hover:text-interactive text-gray-400 text-md">
            2022-2024
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            Full Stack Software Engineer
          </p>
          <p className="text-interactive text-sm md:text-base">ParentSquare</p>
          <ul className="mt-2 flex flex-wrap space-x-2">
            <SkillBubble text="Javascript" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="HTML & CSS" />
          </ul>
        </a>
      </div>
      <div className="timeline-item mb-8">
        <a
          href="https://radialdevgroup.com"
          target="_blank"
          rel="noopener
          noreferrer"
          className="timeline-content w-1/2 hover:bg-deep-blue"
        >
          <h2 className="hover:text-interactive text-gray-400 text-md">
            2019-2022
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">Developer Lead</p>
          <p className="text-interactive text-sm md:text-base">
            Radial Development Group
          </p>
          <ul className="mt-2 flex flex-wrap space-x-2">
            <SkillBubble text="React" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Cordova" />
            <SkillBubble text="Swift" />
            <SkillBubble text="HTML & CSS" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="Testing" />
            <SkillBubble text="Project Management" />
          </ul>
        </a>
      </div>
      <div className="timeline-item mb-8">
        <a
          href="https://originprotocol.com"
          target="_blank"
          rel="noopener
          noreferrer"
          className="timeline-content w-1/2 hover:bg-deep-blue"
        >
          <h2 className="hover:text-interactive text-gray-400 text-md">
            2018-2019
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            Full Stack Software Engineer
          </p>
          <p className="text-interactive text-sm md:text-base">
            Origin Protocol
          </p>
          <ul className="mt-2 flex flex-wrap space-x-2">
            <SkillBubble text="Python" />
            <SkillBubble text="React" />
            <SkillBubble text="GraphQL" />
            <SkillBubble text="HTML & CSS" />
          </ul>
        </a>
      </div>
      <div className="timeline-item mb-8">
        <a
          href="https://radialdevgroup.com"
          target="_blank"
          rel="noopener
          noreferrer"
          className="timeline-content w-1/2 hover:bg-deep-blue"
        >
          <h2 className="hover:text-interactive text-gray-400 text-md">
            2017-2018
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">Developer Lead</p>
          <p className="text-interactive text-sm md:text-base">
            Radial Development Group
          </p>
          <ul className="mt-2 flex flex-wrap space-x-2">
            <SkillBubble text="React" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Django" />
            <SkillBubble text="HTML & CSS" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="Testing" />
            <SkillBubble text="Project Management" />
          </ul>
        </a>
      </div>
      <div className="text-center text-text mb-8 z-20">
        <Link
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-interactive text-gray-300 md:text-lg lg:text-xl"
        >
          View Full Résumé
        </Link>
      </div>
    </div>
  );
};

export default ResumeTimeline;
