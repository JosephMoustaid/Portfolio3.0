import { useState, useEffect } from 'react';

const useMultipleInView = (refs, threshold = 0.1) => {
  const [inViewStates, setInViewStates] = useState(() => Array(refs.length).fill(false));

  useEffect(() => {
    if (!Array.isArray(refs) || refs.length === 0) {
      console.warn("useMultipleInView: 'refs' should be a non-empty array.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            setInViewStates((prev) => {
              const updatedStates = [...prev];
              updatedStates[index] = entry.isIntersecting;
              return updatedStates;
            });
          }
        });
      },
      {
        root: null,        // Default: viewport
        threshold: 0.1,    // Visibility threshold
        rootMargin: '100px', // Trigger earlier
      }
    );
    

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs, threshold]);

  return inViewStates;
};

export default useMultipleInView;
