import { useEffect, useRef, useState, useCallback } from 'react';
import { UseScrollResult, UseIntersectionObserverResult, UseVisibilityResult } from '../types';

/**
 * 스크롤 위치와 방향을 추적하는 훅
 * @returns {UseScrollResult} scrollY와 isScrollingDown 값
 */
export const useScroll = (): UseScrollResult => {
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

/**
 * Intersection Observer를 사용하여 요소의 가시성을 관찰하는 훅
 * @param callback - Intersection 콜백 함수
 * @param options - IntersectionObserver 옵션
 * @returns {UseIntersectionObserverResult} observe와 unobserve 함수
 */
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): UseIntersectionObserverResult => {
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

  const observe = useCallback((element: Element | null) => {
    if (element && observerRef.current) {
      elementsRef.current.add(element);
      observerRef.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element | null) => {
    if (element && observerRef.current) {
      elementsRef.current.delete(element);
      observerRef.current.unobserve(element);
    }
  }, []);

  return { observe, unobserve };
};

/**
 * 단일 요소의 가시성을 추적하는 간단한 훅
 * @param threshold - 가시성 임계값 (0-1)
 * @returns {UseVisibilityResult} elementRef와 isVisible 값
 */
export const useVisibility = (threshold = 0.1): UseVisibilityResult => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

