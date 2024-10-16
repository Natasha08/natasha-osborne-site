'use client';

import MouseGlow from '@/components/mouse-glow';
import useIntersection from '@/components/use-intersection';
import Sidebar, {PAGES} from '@/components/sidebar';
import Home from '@/components/home';
import About from '@/components/about';
import ResumeTimeline from '@/components/resume-timeline';
import Projects from '@/components/projects';

const SCROLL_COMPONENTS = [
  {id: 'home', Component: Home},
  {id: 'about', Component: About},
  {id: 'resume', Component: ResumeTimeline},
  {id: 'projects', Component: Projects},
];

export default function Main() {
  const [activeSection, sectionRefs, observerRefs] = useIntersection(PAGES);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl xl:overflow-visible mx-auto">
      <Sidebar
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        visible={false}
      />
      <div className="lg:col-span-1"></div>
      <main className="lg:col-span-1">
        <div className="ml-4 md:ml-16 lg:m-0 2xl:ml-48">
          {PAGES.map((page, index) => {
            const Component = SCROLL_COMPONENTS.find(
              (c) => c.id === page.id,
            ).Component;

            return (
              <section
                id={page.id}
                key={page.id}
                ref={(el) => {
                  sectionRefs[index].current = el;
                  observerRefs[index].current = el;
                }}
                className="h-fit lg:w-full"
              >
                {Component ? <Component /> : page.label}
              </section>
            );
          })}
        </div>

        <MouseGlow />
      </main>
    </div>
  );
}
