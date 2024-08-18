import {useEffect, useRef} from 'react';
import Link from 'next/link';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';
import SkillBubble from './skill-bubble';

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
    <div ref={timelineRef} className="timeline main-container md:ml-24">
      <div className="content group">
        <div className="timeline-item mb-8 hover:bg-neon-blue hover:bg-opacity-15 group/a">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/a:opacity-100" />
          <Link
            href="/resume"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="hover:text-interactive text-gray-400 text-md">
              2024-Present
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              Full Stack Software Engineer
            </p>
            <p className="text-interactive text-sm md:text-base font-extrabold">
              Freelance
            </p>
            <ul className="mt-2 flex flex-wrap">
              <SkillBubble text="React Native" />
              <SkillBubble text="Ruby on Rails" />
              <SkillBubble text="NextJS" />
              <SkillBubble text="ThreeJS" />
              <SkillBubble text="HTML & CSS" />
              <SkillBubble text="Building APIs" />
              <SkillBubble text="Technical blog posts" />
            </ul>
          </Link>
        </div>
        <div className="timeline-item mb-8 hover:bg-neon-blue hover:bg-opacity-15 group/a">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/a:opacity-100" />
          <Link
            href="https://parentsquare.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="hover:text-interactive text-gray-400 text-md">
              2022-2024
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              Full Stack Software Engineer
            </p>
            <p className="text-interactive text-sm md:text-base font-extrabold">
              ParentSquare
            </p>
            <ul className="mt-2 flex flex-wrap">
              <SkillBubble text="Javascript" />
              <SkillBubble text="Ruby on Rails" />
              <SkillBubble text="Building APIs" />
              <SkillBubble text="HTML & CSS" />
            </ul>
          </Link>
        </div>
        <div className="timeline-item mb-8 hover:bg-neon-blue hover:bg-opacity-15 group/b">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/b:opacity-100" />
          <Link
            href="https://radialdevgroup.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="hover:text-interactive text-gray-400 text-md">
              2019-2022
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">Developer Lead</p>
            <p className="text-interactive text-sm md:text-base font-extrabold">
              Radial Development Group
            </p>
            <ul className="mt-2 flex flex-wrap">
              <SkillBubble text="React" />
              <SkillBubble text="Ruby on Rails" />
              <SkillBubble text="Cordova" />
              <SkillBubble text="Swift" />
              <SkillBubble text="HTML & CSS" />
              <SkillBubble text="Building APIs" />
              <SkillBubble text="Testing" />
              <SkillBubble text="Project Management" />
              <SkillBubble text="Mentorship" />
            </ul>
          </Link>
        </div>
        <div className="timeline-item mb-8 hover:bg-neon-blue hover:bg-opacity-15 group/c">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/c:opacity-100" />
          <Link
            href="https://originprotocol.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="hover:text-interactive text-gray-400 text-md">
              2018-2019
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">
              Full Stack Software Engineer
            </p>
            <p className="text-interactive text-sm md:text-base font-extrabold">
              Origin Protocol
            </p>
            <ul className="mt-2 flex flex-wrap">
              <SkillBubble text="Python" />
              <SkillBubble text="React" />
              <SkillBubble text="GraphQL" />
              <SkillBubble text="HTML & CSS" />
              <SkillBubble text="Building APIs" />
            </ul>
          </Link>
        </div>
        <div className="timeline-item mb-8 hover:bg-neon-blue hover:bg-opacity-15 group/d">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/d:opacity-100" />
          <Link
            href="https://radialdevgroup.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="hover:text-interactive text-gray-400 text-md">
              2017-2018
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl">Developer Lead</p>
            <p className="text-interactive text-sm md:text-base font-extrabold">
              Radial Development Group
            </p>
            <ul className="mt-2 flex flex-wrap">
              <SkillBubble text="React" />
              <SkillBubble text="Ruby on Rails" />
              <SkillBubble text="Django" />
              <SkillBubble text="HTML & CSS" />
              <SkillBubble text="Building APIs" />
              <SkillBubble text="Testing" />
              <SkillBubble text="Project Management" />
              <SkillBubble text="Technical blog posts" />
            </ul>
          </Link>
        </div>
        <div className="timeline-item mb-8 group/e">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-5 left-48 opacity-0 text-gray-500 group-hover/e:opacity-100" />
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-content hover:text-interactive font-semibold md:text-lg lg:text-xl"
          >
            View Full Résumé
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;
