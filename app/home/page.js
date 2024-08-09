'use client';

import MouseGlow from '@/components/mouse-glow';
import Footer from '@/components/footer';
import useIntersection from '@/components/use-intersection';
import AppNav, {PAGES} from '@/components/app-nav';
import Home from '@/components/home';
import About from '@/components/about';
import ResumeTimeline from '@/components/resume-timeline';

const SCROLL_COMPONENTS = [
  {id: 'home', Component: Home},
  {id: 'about', Component: About},
  {id: 'resume', Component: ResumeTimeline},
  // {
  //   id: 'projects',
  //   Component: function () {
  //     return <div className="h-72 text-text">Projects</div>;
  //   },
  // },
];

export default function Main() {
  const [activeSection, sectionRefs, observerRefs] = useIntersection(PAGES);

  return (
    <>
      <AppNav
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        visible={false}
      />
      <main>
        <div className="grid grid-cols-1 max-w-screen-xl">
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
                className="h-fit col-start-1"
              >
                {Component ? <Component /> : page.label}
              </section>
            );
          })}
        </div>
        <MouseGlow />
        <Footer sectionRefs={sectionRefs} />
      </main>
    </>
  );
}
