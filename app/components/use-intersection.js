import {useState, useEffect, useRef, createRef} from 'react';

const useIntersection = (sections) => {
  const [activeSection, setActiveSection] = useState('');

  // Initialize refs only once using useRef, ensuring stable references across re-renders
  const sectionRefs = useRef([]);
  const observerRefs = useRef([]);

  // Ensure sectionRefs and observerRefs have the correct length
  if (sectionRefs.current.length !== sections.length) {
    sectionRefs.current = Array(sections.length)
      .fill()
      .map((_, i) => sectionRefs.current[i] || createRef());
    observerRefs.current = Array(sections.length)
      .fill()
      .map((_, i) => observerRefs.current[i] || createRef());
  }

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observers = observerRefs.current.map((ref) => {
      if (ref.current) {
        const observer = new IntersectionObserver(handleIntersect, {
          threshold: 0.3,
        });
        observer.observe(ref.current);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && observerRefs.current[index].current) {
          observer.unobserve(observerRefs.current[index].current);
        }
      });
    };
  }, [sections]);

  return [activeSection, sectionRefs.current, observerRefs.current];
};

export default useIntersection;
