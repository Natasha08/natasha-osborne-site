import {useEffect, useRef} from 'react';
import Link from 'next/link';

const SkillBubble = ({text}) => (
  <li className="mr-1.5 mt-2">
    <div className="flex items-center justify-center rounded-full bg-background px-3 py-1 text-xs font-medium leading-5 text-blue-500 min-w-max">
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
      className="timeline text-start text-text z-20 h-full"
    >
      <div className="timeline-item mb-8 md:mb-16">
        <div className="timeline-content">
          <h2 className="hover:text-interactive text-lg md:text-xl lg:text-2xl">
            2022-2024
          </h2>
          <p className="text-md md:text-lg">Full Stack Software Engineer</p>
          <p className="text-interactive text-sm md:text-base">ParentSquare</p>
          <ul className="mt-2 flex flex-wrap lg:flex-nowrap space-x-2">
            <SkillBubble text="Javascript" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="HTML & CSS" />
          </ul>
        </div>
      </div>
      <div className="timeline-item mb-8 md:mb-16">
        <div className="timeline-content">
          <h2 className="hover:text-interactive text-lg md:text-xl lg:text-2xl">
            2019-2022
          </h2>
          <p className="text-md md:text-lg">Developer Lead</p>
          <p className="text-interactive text-sm md:text-base">
            Radial Development Group
          </p>
          <ul className="mt-2 flex flex-wrap lg:flex-nowrap space-x-2">
            <SkillBubble text="React" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Cordova" />
            <SkillBubble text="Swift" />
            <SkillBubble text="HTML & CSS" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="Testing" />
            <SkillBubble text="Project Management" />
          </ul>
        </div>
      </div>
      <div className="timeline-item mb-8 md:mb-16">
        <div className="timeline-content">
          <h2 className="hover:text-interactive text-lg md:text-xl lg:text-2xl">
            2018-2019
          </h2>
          <p className="text-md md:text-lg">Full Stack Software Engineer</p>
          <p className="text-interactive text-sm md:text-base">
            Origin Protocol
          </p>
          <ul className="mt-2 flex flex-wrap lg:flex-nowrap space-x-2">
            <SkillBubble text="Python" />
            <SkillBubble text="React" />
            <SkillBubble text="GraphQL" />
            <SkillBubble text="HTML & CSS" />
          </ul>
        </div>
      </div>
      <div className="timeline-item mb-8 md:mb-16">
        <div className="timeline-content">
          <h2 className="hover:text-interactive text-lg md:text-xl lg:text-2xl">
            2017-2018
          </h2>
          <p className="text-md md:text-lg">Developer Lead</p>
          <p className="text-interactive text-sm md:text-base">
            Radial Development Group
          </p>
          <ul className="mt-2 flex flex-wrap lg:flex-nowrap space-x-2">
            <SkillBubble text="React" />
            <SkillBubble text="Ruby on Rails" />
            <SkillBubble text="Django" />
            <SkillBubble text="HTML & CSS" />
            <SkillBubble text="Building APIs" />
            <SkillBubble text="Testing" />
            <SkillBubble text="Project Management" />
          </ul>
        </div>
      </div>
      <div className="text-center text-text mb-8 md:mb-16">
        <Link
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-interactive text-base md:text-lg lg:text-xl"
        >
          View Full Résumé
        </Link>
      </div>
    </div>
  );
};

export default ResumeTimeline;
