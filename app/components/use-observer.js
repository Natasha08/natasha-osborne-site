import {useEffect} from 'react';

const useObserver = (ref, queryClass) => {
  useEffect(() => {
    const items = ref.current.querySelectorAll(queryClass);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    items.forEach((item) => {
      intersectionObserver.observe(item);
    });

    return () => {
      items.forEach((item) => {
        intersectionObserver.unobserve(item);
      });
    };
  }, []);
}

export default useObserver;
