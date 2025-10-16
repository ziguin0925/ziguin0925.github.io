import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GSAPAnimationConfig } from '../types';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP 페이드인 애니메이션 훅
 * @param selector - 애니메이션을 적용할 요소의 셀렉터
 * @param config - GSAP 애니메이션 설정
 */
export const useFadeIn = (
  selector: string,
  config: GSAPAnimationConfig = {}
) => {
  useEffect(() => {
    const { duration = 1, delay = 0, ease = 'power2.out', stagger = 0 } = config;

    gsap.fromTo(
      selector,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        stagger,
      }
    );

    return () => {
      gsap.killTweensOf(selector);
    };
  }, [selector, config]);
};

/**
 * GSAP 스크롤 트리거 애니메이션 훅
 * @param selector - 애니메이션을 적용할 요소의 셀렉터
 * @param trigger - 트리거할 요소의 셀렉터
 * @param config - GSAP 애니메이션 설정
 */
export const useScrollAnimation = (
  selector: string,
  trigger: string,
  config: GSAPAnimationConfig = {}
) => {
  useEffect(() => {
    const { duration = 1, ease = 'power2.out', stagger = 0 } = config;

    gsap.fromTo(
      selector,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, trigger, config]);
};

/**
 * GSAP 스케일 애니메이션 훅
 * @param selector - 애니메이션을 적용할 요소의 셀렉터
 * @param config - GSAP 애니메이션 설정
 */
export const useScaleAnimation = (
  selector: string,
  config: GSAPAnimationConfig = {}
) => {
  useEffect(() => {
    const { duration = 1, delay = 0, ease = 'back.out(1.7)', stagger = 0 } = config;

    gsap.fromTo(
      selector,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        stagger,
      }
    );

    return () => {
      gsap.killTweensOf(selector);
    };
  }, [selector, config]);
};

/**
 * 복합 애니메이션을 위한 커스텀 훅
 * @param animations - 애니메이션 설정 배열
 */
export const useMultipleAnimations = (
  animations: Array<{
    selector: string;
    from: gsap.TweenVars;
    to: gsap.TweenVars;
  }>
) => {
  useEffect(() => {
    animations.forEach(({ selector, from, to }) => {
      gsap.fromTo(selector, from, to);
    });

    return () => {
      animations.forEach(({ selector }) => {
        gsap.killTweensOf(selector);
      });
    };
  }, [animations]);
};

