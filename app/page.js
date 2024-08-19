'use client';

import MouseGlow from '@/components/mouse-glow';
import useIntersection from '@/components/use-intersection';
import Sidebar, {PAGES} from '@/components/sidebar';
import Home from '@/components/home';
import About from '@/components/about';
import ResumeTimeline from '@/components/resume-timeline';

const SCROLL_COMPONENTS = [
  {id: 'home', Component: Home},
  {id: 'about', Component: About},
  {id: 'resume', Component: ResumeTimeline},
];

export default function Main() {
  const [activeSection, sectionRefs, observerRefs] = useIntersection(PAGES);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-screen-xl">
      <Sidebar
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        visible={false}
      />
      <main className="col-span-1 lg:col-span-3">
        <div className="mx-auto px-4">
          {PAGES.map((page, index) => {
            const Component = SCROLL_COMPONENTS.find(
              (c) => c.id == page.id,
            )?.Component;
            return (
              <section
                id={page.id}
                key={page.id}
                ref={(el) => {
                  sectionRefs[index].current = el;
                  observerRefs[index].current = el;
                }}
                className="h-fit w-screen"
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
