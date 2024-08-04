import {useState, useEffect, useRef} from 'react';

const useIntersection = (sections) => {
  const [activeSection, setActiveSection] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sectionRefs = sections.map(() => useRef(null));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const observerRefs = sections.map(() => useRef(null));

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRefs.forEach((ref) => {
      if (ref.current) {
        const observer = new IntersectionObserver(handleIntersect, {
          threshold: 0.6,
        });
        observer.observe(ref.current);
      }
    });

    return () => {
      observerRefs.forEach((ref) => {
        if (ref.current) {
          const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.6,
          });
          observer.unobserve(ref.current);
        }
      });
    };
  }, [observerRefs]);

  return [activeSection, sectionRefs, observerRefs];
};

export default useIntersection;
