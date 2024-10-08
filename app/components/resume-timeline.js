import {useEffect, useRef} from 'react';
import Link from 'next/link';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';
import SkillBubble from './skill-bubble';
import {DocumentTextIcon} from '@heroicons/react/24/outline';

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
      className="timeline main-container xxs:ml-2 xs:-ml-6 sm:-ml-10 lg:ml-76"
    >
      <div className="content group w-3/4 lg:w-1/2">
        <header className="relative z-10 flex flex-row items-center pb-16 -ml-8 lg:-ml-8">
          <DocumentTextIcon className="h-7 w-7 lg:h-8 lg:w-8 text-gray-500 hover:fill-[#d4af37] lg:mr-2" />
          <span className="pl-2 flex items-center">Resume</span>
        </header>
        <div className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8 group/f">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/f:opacity-100" />
          <Link
            href="/resume"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="group-hover/f:text-muted-gold text-gray-400 text-md">
              2024-Present
            </h2>
            <p className="text-lg md:text-xl">Full Stack Software Engineer</p>
            <p className="text-muted-gold text-sm md:text-base font-extrabold">
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
        <div className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8 group/a">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/a:opacity-100" />
          <Link
            href="https://parentsquare.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="group-hover/a:text-muted-gold text-gray-400 text-md">
              2022-2024
            </h2>
            <p className="text-lg md:text-xl">Software Engineer</p>
            <p className="text-muted-gold text-sm md:text-base font-extrabold">
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
        <div className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8 group/b">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/b:opacity-100" />
          <Link
            href="https://radialdevgroup.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="group-hover/b:text-muted-gold text-gray-400 text-md">
              2019-2022
            </h2>
            <p className="text-lg md:text-xl">Developer Lead</p>
            <p className="text-muted-gold text-sm md:text-base font-extrabold">
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
        <div className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8 group/c">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/c:opacity-100" />
          <Link
            href="https://originprotocol.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="group-hover/c:text-muted-gold text-gray-400 text-md">
              2018-2019
            </h2>
            <p className="text-lg md:text-xl">Full Stack Software Engineer</p>
            <p className="text-muted-gold text-sm md:text-base font-extrabold">
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
        <div className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8 group/d">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500 group-hover/d:opacity-100" />
          <Link
            href="https://radialdevgroup.com"
            target="_blank"
            rel="noopener
            noreferrer"
            className="timeline-content"
          >
            <h2 className="group-hover/d:text-muted-gold text-gray-400 text-md">
              2017-2018
            </h2>
            <p className="text-lg md:text-xl">Developer Lead</p>
            <p className="text-muted-gold text-sm md:text-base font-extrabold">
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
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2 absolute top-7 left-52 opacity-0 text-gray-500 group-hover/e:opacity-100" />
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-content hover:text-muted-gold font-semibold md:text-lg lg:text-xl"
          >
            View Full Résumé
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;
