'use client';

import {useEffect, useState, useRef} from 'react';
import MouseGlow from '@/components/mouse-glow';
import Footer from '@/components/footer';
import useIntersection from '@/components/use-intersection';
import AppNav from '@/components/app-nav';
import Home from '@/components/home';
import About from '@/components/about';
import { HomeIcon, UserIcon, FolderIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

const SCROLL_COMPONENTS = [
  { id: 'home', Component: Home },
  { id: 'about', Component: About },
  { id: 'resume', Component: function() {
    return <div>Resume!</div>
  } },
  {id: 'skills', label: 'Skills', icon: function() {
    return <div>Skills!</div>
  }},
];

export const PAGES = [
  {id: 'home', label: 'Home', icon: HomeIcon},
  {id: 'about', label: 'About', icon: UserIcon},
  {id: 'resume', label: 'Resume', icon: FolderIcon},
  {id: 'skills', label: 'Skills', icon: ComputerDesktopIcon},
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
      { threshold: 1.0 }
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
      <AppNav pages={PAGES} activeSection={activeSection} sectionRefs={sectionRefs} visible={false} />
      <main className="h-full flex flex-col md:block">
        <div>
          {PAGES.map((page, index) => {
            const Component = SCROLL_COMPONENTS.find((c) => c.id == page.id)?.Component;
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
                className="h-screen overflow-hidden"
              >
                {Component ? <Component isAboutVisible={isAboutVisible} /> : page.label}
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
