'use client';

import {useEffect, useState, useRef} from 'react';
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
  {
    id: 'skills',
    label: 'Skills',
    Component: function () {
      return <div>Skills!</div>;
    },
  },
];

export default function Main() {
  const [activeSection, sectionRefs, observerRefs] = useIntersection(PAGES);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      {threshold: 1.0},
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <AppNav
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        visible={false}
      />
      <main>
        <div>
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

                  if (page.id === 'about') {
                    aboutRef.current = el;
                  }
                }}
                className="h-screen"
              >
                {Component ? (
                  <Component isAboutVisible={isAboutVisible} />
                ) : (
                  page.label
                )}
              </section>
            );
          })}
        </div>
        <MouseGlow />
        <Footer />
      </main>
    </>
  );
}
