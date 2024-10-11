'use client';

import {useRef, useId} from 'react';
import Link from 'next/link';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';
import {DocumentTextIcon} from '@heroicons/react/24/outline';

import SkillBubble from './skill-bubble';
import useObserver from './use-observer';
import technologies from '@/lib/data/technologies.json';

const SkillBubbles = ({timeRange}) => {
  return (
    <ul className="mt-2 flex flex-wrap">
      {technologies[timeRange]?.map((technology, index) => (
        <SkillBubble text={technology} key={index} />
      ))}
    </ul>
  );
};

const TimelineItem = ({href, timeRange, position, company}) => {
  const groupId = useId();

  return (
    <div
      className="timeline-item hover:bg-opacity-15 hover:bg-deep-blue mb-8"
      data-group={groupId}
    >
      <ArrowTopRightOnSquareIcon
        className="arrow h-5 w-5 ml-2 absolute top-4 right-4 opacity-0 text-gray-500"
        data-group-hover={groupId}
      />
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="timeline-content"
        data-group-hover={groupId}
      >
        <h2 className="text-gray-400 text-md" data-group-hover={groupId}>
          {timeRange}
        </h2>
        <p className="text-lg">{position}</p>
        <p className="text-muted-gold text-sm md:text-base font-extrabold">
          {company}
        </p>
        <SkillBubbles timeRange={timeRange} />
      </Link>
    </div>
  );
};

const ResumeTimeline = () => {
  const timelineRef = useRef(null);
  useObserver(timelineRef, '.timeline-item');

  return (
    <div
      ref={timelineRef}
      className="timeline main-container"
    >
      <div className="content group">
        <header className="relative z-10 flex flex-row items-center pl-6 pb-12">
          <DocumentTextIcon className="h-7 w-7 lg:h-8 lg:w-8 text-gray-500 hover:fill-[#d4af37] lg:mr-2" />
          <span className="pl-2 flex items-center">Resume</span>
        </header>

        <TimelineItem
          href="/resume"
          timeRange="2024-Present"
          position="Full Stack Software Engineer"
          company="Freelance"
        />
        <TimelineItem
          href="https://parentsquare.com"
          timeRange="2022-2024"
          position="Software Engineer"
          company="ParentSquare"
        />
        <TimelineItem
          href="https://radialdevgroup.com"
          timeRange="2019-2022"
          position="Developer Lead"
          company="Radial Development Group"
        />
        <TimelineItem
          href="https://originprotocol.com"
          timeRange="2018-2019"
          position="Full Stack Software Engineer"
          company="Origin Protocol"
        />
        <TimelineItem
          href="https://radialdevgroup.com"
          timeRange="2017-2018"
          position="Developer Lead"
          company="Radial Development Group"
        />

        <div className="timeline-item mb-8 group/e">
          <ArrowTopRightOnSquareIcon className="arrow h-5 w-5 ml-2 absolute top-7 left-48 opacity-0 text-gray-500 group-hover/e:opacity-100 group-hover/e:fill-[#d4af37]" />
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-content hover:text-muted-gold font-semibold md:text-lg"
          >
            View Full Résumé
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;
