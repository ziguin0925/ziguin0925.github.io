import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrollingDown };
};

export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    const currentObserver = observerRef.current;
    elementsRef.current.forEach((element) => {
      currentObserver.observe(element);
    });

    return () => {
      currentObserver.disconnect();
    };
  }, [callback, options]);

  const observe = (element: Element | null) => {
    if (element && observerRef.current) {
      elementsRef.current.add(element);
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element: Element | null) => {
    if (element && observerRef.current) {
      elementsRef.current.delete(element);
      observerRef.current.unobserve(element);
    }
  };

  return { observe, unobserve };
};
