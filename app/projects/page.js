'use client';

// import {useState} from 'react';
// import MouseGlow from '@/components/mouse-glow';
// import SkillBubble from '@/components/skill-bubble';

// const projectsData = [
//   {
//     title: 'Workout App',
//     year: 2016,
//     technologies: ['PHP'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 2',
//     year: 2016,
//     technologies: ['Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 3',
//     year: 2017,
//     technologies: ['Angular', 'Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App',
//     year: 2016,
//     technologies: ['PHP'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 2',
//     year: 2016,
//     technologies: ['Node', 'AWS', 'Spam'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 3',
//     year: 2017,
//     technologies: ['Angular', 'Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App',
//     year: 2016,
//     technologies: ['PHP', 'React', 'TailwindCSS'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 2',
//     year: 2016,
//     technologies: ['Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 3',
//     year: 2017,
//     technologies: ['Angular', 'Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App',
//     year: 2016,
//     technologies: ['PHP'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 2',
//     year: 2016,
//     technologies: ['Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 3',
//     year: 2017,
//     technologies: ['Angular', 'Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App',
//     year: 2016,
//     technologies: ['PHP'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 2',
//     year: 2016,
//     technologies: ['Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   {
//     title: 'Workout App 3',
//     year: 2017,
//     technologies: ['Angular', 'Node'],
//     madeAt: 'Personal Project',
//     link: '#',
//   },
//   // Add more project data as needed
// ];

// const DisplaySkillBubbles = ({skills = []}) => {
//   return (
//     <ul className="flex -translate-y-1.5 flex-wrap">
//       {skills.map((skill, index) => (
//         <SkillBubble
//           text={skill}
//           key={index}
//           textColor="text-text"
//           textBackground="bg-neon-blue"
//         />
//       ))}
//     </ul>
//   );
// };

// const ProjectsPage = () => {
//   const [filter, setFilter] = useState('');

//   const filteredProjects = projectsData.filter(
//     (project) =>
//       project.title.toLowerCase().includes(filter.toLowerCase()) ||
//       project.year.toString().includes(filter) ||
//       project.technologies
//         .map((t) => t.toLowerCase())
//         .includes(filter.toLowerCase()) ||
//       project.madeAt.toLowerCase().includes(filter.toLowerCase()),
//   );

//   return (
//     <main className="grid grid-cols-1">
//       <div className="projects-page bg-deep-blue bg-cover bg-fixed fixed w-screen h-screen"></div>
//       <header className="text-4xl text-center mb-8">Projects</header>

//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Filter projects..."
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 rounded border border-gray-300 w-full max-w-md z-10"
//         />
//       </div>

//       <div className="main-container">
//         <table className="table-auto max-w-4xl mx-auto shadow-md rounded-lg bg-translucent-background mt-12 w-full border-collapse text-left">
//           <thead className="">
//             <tr>
//               <th className="px-4 py-2 text-left ">Project</th>
//               <th className="px-4 py-2 text-left hidden sm:block">Year</th>
//               <th className="px-4 py-2 text-left">Built with</th>
//               <th className="px-4 py-2 text-left hidden md:block">Made at</th>
//               <th className="px-4 py-2 text-left">Link</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProjects.length > 0 ? (
//               filteredProjects.map((project, index) => (
//                 <tr
//                   key={index}
//                   className="border-2 border-x-0 border-gray-500 hover:bg-gray-500 hover:border-dotted"
//                 >
//                   <td className="px-4 py-2">{project.title}</td>
//                   <td className="px-4 py-2 hidden sm:block">{project.year}</td>
//                   <td className="px-4 py-2 list-none opacity-0 sm:">
//                     <DisplaySkillBubbles skills={project.technologies} />
//                   </td>
//                   <td className="px-4 py-2 hidden md:block">
//                     {project.madeAt}
//                   </td>
//                   <td className="px-4 py-2 text-blue-600 hover:text-blue-800">
//                     <a href={project.link} className="flex items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         className="w-4 h-4 mr-2"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
//                       </svg>
//                       Github
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="px-4 py-2 text-center">
//                   No projects found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <MouseGlow />
//     </main>
//   );
// };

// export default ProjectsPage;

import React, { useState } from 'react';


const projects = [
  // {
  //   title: 'Magnum Geo App',
  //   year: 2019,
  //   technologies: ['React', 'Python', 'Project Management'],
  //   image: {src: '/mp_pile_config.png',  style: 'cover'},
  //   description: 'Civil Engineering app for pile calculations and customizations',
  // },
  {
    title: 'Mindful Budgeter',
    year: 2024,
    technologies: ['React Native'],
    image: { src: '/space_project.jpg', style: 'cover' },
    description: 'A budgeting app that focuses on bringing awareness to each transaction',
  },
  {
    title: '3D Space',
    year: 2024,
    technologies: ['ThreeJS', 'NextJS'],
    image: { src: '/space_project.jpg', style: 'cover' },
    description: 'Another project description.',
  },
  {
    title: '3D Space',
    year: 2024,
    technologies: ['Docker', 'NodeJS'],
    image: { src: '/space_project.jpg', style: 'cover' },
    description: 'An article about dockerizing a legacy node project',
  },
  // More projects...
];

const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

export default function ProjectsList() {
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const filteredProjects = selectedTechnology === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTechnology));

  return (
    <div className="p-6 bg-deep-blue">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Filter by Technology</h2>
        <div className="flex flex-wrap mt-2">
          <button
            className={`px-4 py-2 mr-2 mb-2 text-sm font-medium rounded ${
              selectedTechnology === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedTechnology('All')}
          >
            All
          </button>
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              className={`px-4 py-2 mr-2 mb-2 text-sm font-medium rounded ${
                selectedTechnology === tech ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedTechnology(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-64"
          >
            {project.image ? (
              <img
                src={project.image?.src}
                alt={project.title}
                className={`w-fit h-48 object-${project.image?.style}`}
              />
            ) : null}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.year}</p>
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-gray-700 text-wrap">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
