'use client';

import {useState} from 'react';
import Fuse from 'fuse.js';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';

import MouseGlow from '@/components/mouse-glow';
import SkillBubble from '@/components/skill-bubble';
import projectsData from '@/lib/data/projects.json';

const fuseOptions = {
  threshold: 0.2,
  keys: ['title', 'year', 'technologies', 'madeAt', 'link'],
};

const fuse = new Fuse(projectsData, fuseOptions);

const SearchInput = ({filter = '', setFilter}) => (
  <div className="flex justify-center mb-6 mx-12">
    <input
      type="text"
      placeholder="Filter projects..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 rounded border border-gray-300 w-full max-w-md z-10"
    />
  </div>
);

const DisplaySkillBubbles = ({skills = []}) => {
  return (
    <ul className="flex -translate-y-1.5 flex-wrap">
      {skills.map((skill, index) => (
        <SkillBubble text={skill} key={index} />
      ))}
    </ul>
  );
};

const ProjectsDisplay = ({projects}) =>
  projects.length > 0 ? (
    projects.map((project, index) => (
      <tr
        key={index}
        className="border-2 border-x-0 border-gray-500 hover:bg-gray-500 hover:border-dotted"
      >
        <td className="px-4 py-4">{project.year}</td>
        <td
          className={`px-4 py-4 md:hidden ${project.link ? 'cursor-pointer' : ''}`}
          data-group={index}
        >
          <a
            href={project.link}
            className="relative flex flex-row"
            target="_blank"
            rel="noopener noreferrer"
            data-group-hover={index}
          >
            {project.title}
            {project.link ? (
              <ArrowTopRightOnSquareIcon
                className="arrow h-5 w-5 ml-2 text-gray-500"
                data-group-hover={index}
              />
            ) : null}
          </a>
        </td>
        <td className="px-4 py-2 hidden md:table-cell">{project.title}</td>
        <td className="px-4 py-2 list-none hidden sm:table-cell">
          <DisplaySkillBubbles skills={project.technologies} />
        </td>
        <td className="px-4 py-4 hidden md:table-cell">{project.madeAt}</td>
        <td className="px-4 py-2 text-blue-600 hover:text-blue-800 hidden md:table-cell">
          {project.link ? (
            <a
              href={project.link}
              className="flex items-center text-sky-400 hover:text-muted-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.includes('github') ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Github
                </>
              ) : (
                project.link
              )}
            </a>
          ) : null}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="px-4 py-2 text-center">
        No projects found.
      </td>
    </tr>
  );

const ProjectsPage = () => {
  const [filter, setFilter] = useState('');
  const filteredProjects = filter
    ? fuse.search(filter).map((result) => result.item)
    : projectsData;

  return (
    <main className="grid grid-cols-1">
      <div className="projects-page bg-fixed fixed w-screen h-screen"></div>
      <header className="text-4xl text-center my-8">Projects</header>

      <SearchInput filter={filter} setFilter={setFilter} />

      <div className="main-container">
        <table className="table-auto max-w-6xl mx-auto shadow-md rounded-lg bg-translucent-background mt-12 border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left w-2/3 sm:w-1/3 md:w-1/6">
                Project
              </th>
              <th className="px-4 py-2 text-left hidden sm:table-cell w-1/2 md:w-1/3">
                Built with
              </th>
              <th className="px-4 py-2 text-left hidden md:table-cell w-1/6">
                Made at
              </th>
              <th className="px-4 py-2 text-left hidden md:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            <ProjectsDisplay projects={filteredProjects} />
          </tbody>
        </table>
      </div>
      <MouseGlow />
    </main>
  );
};

export default ProjectsPage;
