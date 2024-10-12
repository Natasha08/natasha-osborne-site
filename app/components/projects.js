import React from 'react';
import Link from 'next/link';
import {FolderOpenIcon} from '@heroicons/react/24/outline';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';

import SkillBubble from './skill-bubble';
import SectionHeader from './section-header';

const projects = [
  {
    title: 'JSPry',
    year: 2024,
    technologies: ['Typescript'],
    src: '/javascript_logo.png',
    description: 'A full featured debugger for testing',
    url: 'https://github.com/Natasha08/JSPry',
  },
  {
    title: '3D Space',
    year: 2024,
    technologies: ['Three.js', 'Next.js'],
    src: '/space_project.jpg',
    description: 'Travel through a wormhole in this 3D experience',
    url: 'https://space.natasha-osborne.dev',
  },
  {
    title: 'Dockerize Legacy Project',
    year: 2024,
    technologies: ['Docker', 'Node.js'],
    src: '/code.png',
    description: 'A Medium blog post about dockerizing a legacy node project',
    url: 'https://medium.com/@natasha08/how-to-dockerize-a-legacy-node-js-project-a-step-by-step-guide-4580b97286e7',
  },
];

const ProjectsPage = () => {
  return (
    <main className="main-container lg:pt-20 relative">
      <SectionHeader Icon={FolderOpenIcon} text="Featured Projects" />

      <div className="p-6 flex items-center">
        <div className="grid grid-cols-1 gap-6 z-10 list-none">
          {projects.map((project, index) => (
            <a
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card relative rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{backgroundImage: `url(${project.src})`}}
              ></div>

              <div className="relative p-4 text-white z-10">
                <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-2">{project.year}</p>
                <div className="flex flex-wrap mt-2">
                  {project.technologies.map((tech, index) => (
                    <SkillBubble
                      key={index}
                      textBackground="bg-deep-blue"
                      text={tech}
                    />
                  ))}
                </div>
                <p className="mt-3">{project.description}</p>
              </div>
            </a>
          ))}
          <div className="m-8 ml-0 group/projects relative">
            <ArrowTopRightOnSquareIcon className="arrow h-5 w-5 ml-2 absolute top-1 left-40 opacity-0 text-gray-500 group-hover/projects:opacity-100 group-hover/projects:fill-[#d4af37]" />
            <Link
              href="/projects"
              className="pt-12 hover:text-muted-gold font-semibold md:text-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
